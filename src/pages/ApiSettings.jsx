import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Key, Shield, Eye, EyeOff, CheckCircle, AlertCircle, Save, ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';

const ApiSettings = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, updateUser } = useAuth();
  const [showApiKey, setShowApiKey] = useState(false);
  const [showApiSecret, setShowApiSecret] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const [formData, setFormData] = useState({
    api_key: '',
    api_secret: ''
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth');
    } else if (user?.api_key) {
      setFormData({
        api_key: user.api_key,
        api_secret: ''
      });
    }
  }, [isAuthenticated, navigate, user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage({ type: '', text: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      if (!formData.api_key || !formData.api_secret) {
        setMessage({ type: 'error', text: 'Please enter both API Key and API Secret' });
        setLoading(false);
        return;
      }

      const updates = {
        api_key: formData.api_key,
        api_secret: formData.api_secret,
        is_api_active: true
      };

      const { data, error } = await supabase
        .from('delta_users')
        .update(updates)
        .eq('id', user.id)
        .select()
        .single();

      if (error) throw error;

      updateUser(data);
      setMessage({ type: 'success', text: 'API credentials updated successfully!' });
      
      // Clear the secret field after successful update
      setFormData({ ...formData, api_secret: '' });
    } catch (error) {
      console.error('Error updating API credentials:', error);
      setMessage({ type: 'error', text: error.message || 'Failed to update API credentials' });
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#111113] pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-400 hover:text-[#38FE60] transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#38FE60] to-[#30E050] flex items-center justify-center">
              <Key className="w-8 h-8 text-[#111113]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">API Credentials</h1>
              <p className="text-gray-400 mt-1">Manage your Delta Exchange API credentials</p>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex items-center space-x-2">
            <div className={`w-2.5 h-2.5 rounded-full ${user.is_api_active ? 'bg-[#38FE60]' : 'bg-red-500'}`}></div>
            <span className={`text-sm font-medium ${user.is_api_active ? 'text-[#38FE60]' : 'text-red-400'}`}>
              {user.is_api_active ? 'API Connected & Active' : 'API Not Connected'}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-[#1a1c1e] rounded-2xl border border-[#2a2c2e] overflow-hidden">
          {/* Info Banner */}
          <div className="bg-gradient-to-r from-[#38FE60]/10 to-[#38FE60]/5 border-b border-[#2a2c2e] p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#38FE60]/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#38FE60]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[#38FE60] font-semibold text-lg mb-2">Secure Connection</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Your API credentials are encrypted and stored securely using industry-standard encryption protocols. 
                  We never share your data with third parties and your credentials are only used to execute trades on your behalf.
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Message Display */}
            {message.text && (
              <div className={`p-4 rounded-xl flex items-center space-x-3 ${
                message.type === 'success' 
                  ? 'bg-[#38FE60]/10 border border-[#38FE60] text-[#38FE60]' 
                  : 'bg-red-500/10 border border-red-500 text-red-400'
              }`}>
                {message.type === 'success' ? <CheckCircle className="w-6 h-6 flex-shrink-0" /> : <AlertCircle className="w-6 h-6 flex-shrink-0" />}
                <span className="font-medium">{message.text}</span>
              </div>
            )}

            {/* API Key Field */}
            <div className="space-y-3">
              <label htmlFor="api_key" className="block text-base font-semibold text-white">
                Delta Exchange API Key
              </label>
              <p className="text-sm text-gray-400">
                Enter your API key from Delta Exchange to enable automated trading
              </p>
              <div className="relative">
                <input
                  id="api_key"
                  name="api_key"
                  type={showApiKey ? 'text' : 'password'}
                  value={formData.api_key}
                  onChange={handleChange}
                  placeholder="Enter your Delta Exchange API Key"
                  required
                  className="w-full px-4 py-3.5 bg-[#111113] border border-[#2a2c2e] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#38FE60] focus:border-transparent transition-all placeholder:text-gray-500 pr-12 text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showApiKey ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* API Secret Field */}
            <div className="space-y-3">
              <label htmlFor="api_secret" className="block text-base font-semibold text-white">
                Delta Exchange API Secret
              </label>
              <p className="text-sm text-gray-400">
                Enter your API secret to complete the connection
              </p>
              <div className="relative">
                <input
                  id="api_secret"
                  name="api_secret"
                  type={showApiSecret ? 'text' : 'password'}
                  value={formData.api_secret}
                  onChange={handleChange}
                  placeholder="Enter your Delta Exchange API Secret"
                  required
                  className="w-full px-4 py-3.5 bg-[#111113] border border-[#2a2c2e] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#38FE60] focus:border-transparent transition-all placeholder:text-gray-500 pr-12 text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowApiSecret(!showApiSecret)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showApiSecret ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#38FE60] hover:bg-[#30E050] text-[#111113] font-bold rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 text-base"
              >
                <Save className="w-5 h-5" />
                <span>{loading ? 'Saving Credentials...' : 'Save API Credentials'}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-[#1a1c1e] rounded-2xl border border-[#2a2c2e] p-8">
          <h3 className="text-xl font-bold text-white mb-4">How to Get Your API Credentials</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#38FE60] flex items-center justify-center text-[#111113] font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="text-gray-300 font-medium">Log into your Delta Exchange account</p>
                <p className="text-sm text-gray-500 mt-1">Visit delta.exchange and sign in to your account</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#38FE60] flex items-center justify-center text-[#111113] font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="text-gray-300 font-medium">Navigate to API Management</p>
                <p className="text-sm text-gray-500 mt-1">Go to Settings → API Management section</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#38FE60] flex items-center justify-center text-[#111113] font-bold flex-shrink-0">
                3
              </div>
              <div>
                <p className="text-gray-300 font-medium">Create a new API key</p>
                <p className="text-sm text-gray-500 mt-1">Generate a new API key with trading permissions enabled</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#38FE60] flex items-center justify-center text-[#111113] font-bold flex-shrink-0">
                4
              </div>
              <div>
                <p className="text-gray-300 font-medium">Copy and paste credentials here</p>
                <p className="text-sm text-gray-500 mt-1">Copy both the API Key and Secret, then paste them in the fields above</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
            <p className="text-sm text-yellow-200">
              <span className="font-bold">⚠️ Important:</span> Make sure to enable trading permissions when creating your API key. 
              Without proper permissions, automated trading will not work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiSettings;
