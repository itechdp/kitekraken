import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw, X, AlertCircle, TrendingUp, TrendingDown, Users, DollarSign, Activity, Wallet, Settings } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Alert, AlertDescription } from '../components/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../components/ui/alert-dialog';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

const SuperAdmin = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [accountBalances, setAccountBalances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingBalances, setLoadingBalances] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState(10); // seconds
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showCloseDialog, setShowCloseDialog] = useState(false);
  const [closingPosition, setClosingPosition] = useState(false);
  const [showCloseAllDialog, setShowCloseAllDialog] = useState(false);
  const [closingAllPositions, setClosingAllPositions] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [error, setError] = useState(null);
  const [showDebug, setShowDebug] = useState(false);
  const [debugInfo, setDebugInfo] = useState({
    rawResponse: null,
    parsedData: null,
    dataLength: 0,
    processedUsers: [],
    errors: []
  });

  // Fetch positions from n8n webhook
  const fetchPositionsFromWebhook = async () => {
    const debugErrors = [];
    try {
      // Try direct fetch first, fallback to no-cors mode if needed
      let response;
      try {
        response = await fetch('https://n8n.srv1103655.hstgr.cloud/webhook/d2d76a5e-3873-4478-959f-ef5bc7c513f7', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        });
      } catch (corsError) {
        debugErrors.push(`CORS error: ${corsError.message}`);
        console.log('CORS error, trying proxy endpoint...');
        response = await fetch('/api/webhook', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        });
      }

      if (!response.ok) {
        const error = `Webhook error: ${response.status}`;
        debugErrors.push(error);
        throw new Error(error);
      }

      const contentType = response.headers.get('content-type');
      console.log('Response content-type:', contentType);
      
      const text = await response.text();
      console.log('Raw response text:', text);
      
      setDebugInfo(prev => ({
        ...prev,
        rawResponse: text,
        errors: debugErrors
      }));
      
      // Try to parse as JSON
      let data;
      try {
        data = JSON.parse(text);
      } catch (parseError) {
        debugErrors.push(`JSON parse error: ${parseError.message}`);
        setDebugInfo(prev => ({ ...prev, errors: debugErrors }));
        console.error('Failed to parse response as JSON:', parseError);
        throw new Error('Invalid JSON response from webhook');
      }
      
      console.log('Webhook response:', data);
      console.log('Webhook response type:', typeof data);
      console.log('Is array:', Array.isArray(data));
      
      return data;
    } catch (error) {
      debugErrors.push(`Fetch error: ${error.message}`);
      setDebugInfo(prev => ({ ...prev, errors: debugErrors }));
      console.error('Error fetching positions from webhook:', error);
      throw error;
    }
  };

  // Fetch positions for all users from n8n webhook
  const fetchAllPositions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Call n8n webhook to get all positions
      const webhookData = await fetchPositionsFromWebhook();
      console.log('Raw webhook data:', webhookData);
      
      // Parse the response - expecting array with {name, result} format
      if (!Array.isArray(webhookData)) {
        console.error('Webhook response is not an array:', webhookData);
        console.error('Type:', typeof webhookData);
        console.error('Keys:', Object.keys(webhookData || {}));
        
        // If it's an object with a data property, try that
        if (webhookData && typeof webhookData === 'object' && webhookData.data && Array.isArray(webhookData.data)) {
          console.log('Found data property, using that instead');
          webhookData = webhookData.data;
        } else {
          setUsers([]);
          setLastUpdate(new Date());
          return;
        }
      }

      console.log('Processing webhook data array, length:', webhookData.length);
      console.log('Full webhook data:', JSON.stringify(webhookData, null, 2));

      setDebugInfo(prev => ({
        ...prev,
        parsedData: webhookData,
        dataLength: webhookData.length
      }));

      const usersWithPositions = webhookData.map((userResponse, index) => {
        const userName = userResponse.name || `User ${index + 1}`;
        let positions = [];
        let userError = null;
        
        console.log(`\n===== Processing user ${userName} =====`);
        console.log('Full userResponse object:', JSON.stringify(userResponse, null, 2));
        console.log('Available keys in userResponse:', Object.keys(userResponse));
        
        // Extract API credentials from response - use exact field names from n8n
        const apiKey = userResponse['API Key'] || userResponse.api_key || userResponse.apiKey || null;
        const apiSecret = userResponse['API Secret'] || userResponse.api_secret || userResponse.apiSecret || null;
        
        // Extract current balance - check multiple possible field names
        const currentBalance = userResponse.curr_balance || userResponse.current_balance || 
                              userResponse.balance || userResponse.Balance || 
                              userResponse['Current Balance'] || 0;

        console.log(`Extracted API Key for ${userName}:`, apiKey ? `Found (${apiKey.substring(0, 10)}...)` : 'NOT FOUND');
        console.log(`Extracted API Secret for ${userName}:`, apiSecret ? `Found (${apiSecret.substring(0, 10)}...)` : 'NOT FOUND');
        console.log(`Extracted Current Balance for ${userName}:`, currentBalance);

        try {
          // Handle result === null or undefined (API error case)
          if (userResponse.result === null || userResponse.result === undefined) {
            userError = userResponse.error || 'API credentials error or network issue';
            console.log(`User ${userName} has error:`, userError);
          }
          // Handle result as string (needs parsing)
          else if (typeof userResponse.result === 'string') {
            console.log(`User ${userName} result is string:`, userResponse.result);
            if (userResponse.result === '[]' || userResponse.result === '') {
              // Empty positions array
              positions = [];
              console.log(`User ${userName} has no positions (empty array)`);
            } else {
              try {
                const parsedResult = JSON.parse(userResponse.result);
                console.log(`User ${userName} parsed result:`, parsedResult);
                if (Array.isArray(parsedResult)) {
                  positions = parsedResult.map((position) => {
                    const entryPrice = parseFloat(position.entry_price || 0);
                    const currentPrice = parseFloat(position.mark_price || position.entry_price || 0); // Best Bid = Mark Price
                    const rawSize = parseFloat(position.size || 0); // Keep sign: positive for long, negative for short
                    const contractValue = parseFloat(position.contract_value || position.product?.contract_value || 0);
                    
                    // UPL@Bid = (Best Bid - Entry Price) × Contract Value × Position Size
                    // Position Size includes direction (+ for long, - for short)
                    const uplBid = (currentPrice - entryPrice) * contractValue * rawSize;
                    
                    // Percentage Growth = ((Mark Price - Entry Price) / Entry Price) * 100
                    const percentageGrowth = entryPrice > 0 ? ((currentPrice - entryPrice) / entryPrice) * 100 : 0;
                    
                    return {
                      id: position.product_id || `pos_${Date.now()}_${Math.random()}`,
                      productId: position.product_id,
                      symbol: position.product_symbol || position.product?.symbol || 'UNKNOWN',
                      side: rawSize > 0 ? 'long' : 'short',
                      size: Math.abs(rawSize), // Display as positive
                      entryPrice: entryPrice,
                      currentPrice: currentPrice,
                      contractValue: contractValue,
                      uplBid: uplBid,
                      percentageGrowth: percentageGrowth,
                      unrealizedPnl: parseFloat(position.unrealized_pnl || 0),
                      realizedPnl: parseFloat(position.realized_pnl || 0),
                      leverage: position.product?.default_leverage 
                        ? parseInt(parseFloat(position.product.default_leverage))
                        : 1,
                      margin: parseFloat(position.margin || 0),
                      commission: parseFloat(position.commission || 0),
                      timestamp: position.created_at || new Date().toISOString()
                    };
                  });
                  console.log(`User ${userName} processed ${positions.length} positions from parsed string`);
                } else {
                  console.log(`User ${userName} parsed result is not an array:`, parsedResult);
                }
              } catch (parseError) {
                console.error(`Error parsing string result for ${userName}:`, parseError, userResponse.result);
                userError = 'Failed to parse position data';
              }
            }
          }
          // Handle result as array
          else if (Array.isArray(userResponse.result)) {
            console.log(`User ${userName} result is array:`, userResponse.result);
            positions = userResponse.result.map((position) => {
              const entryPrice = parseFloat(position.entry_price || 0);
              const currentPrice = parseFloat(position.mark_price || position.entry_price || 0); // Best Bid = Mark Price
              const rawSize = parseFloat(position.size || 0); // Keep sign: positive for long, negative for short
              const contractValue = parseFloat(position.contract_value || position.product?.contract_value || 0);
              
              // UPL@Bid = (Best Bid - Entry Price) × Contract Value × Position Size
              // Position Size includes direction (+ for long, - for short)
              const uplBid = (currentPrice - entryPrice) * contractValue * rawSize;
              
              // Percentage Growth = ((Mark Price - Entry Price) / Entry Price) * 100
              const percentageGrowth = entryPrice > 0 ? ((currentPrice - entryPrice) / entryPrice) * 100 : 0;
              
              return {
                id: position.product_id || `pos_${Date.now()}_${Math.random()}`,
                productId: position.product_id,
                symbol: position.product_symbol || position.product?.symbol || 'UNKNOWN',
                side: rawSize > 0 ? 'long' : 'short',
                size: Math.abs(rawSize), // Display as positive
                entryPrice: entryPrice,
                currentPrice: currentPrice,
                contractValue: contractValue,
                uplBid: uplBid,
                percentageGrowth: percentageGrowth,
                unrealizedPnl: parseFloat(position.unrealized_pnl || 0),
                realizedPnl: parseFloat(position.realized_pnl || 0),
                leverage: position.product?.default_leverage 
                  ? parseInt(parseFloat(position.product.default_leverage))
                  : 1,
                margin: parseFloat(position.margin || 0),
                commission: parseFloat(position.commission || 0),
                timestamp: position.created_at || new Date().toISOString()
              };
            });
            console.log(`User ${userName} processed ${positions.length} positions from array`);
          }
          // Handle any other result type
          else {
            console.log(`User ${userName} result is unexpected type:`, typeof userResponse.result, userResponse.result);
            userError = 'Unexpected data format from API';
          }
        } catch (parseError) {
          console.error(`Error parsing positions for ${userName}:`, parseError);
          userError = 'Failed to parse position data';
        }

        // Calculate total P&L based on UPL@Bid
        const totalPnl = positions.reduce((sum, pos) => sum + (pos.uplBid || 0), 0);
        const totalMargin = positions.reduce((sum, pos) => sum + pos.margin, 0);

        const userObj = {
          id: `user_${index}_${userName.replace(/\s+/g, '_')}`,
          name: userName,
          email: userResponse.email || '',
          apiKey: apiKey,
          apiSecret: apiSecret,
          currentBalance: parseFloat(currentBalance) || 0,
          positions,
          totalPnl,
          totalMargin,
          positionCount: positions.length,
          status: userError ? 'error' : (positions.length > 0 ? 'active' : 'inactive'),
          error: userError,
          lastActive: new Date().toISOString()
        };

        console.log(`Final user object for ${userName}:`, {
          ...userObj,
          apiKey: userObj.apiKey ? 'Present' : 'Missing',
          apiSecret: userObj.apiSecret ? 'Present' : 'Missing',
          currentBalance: userObj.currentBalance
        });
        return userObj;
      });

      console.log('Processed users with positions:', usersWithPositions);
      console.log('Total users to display:', usersWithPositions.length);
      console.log('User names:', usersWithPositions.map(u => u.name));
      
      setDebugInfo(prev => ({
        ...prev,
        processedUsers: usersWithPositions.map(u => ({
          name: u.name,
          status: u.status,
          error: u.error,
          positionCount: u.positionCount,
          totalPnl: u.totalPnl
        }))
      }));
      
      setUsers(usersWithPositions);
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Error fetching positions:', error);
      setError('Failed to fetch user positions');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch account balances from delta_users table
  const fetchAccountBalances = useCallback(async () => {
    setLoadingBalances(true);
    try {
      console.log('Fetching account balances from delta_users table...');
      
      const { data, error } = await supabase
        .from('delta_users')
        .select('name, curr_balance, email')
        .order('name', { ascending: true });

      if (error) {
        console.error('Error fetching account balances:', error);
        throw error;
      }

      console.log('Account balances fetched:', data);
      setAccountBalances(data || []);
    } catch (error) {
      console.error('Failed to fetch account balances:', error);
    } finally {
      setLoadingBalances(false);
    }
  }, []);

  // Close position function
  // Close all positions for all users
  const closeAllPositions = async () => {
    setClosingAllPositions(true);
    try {
      console.log('===== STARTING CLOSE ALL POSITIONS FLOW =====');
      
      // Step 1: Fetch fresh data from n8n webhook to get all user data with API credentials
      console.log('Step 1: Fetching fresh data from n8n webhook...');
      const webhookData = await fetchPositionsFromWebhook();
      console.log('Received webhook data for', webhookData.length, 'users');
      
      // Step 2: Collect all positions from all users
      console.log('Step 2: Collecting all positions from all users...');
      const allPositions = [];
      
      for (const user of users) {
        if (user.positions && user.positions.length > 0) {
          // Find user in webhook data to get API credentials
          const userInWebhook = webhookData.find(u => u.name === user.name);
          
          if (!userInWebhook) {
            console.warn(`Skipping user ${user.name} - not found in webhook response`);
            continue;
          }
          
          // Extract API credentials
          const apiKey = userInWebhook['API Key'] || userInWebhook.api_key || userInWebhook.apiKey || null;
          const apiSecret = userInWebhook['API Secret'] || userInWebhook.api_secret || userInWebhook.apiSecret || null;
          
          if (!apiKey || !apiSecret) {
            console.warn(`Skipping user ${user.name} - missing API credentials`);
            continue;
          }
          
          // Add each position with user's API credentials
          for (const position of user.positions) {
            allPositions.push({
              api_key: apiKey,
              api_secret: apiSecret,
              product_id: position.productId,
              product_symbol: position.symbol,
              size: position.size,
              user_name: user.name
            });
          }
        }
      }
      
      console.log(`Collected ${allPositions.length} positions from ${users.length} users`);
      
      if (allPositions.length === 0) {
        alert('No open positions found to close');
        setClosingAllPositions(false);
        setShowCloseAllDialog(false);
        return;
      }
      
      // Step 3: Prepare payload with array of all positions
      console.log('Step 3: Preparing payload for close all positions webhook...');
      const payload = {
        positions: allPositions
      };
      
      console.log('===== CLOSE ALL POSITIONS WEBHOOK CALL =====');
      console.log('Sending', allPositions.length, 'positions to webhook');
      console.log('Webhook URL:', 'https://n8n.srv1103655.hstgr.cloud/webhook/ccbbd4cb-44cd-4aa1-9824-a1f9c4af98ea');
      console.log('Method: POST');
      console.log('Payload structure:', {
        positions: `Array[${allPositions.length}]`,
        sample: allPositions[0]
      });
      
      // Step 4: Call n8n webhook to close all positions
      console.log('Step 4: Calling n8n close all positions webhook...');
      const response = await fetch('https://n8n.srv1103655.hstgr.cloud/webhook/ccbbd4cb-44cd-4aa1-9824-a1f9c4af98ea', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      console.log('Response received:');
      console.log('Status:', response.status);
      console.log('Status Text:', response.statusText);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ n8n webhook error response:', errorText);
        console.log('===== CLOSE ALL POSITIONS FAILED =====');
        throw new Error(`Webhook request failed: ${response.status} - ${errorText}`);
      }
      
      const responseText = await response.text();
      console.log('Raw response text:', responseText);
      
      let result;
      try {
        result = JSON.parse(responseText);
        console.log('✅ Parsed response JSON:', result);
      } catch (parseError) {
        console.log('⚠️ Response is not JSON:', responseText);
        result = { raw: responseText };
      }
      
      console.log('===== CLOSE ALL POSITIONS SUCCESS =====');
      
      // Wait before refreshing
      console.log('Waiting 3 seconds before refreshing positions...');
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      console.log('Refreshing positions...');
      await fetchAllPositions();
      
      setShowCloseAllDialog(false);
      
      console.log('✅ All positions close request completed successfully');
      console.log('===== CLOSE ALL POSITIONS FLOW COMPLETE =====');
      alert(`Successfully sent close request for ${allPositions.length} positions from ${users.filter(u => u.positions?.length > 0).length} users`);
    } catch (error) {
      console.error('===== CLOSE ALL POSITIONS ERROR =====');
      console.error('Error type:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      alert(`Failed to close all positions: ${error.message}`);
    } finally {
      setClosingAllPositions(false);
    }
  };

  const closePosition = async (position, userId) => {
    setClosingPosition(true);
    try {
      console.log('===== STARTING CLOSE POSITION FLOW =====');
      console.log('Position to close:', {
        symbol: position.symbol,
        productId: position.productId,
        size: position.size,
        userName: position.userName
      });
      
      // Step 1: Fetch fresh data from n8n webhook to get API credentials
      console.log('Step 1: Fetching fresh data from n8n webhook...');
      const webhookData = await fetchPositionsFromWebhook();
      console.log('Received webhook data for', webhookData.length, 'users');
      
      // Step 2: Find the user in the fresh webhook data
      console.log('Step 2: Looking for user:', position.userName);
      const userInWebhook = webhookData.find(u => u.name === position.userName);
      
      if (!userInWebhook) {
        console.error('User not found in webhook response');
        console.log('Available users:', webhookData.map(u => u.name));
        throw new Error(`User "${position.userName}" not found in webhook response`);
      }
      
      console.log('Found user in webhook:', position.userName);
      console.log('Full user data from webhook:', JSON.stringify(userInWebhook, null, 2));
      console.log('Available keys:', Object.keys(userInWebhook));
      
      // Step 3: Extract API credentials from the webhook response
      console.log('Step 3: Extracting API credentials...');
      const apiKey = userInWebhook['API Key'] || userInWebhook.api_key || userInWebhook.apiKey || null;
      const apiSecret = userInWebhook['API Secret'] || userInWebhook.api_secret || userInWebhook.apiSecret || null;
      
      console.log('API Key extracted:', apiKey ? `✓ Found (${apiKey.substring(0, 15)}...)` : '✗ NOT FOUND');
      console.log('API Secret extracted:', apiSecret ? `✓ Found (${apiSecret.substring(0, 15)}...)` : '✗ NOT FOUND');
      
      if (!apiKey || !apiSecret) {
        console.error('❌ API credentials missing in webhook response');
        console.error('Tried fields: "API Key", "API Secret", api_key, apiKey');
        console.error('User object keys:', Object.keys(userInWebhook));
        console.error('Full user object:', userInWebhook);
        throw new Error('API credentials not found in webhook response. Please check n8n webhook configuration.');
      }
      
      // Step 4: Prepare payload for close position webhook
      console.log('Step 4: Preparing payload for close position webhook...');
      const payload = {
        api_key: apiKey,
        api_secret: apiSecret,
        product_id: position.productId,
        product_symbol: position.symbol,
        size: position.size
      };

      console.log('===== CLOSE POSITION WEBHOOK CALL =====');
      console.log('Payload:', {
        api_key: `${apiKey.substring(0, 15)}...`,
        api_secret: `${apiSecret.substring(0, 15)}...`,
        product_id: payload.product_id,
        product_symbol: payload.product_symbol,
        size: payload.size
      });
      console.log('Webhook URL:', 'https://n8n.srv1103655.hstgr.cloud/webhook-test/717a240d-df2a-4dc0-a2e6-4986bfa9deae');
      console.log('Method: POST');
      console.log('Headers:', { 'Content-Type': 'application/json', 'Accept': 'application/json' });

      // Step 5: Call n8n webhook to close position
      console.log('Step 5: Calling n8n close position webhook...');
      const response = await fetch('https://n8n.srv1103655.hstgr.cloud/webhook/717a240d-df2a-4dc0-a2e6-4986bfa9deae', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      console.log('Response received:');
      console.log('Status:', response.status);
      console.log('Status Text:', response.statusText);
      console.log('Headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ n8n webhook error response:', errorText);
        console.log('===== CLOSE POSITION FAILED =====');
        throw new Error(`Webhook request failed: ${response.status} - ${errorText}`);
      }

      const responseText = await response.text();
      console.log('Raw response text:', responseText);
      
      let result;
      try {
        result = JSON.parse(responseText);
        console.log('✅ Parsed response JSON:', result);
      } catch (parseError) {
        console.log('⚠️ Response is not JSON:', responseText);
        result = { raw: responseText };
      }
      
      console.log('===== CLOSE POSITION SUCCESS =====');

      // Wait a moment then refresh positions
      console.log('Waiting 2 seconds before refreshing positions...');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Refreshing positions...');
      await fetchAllPositions();

      setShowCloseDialog(false);
      setSelectedPosition(null);
      
      console.log('✅ Position close request completed successfully');
      console.log('===== CLOSE POSITION FLOW COMPLETE =====');
      alert(`Position close request sent successfully for ${position.symbol}`);
    } catch (error) {
      console.error('===== CLOSE POSITION ERROR =====');
      console.error('Error type:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      console.error('Full error object:', error);
      alert(`Failed to close position: ${error.message}`);
    } finally {
      setClosingPosition(false);
    }
  };

  // Auto-refresh effect
  useEffect(() => {
    fetchAllPositions();
    fetchAccountBalances();

    if (autoRefresh) {
      const interval = setInterval(() => {
        fetchAllPositions();
        fetchAccountBalances();
      }, refreshInterval * 1000);

      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshInterval, fetchAllPositions, fetchAccountBalances]);

  // Calculate summary statistics
  const summary = {
    totalUsers: users.length,
    totalPositions: users.reduce((sum, user) => sum + user.positionCount, 0),
    totalPnl: users.reduce((sum, user) => sum + user.totalPnl, 0),
    totalMargin: users.reduce((sum, user) => sum + user.totalMargin, 0)
  };

  // Debug: Log users being rendered
  console.log('Rendering SuperAdmin with users:', users.length, users.map(u => u.name));

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Super Admin Dashboard</h1>
              <p className="text-gray-400">Monitor and manage all user positions in real-time</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right text-sm">
                <p className="text-gray-400">Last updated</p>
                <p className="text-white font-medium">{lastUpdate.toLocaleTimeString()}</p>
              </div>
              <Button
                onClick={() => navigate('/superadmin/workflows')}
                variant="outline"
                className="bg-[#1a1c1e] border-[#2a2c2e] text-white hover:bg-[#2a2c2e]"
              >
                <Settings className="w-4 h-4 mr-2" />
                Manage Workflows
              </Button>
              <Button
                onClick={() => {
                  const totalPositions = users.reduce((sum, user) => sum + (user.positions?.length || 0), 0);
                  if (totalPositions === 0) {
                    alert('No open positions to close');
                    return;
                  }
                  setShowCloseAllDialog(true);
                }}
                disabled={loading || users.length === 0}
                className="bg-red-600 hover:bg-red-700"
              >
                <X className="w-4 h-4 mr-2" />
                Close All Positions
              </Button>
              <Button
                onClick={fetchAllPositions}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          </div>

          {/* Auto-refresh controls */}
          <div className="flex items-center gap-4 p-4 bg-[#1a1c1e] rounded-lg border border-[#2a2c2e]">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={autoRefresh}
                onChange={(e) => setAutoRefresh(e.target.checked)}
                className="w-4 h-4 accent-blue-600"
              />
              <span className="text-sm text-gray-300">Auto-refresh</span>
            </label>
            
            {autoRefresh && (
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-400">Interval:</label>
                <select
                  value={refreshInterval}
                  onChange={(e) => setRefreshInterval(Number(e.target.value))}
                  className="bg-[#0a0b0d] border border-[#2a2c2e] rounded px-3 py-1 text-sm text-white"
                >
                  <option value={5}>5 seconds</option>
                  <option value={10}>10 seconds</option>
                  <option value={30}>30 seconds</option>
                  <option value={60}>1 minute</option>
                </select>
              </div>
            )}
          </div>

          {/* Debug Panel */}
          <div className="mt-6">
            <Button
              onClick={() => setShowDebug(!showDebug)}
              variant="outline"
              className="bg-[#1a1c1e] border-[#2a2c2e] text-white hover:bg-[#2a2c2e]"
            >
              {showDebug ? 'Hide' : 'Show'} Debug Info
            </Button>
          </div>

          {showDebug && (
            <Card className="mt-4 bg-[#1a1c1e] border-yellow-500/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">🔍 Debug Information</h3>
                
                {/* Errors */}
                {debugInfo.errors.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-red-400 font-semibold mb-2">Errors:</h4>
                    <div className="bg-red-500/10 border border-red-500/30 rounded p-3 space-y-1">
                      {debugInfo.errors.map((err, i) => (
                        <div key={i} className="text-red-300 text-sm font-mono">{err}</div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Raw Response */}
                <div className="mb-4">
                  <h4 className="text-blue-400 font-semibold mb-2">
                    Raw Webhook Response ({debugInfo.rawResponse?.length || 0} characters):
                  </h4>
                  <div className="bg-[#0a0b0d] border border-[#2a2c2e] rounded p-3 max-h-60 overflow-auto">
                    <pre className="text-gray-300 text-xs font-mono whitespace-pre-wrap">
                      {debugInfo.rawResponse || 'No response yet...'}
                    </pre>
                  </div>
                </div>

                {/* Parsed Data */}
                <div className="mb-4">
                  <h4 className="text-green-400 font-semibold mb-2">
                    Parsed Data (Array Length: {debugInfo.dataLength}):
                  </h4>
                  <div className="bg-[#0a0b0d] border border-[#2a2c2e] rounded p-3 max-h-60 overflow-auto">
                    <pre className="text-gray-300 text-xs font-mono whitespace-pre-wrap">
                      {JSON.stringify(debugInfo.parsedData, null, 2) || 'No data parsed yet...'}
                    </pre>
                  </div>
                </div>

                {/* Processed Users Summary */}
                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">
                    Processed Users ({debugInfo.processedUsers.length}):
                  </h4>
                  <div className="bg-[#0a0b0d] border border-[#2a2c2e] rounded p-3 max-h-60 overflow-auto">
                    {debugInfo.processedUsers.length === 0 ? (
                      <p className="text-gray-500 text-sm">No users processed yet...</p>
                    ) : (
                      <div className="space-y-2">
                        {debugInfo.processedUsers.map((user, i) => (
                          <div key={i} className="border-b border-[#2a2c2e] pb-2">
                            <div className="flex items-center justify-between">
                              <span className="text-white font-medium">{user.name}</span>
                              <span className={`px-2 py-1 rounded text-xs ${
                                user.status === 'active' ? 'bg-green-500/20 text-green-400' :
                                user.status === 'error' ? 'bg-red-500/20 text-red-400' :
                                'bg-gray-500/20 text-gray-400'
                              }`}>
                                {user.status}
                              </span>
                            </div>
                            <div className="text-xs text-gray-400 mt-1 space-y-1">
                              <div>Positions: {user.positionCount}</div>
                              <div>P&L: ${user.totalPnl?.toFixed(2) || '0.00'}</div>
                              {user.error && <div className="text-red-400">Error: {user.error}</div>}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Current Users State */}
                <div className="mt-4 pt-4 border-t border-[#2a2c2e]">
                  <h4 className="text-orange-400 font-semibold mb-2">
                    Current Users State ({users.length} users):
                  </h4>
                  <div className="text-sm text-gray-300">
                    {users.map((u, i) => (
                      <span key={i} className="inline-block bg-blue-500/20 px-2 py-1 rounded mr-2 mb-2">
                        {u.name} ({u.positionCount} pos)
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[#1a1c1e] border-[#2a2c2e]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Total Users</p>
                  <h3 className="text-3xl font-bold text-white">{summary.totalUsers}</h3>
                </div>
                <Users className="w-12 h-12 text-blue-500 opacity-50" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1c1e] border-[#2a2c2e]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Open Positions</p>
                  <h3 className="text-3xl font-bold text-white">{summary.totalPositions}</h3>
                </div>
                <Activity className="w-12 h-12 text-purple-500 opacity-50" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1c1e] border-[#2a2c2e]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Total P&L</p>
                  <h3 className={`text-3xl font-bold ${summary.totalPnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    ${summary.totalPnl.toFixed(2)}
                  </h3>
                </div>
                {summary.totalPnl >= 0 ? (
                  <TrendingUp className="w-12 h-12 text-green-500 opacity-50" />
                ) : (
                  <TrendingDown className="w-12 h-12 text-red-500 opacity-50" />
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1c1e] border-[#2a2c2e]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Total Margin</p>
                  <h3 className="text-3xl font-bold text-white">${summary.totalMargin.toFixed(2)}</h3>
                </div>
                <DollarSign className="w-12 h-12 text-yellow-500 opacity-50" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Account Balances Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Wallet className="w-6 h-6 text-yellow-500" />
              Account Balances
            </h2>
            <Button
              onClick={fetchAccountBalances}
              disabled={loadingBalances}
              variant="outline"
              className="bg-[#1a1c1e] border-[#2a2c2e] text-white hover:bg-[#2a2c2e]"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${loadingBalances ? 'animate-spin' : ''}`} />
              Refresh Balances
            </Button>
          </div>

          {loadingBalances ? (
            <Card className="bg-[#1a1c1e] border-[#2a2c2e]">
              <CardContent className="p-8 text-center">
                <RefreshCw className="w-8 h-8 text-blue-500 mx-auto mb-3 animate-spin" />
                <p className="text-gray-400">Loading account balances...</p>
              </CardContent>
            </Card>
          ) : accountBalances.length === 0 ? (
            <Alert className="bg-[#1a1c1e] border-[#2a2c2e]">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                No accounts found in the database.
              </AlertDescription>
            </Alert>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {accountBalances.map((account, index) => (
                <Card key={index} className="bg-[#1a1c1e] border-[#2a2c2e] hover:border-yellow-500/50 transition-colors">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-white">{account.name?.charAt(0) || 'U'}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-white truncate">{account.name}</h3>
                        {account.email && (
                          <p className="text-xs text-gray-400 truncate">{account.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-[#2a2c2e]">
                      <span className="text-sm text-gray-400">Balance</span>
                      <span className="text-xl font-bold text-yellow-400">
                        ${parseFloat(account.curr_balance || 0).toFixed(2)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Users and Positions */}
        <div className="space-y-6">
          {loading && users.length === 0 ? (
            <Card className="bg-[#1a1c1e] border-[#2a2c2e]">
              <CardContent className="p-12 text-center">
                <RefreshCw className="w-12 h-12 text-blue-500 mx-auto mb-4 animate-spin" />
                <p className="text-gray-400">Loading positions...</p>
              </CardContent>
            </Card>
          ) : users.length === 0 ? (
            <Alert className="bg-[#1a1c1e] border-[#2a2c2e]">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                No active users found. Please add users with Delta Exchange API credentials.
              </AlertDescription>
            </Alert>
          ) : (
            users.map((user) => (
              <Card key={user.id} className="bg-[#1a1c1e] border-[#2a2c2e]">
                <CardContent className="p-6">
                  {/* User Header - Always Visible */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold">{user.name.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-white">{user.name}</h3>
                          {user.error && (
                            <span className="px-2 py-1 rounded text-xs bg-red-500/20 text-red-400 font-medium">
                              Error
                            </span>
                          )}
                          {user.positionCount > 0 && (
                            <span className="px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-400 font-medium">
                              {user.positionCount} {user.positionCount === 1 ? 'Position' : 'Positions'}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-400 mt-1">{user.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Total P&L</p>
                      <p className={`text-2xl font-bold ${user.totalPnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        ${user.totalPnl.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Positions - Always Visible */}
                  <div>
                      {/* Error Display */}
                      {user.error && (
                        <Alert className="bg-red-500/10 border-red-500/50 mb-4">
                          <AlertCircle className="h-4 w-4 text-red-500" />
                          <AlertDescription className="text-red-400">
                            {user.error}
                          </AlertDescription>
                        </Alert>
                      )}

                      {/* Positions */}
                      {user.positions.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                          <Activity className="w-12 h-12 mx-auto mb-3 opacity-50" />
                          <p>No open positions</p>
                          {user.status === 'inactive' && !user.error && (
                            <p className="text-xs mt-2">User has no active positions</p>
                          )}
                        </div>
                      ) : (
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-[#2a2c2e]">
                                <th className="text-left text-sm text-gray-400 font-medium py-3 px-2">Symbol</th>
                                <th className="text-left text-sm text-gray-400 font-medium py-3 px-2">Side</th>
                                <th className="text-right text-sm text-gray-400 font-medium py-3 px-2">Size</th>
                                <th className="text-right text-sm text-gray-400 font-medium py-3 px-2">Entry Price</th>
                                <th className="text-right text-sm text-gray-400 font-medium py-3 px-2">Current Price</th>
                                <th className="text-right text-sm text-gray-400 font-medium py-3 px-2">% Growth</th>
                                <th className="text-right text-sm text-gray-400 font-medium py-3 px-2">UPL@Bid</th>
                                <th className="text-center text-sm text-gray-400 font-medium py-3 px-2">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {user.positions.map((position) => (
                                <tr key={position.id} className="border-b border-[#2a2c2e] hover:bg-[#0a0b0d] transition-colors">
                                  <td className="py-3 px-2">
                                    <span className="font-medium text-white">{position.symbol}</span>
                                  </td>
                                  <td className="py-3 px-2">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                                      position.side === 'long' 
                                        ? 'bg-green-500/20 text-green-400' 
                                        : 'bg-red-500/20 text-red-400'
                                    }`}>
                                      {position.side.toUpperCase()}
                                    </span>
                                  </td>
                                  <td className="text-right py-3 px-2 text-white">{position.size}</td>
                                  <td className="text-right py-3 px-2 text-white">${position.entryPrice.toLocaleString()}</td>
                                  <td className="text-right py-3 px-2 text-white">${position.currentPrice.toLocaleString()}</td>
                                  <td className={`text-right py-3 px-2 font-medium ${
                                    (position.percentageGrowth || 0) >= 0 ? 'text-green-400' : 'text-red-400'
                                  }`}>
                                    {(position.percentageGrowth || 0) > 0 ? '+' : ''}{(position.percentageGrowth || 0).toFixed(2)}%
                                  </td>
                                  <td className={`text-right py-3 px-2 font-medium ${
                                    (position.uplBid || 0) >= 0 ? 'text-green-400' : 'text-red-400'
                                  }`}>
                                    ${(position.uplBid || 0).toFixed(2)}
                                  </td>
                                  <td className="text-center py-3 px-2">
                                    <Button
                                      size="sm"
                                      variant="destructive"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedPosition({ ...position, userId: user.id, userName: user.name });
                                        setShowCloseDialog(true);
                                      }}
                                      className="bg-red-600 hover:bg-red-700"
                                    >
                                      <X className="w-4 h-4 mr-1" />
                                      Close
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Close All Positions Confirmation Dialog */}
      <AlertDialog open={showCloseAllDialog} onOpenChange={setShowCloseAllDialog}>
        <AlertDialogContent className="bg-[#1a1c1e] border-[#2a2c2e]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white flex items-center gap-2">
              <X className="w-5 h-5 text-red-500" />
              Close All Positions
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400">
              Are you sure you want to close ALL open positions for ALL users?
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="bg-[#0a0b0d] rounded-lg p-4 my-4 space-y-3">
            <div className="flex justify-between items-center border-b border-[#2a2c2e] pb-2">
              <span className="text-gray-400">Total Users:</span>
              <span className="text-white font-medium">{users.length}</span>
            </div>
            <div className="flex justify-between items-center border-b border-[#2a2c2e] pb-2">
              <span className="text-gray-400">Users with Positions:</span>
              <span className="text-white font-medium">
                {users.filter(u => u.positions && u.positions.length > 0).length}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-[#2a2c2e] pb-2">
              <span className="text-gray-400">Total Positions:</span>
              <span className="text-yellow-400 font-bold">
                {users.reduce((sum, user) => sum + (user.positions?.length || 0), 0)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Total P&L (UPL@Bid):</span>
              <span className={`font-bold ${
                users.reduce((sum, user) => sum + (user.totalPnl || 0), 0) >= 0 
                  ? 'text-green-400' 
                  : 'text-red-400'
              }`}>
                ${users.reduce((sum, user) => sum + (user.totalPnl || 0), 0).toFixed(2)}
              </span>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
            <p className="text-red-400 text-sm flex items-start gap-2">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Warning:</strong> This will send close requests for all {users.reduce((sum, user) => sum + (user.positions?.length || 0), 0)} open positions 
                across {users.filter(u => u.positions && u.positions.length > 0).length} users to the n8n webhook for processing.
              </span>
            </p>
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel className="bg-[#2a2c2e] text-white hover:bg-[#3a3c3e]">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={closeAllPositions}
              disabled={closingAllPositions}
              className="bg-red-600 hover:bg-red-700"
            >
              {closingAllPositions ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Closing All Positions...
                </>
              ) : (
                <>
                  <X className="w-4 h-4 mr-2" />
                  Close All Positions
                </>
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Close Position Confirmation Dialog */}
      <AlertDialog open={showCloseDialog} onOpenChange={setShowCloseDialog}>
        <AlertDialogContent className="bg-[#1a1c1e] border-[#2a2c2e]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">Close Position</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400">
              Are you sure you want to close this position? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          {selectedPosition && (
            <div className="bg-[#0a0b0d] rounded-lg p-4 my-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">User:</span>
                <span className="text-white font-medium">{selectedPosition.userName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Symbol:</span>
                <span className="text-white font-medium">{selectedPosition.symbol}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Product ID:</span>
                <span className="text-white font-medium text-xs">{selectedPosition.productId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Side:</span>
                <span className={`font-medium ${selectedPosition.side === 'long' ? 'text-green-400' : 'text-red-400'}`}>
                  {selectedPosition.side.toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Size:</span>
                <span className="text-white font-medium">{selectedPosition.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">UPL@Bid:</span>
                <span className={`font-medium ${(selectedPosition.uplBid || 0) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  ${(selectedPosition.uplBid || 0).toFixed(2)}
                </span>
              </div>
              
              {/* Debug: Show API credentials status */}
              <div className="mt-4 pt-4 border-t border-[#2a2c2e]">
                <h4 className="text-yellow-400 text-sm font-semibold mb-2">Webhook Data Check:</h4>
                {(() => {
                  const user = users.find(u => u.id === selectedPosition.userId);
                  return user ? (
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-400">API Key:</span>
                        <span className={user.apiKey ? 'text-green-400' : 'text-red-400'}>
                          {user.apiKey ? `✓ Present (${user.apiKey.substring(0, 15)}...)` : '✗ Missing'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">API Secret:</span>
                        <span className={user.apiSecret ? 'text-green-400' : 'text-red-400'}>
                          {user.apiSecret ? `✓ Present (${user.apiSecret.substring(0, 15)}...)` : '✗ Missing'}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-red-400 text-xs">User not found</p>
                  );
                })()}
              </div>
            </div>
          )}

          <AlertDialogFooter>
            <AlertDialogCancel className="bg-[#2a2c2e] text-white hover:bg-[#3a3c3e]">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => selectedPosition && closePosition(selectedPosition, selectedPosition.userId)}
              disabled={closingPosition}
              className="bg-red-600 hover:bg-red-700"
            >
              {closingPosition ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Closing...
                </>
              ) : (
                <>
                  <X className="w-4 h-4 mr-2" />
                  Close Position
                </>
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SuperAdmin;
