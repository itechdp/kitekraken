import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Key, 
  Shield, 
  TrendingUp, 
  Activity, 
  DollarSign, 
  Eye, 
  EyeOff,
  Edit2,
  Save,
  X,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Clock,
  Wallet,
  Settings,
  Bell,
  Lock,
  Trash2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabaseClient';

const Profile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, updateUser, logout } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'overview');
  
  const [editMode, setEditMode] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [showApiSecret, setShowApiSecret] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    api_key: user?.api_key || '',
    api_secret: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Trading stats (mock data - replace with real data from your backend)
  const [tradingStats, setTradingStats] = useState({
    totalTrades: 0,
    winRate: 0,
    totalProfit: 0,
    activeBots: 0,
    monthlyReturn: 0,
    avgTradeSize: 0,
    bestTrade: 0,
    worstTrade: 0
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage({ type: '', text: '' });
  };

  const handleUpdateProfile = async () => {
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const updates = {
        name: formData.name,
        email: formData.email
      };

      if (formData.api_key) updates.api_key = formData.api_key;
      if (formData.api_secret) updates.api_secret = formData.api_secret;

      const { data, error } = await supabase
        .from('delta_users')
        .update(updates)
        .eq('id', user.id)
        .select()
        .single();

      if (error) throw error;

      updateUser(data);
      setEditMode(false);
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage({ type: 'error', text: error.message || 'Failed to update profile' });
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      api_key: user?.api_key || '',
      api_secret: '',
      newPassword: '',
      confirmPassword: ''
    });
    setMessage({ type: '', text: '' });
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'trading', label: 'Trading Activity', icon: Activity },
    { id: 'api', label: 'API Settings', icon: Key },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#111113] pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#38FE60] to-[#30E050] flex items-center justify-center text-[#111113] text-3xl font-bold">
                {user.name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U'}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{user.name}</h1>
                <p className="text-gray-400">{user.email}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${user.is_api_active ? 'bg-[#38FE60]' : 'bg-red-500'}`}></div>
                  <span className={`text-sm ${user.is_api_active ? 'text-[#38FE60]' : 'text-red-400'}`}>
                    {user.is_api_active ? 'API Connected' : 'API Disconnected'}
                  </span>
                </div>
              </div>
            </div>
            
            <button
              onClick={logout}
              className="px-6 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500 text-red-400 rounded-lg transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-[#2a2c2e] mb-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center space-x-2 pb-4 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-[#38FE60] text-[#38FE60]'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Message Display */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
            message.type === 'success' 
              ? 'bg-[#38FE60]/10 border border-[#38FE60] text-[#38FE60]' 
              : 'bg-red-500/10 border border-red-500 text-red-400'
          }`}>
            {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            <span>{message.text}</span>
          </div>
        )}

        {/* Tab Content */}
        <div className="space-y-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <BarChart3 className="w-8 h-8 text-[#38FE60]" />
                    <TrendingUp className="w-5 h-5 text-[#38FE60]" />
                  </div>
                  <h3 className="text-gray-400 text-sm mb-1">Total Trades</h3>
                  <p className="text-3xl font-bold text-white">{tradingStats.totalTrades}</p>
                </div>

                <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Activity className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-gray-400 text-sm mb-1">Win Rate</h3>
                  <p className="text-3xl font-bold text-white">{tradingStats.winRate}%</p>
                </div>

                <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <DollarSign className="w-8 h-8 text-yellow-400" />
                    <TrendingUp className="w-5 h-5 text-[#38FE60]" />
                  </div>
                  <h3 className="text-gray-400 text-sm mb-1">Total Profit</h3>
                  <p className="text-3xl font-bold text-[#38FE60]">
                    ${tradingStats.totalProfit.toLocaleString()}
                  </p>
                </div>

                <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Activity className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-gray-400 text-sm mb-1">Active Bots</h3>
                  <p className="text-3xl font-bold text-white">{tradingStats.activeBots}</p>
                </div>
              </div>

              {/* Account Information */}
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">Account Information</h2>
                  {!editMode ? (
                    <button
                      onClick={() => setEditMode(true)}
                      className="flex items-center space-x-2 px-4 py-2 bg-[#38FE60]/10 hover:bg-[#38FE60]/20 border border-[#38FE60] text-[#38FE60] rounded-lg transition-all"
                    >
                      <Edit2 className="w-4 h-4" />
                      <span>Edit Profile</span>
                    </button>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleUpdateProfile}
                        disabled={loading}
                        className="flex items-center space-x-2 px-4 py-2 bg-[#38FE60] hover:bg-[#30E050] text-[#111113] rounded-lg transition-all disabled:opacity-50"
                      >
                        <Save className="w-4 h-4" />
                        <span>{loading ? 'Saving...' : 'Save'}</span>
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="flex items-center space-x-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500 text-red-400 rounded-lg transition-all"
                      >
                        <X className="w-4 h-4" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    {editMode ? (
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-[#111113] border border-[#2a2c2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38FE60]"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 px-4 py-2.5 bg-[#111113] border border-[#2a2c2e] rounded-lg">
                        <User className="w-5 h-5 text-gray-400" />
                        <span className="text-white">{user.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                    {editMode ? (
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-[#111113] border border-[#2a2c2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38FE60]"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 px-4 py-2.5 bg-[#111113] border border-[#2a2c2e] rounded-lg">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <span className="text-white">{user.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Exchange</label>
                    <div className="flex items-center space-x-2 px-4 py-2.5 bg-[#111113] border border-[#2a2c2e] rounded-lg">
                      <Wallet className="w-5 h-5 text-gray-400" />
                      <span className="text-white">{user.exchange_name || 'Delta Exchange'}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Member Since</label>
                    <div className="flex items-center space-x-2 px-4 py-2.5 bg-[#111113] border border-[#2a2c2e] rounded-lg">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <span className="text-white">
                        {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Trading Activity Tab */}
          {activeTab === 'trading' && (
            <div className="space-y-6">
              {/* Performance Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl p-6">
                  <h3 className="text-gray-400 text-sm mb-2">Monthly Return</h3>
                  <p className="text-2xl font-bold text-[#38FE60]">+{tradingStats.monthlyReturn}%</p>
                </div>

                <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl p-6">
                  <h3 className="text-gray-400 text-sm mb-2">Avg Trade Size</h3>
                  <p className="text-2xl font-bold text-white">${tradingStats.avgTradeSize.toLocaleString()}</p>
                </div>

                <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl p-6">
                  <h3 className="text-gray-400 text-sm mb-2">Best Trade</h3>
                  <p className="text-2xl font-bold text-[#38FE60]">+${tradingStats.bestTrade.toLocaleString()}</p>
                </div>
              </div>

              {/* Recent Trades */}
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">Recent Trades</h2>
                <div className="text-center py-12">
                  <Activity className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">No trading activity yet</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Connect your API and start trading to see your activity here
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* API Settings Tab */}
          {activeTab === 'api' && (
            <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Key className="w-6 h-6 text-[#38FE60]" />
                  <h2 className="text-xl font-bold text-white">Delta Exchange API Credentials</h2>
                </div>
                <button
                  onClick={() => navigate('/api-settings')}
                  className="px-4 py-2 bg-[#38FE60] hover:bg-[#30E050] text-[#111113] font-semibold rounded-lg transition-all text-sm"
                >
                  Manage API
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-[#38FE60]/5 border border-[#38FE60]/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-[#38FE60] mt-0.5" />
                    <div className="flex-1">
                      <h3 className="text-[#38FE60] font-semibold mb-1">Secure API Storage</h3>
                      <p className="text-sm text-gray-300">
                        Your API credentials are encrypted and stored securely. We never share your data with third parties.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Message Display */}
                {message.text && (
                  <div className={`p-4 rounded-lg flex items-center space-x-2 ${
                    message.type === 'success' 
                      ? 'bg-[#38FE60]/10 border border-[#38FE60] text-[#38FE60]' 
                      : 'bg-red-500/10 border border-red-500 text-red-400'
                  }`}>
                    {message.type === 'success' ? <CheckCircle className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                    <span className="text-sm">{message.text}</span>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">API Key</label>
                  <div className="relative">
                    <input
                      type={showApiKey ? 'text' : 'password'}
                      name="api_key"
                      value={formData.api_key}
                      onChange={handleInputChange}
                      placeholder="Enter your Delta Exchange API Key"
                      className="w-full px-4 py-2.5 bg-[#111113] border border-[#2a2c2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38FE60] pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showApiKey ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">API Secret</label>
                  <div className="relative">
                    <input
                      type={showApiSecret ? 'text' : 'password'}
                      name="api_secret"
                      value={formData.api_secret}
                      onChange={handleInputChange}
                      placeholder="Enter your Delta Exchange API Secret"
                      className="w-full px-4 py-2.5 bg-[#111113] border border-[#2a2c2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38FE60] pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowApiSecret(!showApiSecret)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showApiSecret ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#111113] border border-[#2a2c2e] rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${user.is_api_active ? 'bg-[#38FE60]' : 'bg-red-500'}`}></div>
                    <div>
                      <p className="text-white font-medium">API Status</p>
                      <p className="text-sm text-gray-400">
                        {user.is_api_active ? 'Connected and Active' : 'Not Connected'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleUpdateProfile}
                    disabled={loading}
                    className="px-6 py-2.5 bg-[#38FE60] hover:bg-[#30E050] text-[#111113] font-semibold rounded-lg transition-all disabled:opacity-50"
                  >
                    {loading ? 'Updating...' : 'Update API'}
                  </button>
                </div>

                {/* Help Text */}
                <div className="bg-[#111113] border border-[#2a2c2e] rounded-lg p-4">
                  <p className="text-xs text-gray-400">
                    <span className="text-white font-semibold">How to get API credentials:</span>
                    <br />
                    1. Log into your Delta Exchange account
                    <br />
                    2. Go to Settings → API Management
                    <br />
                    3. Create a new API key with trading permissions
                    <br />
                    4. Copy and paste the credentials here
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              {/* Security Settings */}
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Lock className="w-6 h-6 text-[#38FE60]" />
                  <h2 className="text-xl font-bold text-white">Security Settings</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#111113] border border-[#2a2c2e] rounded-lg">
                    <div>
                      <p className="text-white font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
                    </div>
                    <button className="px-4 py-2 bg-[#38FE60]/10 hover:bg-[#38FE60]/20 border border-[#38FE60] text-[#38FE60] rounded-lg transition-all">
                      Enable
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#111113] border border-[#2a2c2e] rounded-lg">
                    <div>
                      <p className="text-white font-medium">Change Password</p>
                      <p className="text-sm text-gray-400">Update your account password</p>
                    </div>
                    <button className="px-4 py-2 bg-[#38FE60]/10 hover:bg-[#38FE60]/20 border border-[#38FE60] text-[#38FE60] rounded-lg transition-all">
                      Change
                    </button>
                  </div>
                </div>
              </div>

              {/* Notification Settings */}
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Bell className="w-6 h-6 text-[#38FE60]" />
                  <h2 className="text-xl font-bold text-white">Notification Preferences</h2>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'Trade Notifications', desc: 'Get notified when a trade is executed' },
                    { label: 'Price Alerts', desc: 'Receive alerts for price movements' },
                    { label: 'Bot Status Updates', desc: 'Get updates on bot performance' },
                    { label: 'Email Notifications', desc: 'Receive important updates via email' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-[#111113] border border-[#2a2c2e] rounded-lg">
                      <div>
                        <p className="text-white font-medium">{item.label}</p>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={idx % 2 === 0} />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38FE60]"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Danger Zone */}
              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Trash2 className="w-6 h-6 text-red-400" />
                  <h2 className="text-xl font-bold text-red-400">Danger Zone</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#111113] border border-red-500/20 rounded-lg">
                    <div>
                      <p className="text-white font-medium">Delete Account</p>
                      <p className="text-sm text-gray-400">Permanently delete your account and all data</p>
                    </div>
                    <button className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500 text-red-400 rounded-lg transition-all">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
