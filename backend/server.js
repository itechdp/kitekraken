require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Credentials from environment
const N8N_BASE_URL = process.env.N8N_BASE_URL || 'https://n8n.srv1103655.hstgr.cloud';
const N8N_API_KEY = process.env.N8N_API_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZDhkOTAyZS00NzZjLTRlNzktYTU1Ni0wYWZkMTBlZGY4ZmIiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzY1MTI2Njc1fQ.UQuIAn5tQc_Ic4gD5Iq329jlk6tP6NWnJgDOZ8hyn84';

// Middleware
app.use(cors());
app.use(express.json());

console.log('\n🚀 Starting n8n Workflow Manager Backend...\n');

// ============================================
// HEALTH CHECK ENDPOINT
// ============================================

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Backend is running',
    timestamp: new Date().toISOString()
  });
});

// ============================================
// N8N API PROXY ENDPOINTS
// ============================================

// Get all workflows
app.get('/api/n8n/workflows', async (req, res) => {
  try {
    console.log('📥 [GET] Fetching workflows from n8n...');
    
    const response = await axios.get(`${N8N_BASE_URL}/api/v1/workflows`, {
      headers: {
        'X-N8N-API-KEY': N8N_API_KEY,
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    });

    console.log(`✅ [GET] Successfully fetched ${response.data.data?.length || 0} workflows`);
    res.json(response.data);
  } catch (error) {
    console.error('❌ [GET] Error fetching workflows:', error.message);
    const statusCode = error.response?.status || 500;
    res.status(statusCode).json({
      error: 'Failed to fetch workflows',
      message: error.message,
    });
  }
});

// Get single workflow
app.get('/api/n8n/workflows/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`📥 [GET] Fetching workflow: ${id}`);
    
    const response = await axios.get(`${N8N_BASE_URL}/api/v1/workflows/${id}`, {
      headers: {
        'X-N8N-API-KEY': N8N_API_KEY,
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    });

    console.log(`✅ [GET] Successfully fetched workflow: ${id}`);
    res.json(response.data);
  } catch (error) {
    console.error(`❌ [GET] Error fetching workflow ${req.params.id}:`, error.message);
    const statusCode = error.response?.status || 500;
    res.status(statusCode).json({
      error: 'Failed to fetch workflow',
      message: error.message,
    });
  }
});

// Activate workflow
app.post('/api/n8n/workflows/:id/activate', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`🟢 [POST] Activating workflow: ${id}`);
    
    const response = await axios.post(
      `${N8N_BASE_URL}/api/v1/workflows/${id}/activate`,
      {},
      {
        headers: {
          'X-N8N-API-KEY': N8N_API_KEY,
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      }
    );

    console.log(`✅ [POST] Successfully activated workflow: ${id}`);
    res.json({ success: true, message: 'Workflow activated', data: response.data });
  } catch (error) {
    console.error(`❌ [POST] Error activating workflow ${req.params.id}:`, error.message);
    const statusCode = error.response?.status || 500;
    res.status(statusCode).json({
      error: 'Failed to activate workflow',
      message: error.message,
    });
  }
});

// Deactivate workflow
app.post('/api/n8n/workflows/:id/deactivate', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`🔴 [POST] Deactivating workflow: ${id}`);
    
    const response = await axios.post(
      `${N8N_BASE_URL}/api/v1/workflows/${id}/deactivate`,
      {},
      {
        headers: {
          'X-N8N-API-KEY': N8N_API_KEY,
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      }
    );

    console.log(`✅ [POST] Successfully deactivated workflow: ${id}`);
    res.json({ success: true, message: 'Workflow deactivated', data: response.data });
  } catch (error) {
    console.error(`❌ [POST] Error deactivating workflow ${req.params.id}:`, error.message);
    const statusCode = error.response?.status || 500;
    res.status(statusCode).json({
      error: 'Failed to deactivate workflow',
      message: error.message,
    });
  }
});

// ============================================
// ERROR HANDLING
// ============================================

app.use((err, req, res, next) => {
  console.error('🔥 [ERROR] Unexpected error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message,
  });
});

// ============================================
// START SERVER
// ============================================

// Listen on all network interfaces (0.0.0.0) to allow access from other devices
app.listen(PORT, '0.0.0.0', () => {
  const networkInterfaces = require('os').networkInterfaces();
  const addresses = [];
  
  Object.values(networkInterfaces).forEach(netInterface => {
    netInterface.forEach(details => {
      if (details.family === 'IPv4' && !details.internal) {
        addresses.push(details.address);
      }
    });
  });

  console.log(`✅ Backend server running on:`);  
  console.log(`   Local:   http://localhost:${PORT}`);
  addresses.forEach(addr => {
    console.log(`   Network: http://${addr}:${PORT}`);
  });
  console.log(`\n📡 n8n Base URL: ${N8N_BASE_URL}`);
  console.log(`🔑 API Key configured: ${N8N_API_KEY.substring(0, 20)}...`);
  console.log(`\n🎯 API Endpoints:`);
  console.log(`   GET  /api/health`);
  console.log(`   GET  /api/n8n/workflows`);
  console.log(`   GET  /api/n8n/workflows/:id`);
  console.log(`   POST /api/n8n/workflows/:id/activate`);
  console.log(`   POST /api/n8n/workflows/:id/deactivate`);
  console.log(`\n✅ Ready to accept requests from frontend\n`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down backend...');
  process.exit(0);
});
