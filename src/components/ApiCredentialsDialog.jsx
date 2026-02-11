import React, { useState } from 'react';
import { X, Eye, EyeOff, Key, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';

const ApiCredentialsDialog = ({ isOpen, onClose }) => {
  const { user, updateUser } = useAuth();
  const [showApiKey, setShowApiKey] = useState(false);
  const [showApiSecret, setShowApiSecret] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const [formData, setFormData] = useState({
    api_key: user?.api_key || '',
    api_secret: ''
  });

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
      
      // Close dialog after 1.5 seconds
      setTimeout(() => {
        onClose();
        setMessage({ type: '', text: '' });
      }, 1500);
    } catch (error) {
      console.error('Error updating API credentials:', error);
      setMessage({ type: 'error', text: error.message || 'Failed to update API credentials' });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-32 right-8 z-[100]">
      <div className="bg-[#1a1c1e] rounded-2xl shadow-2xl border border-[#2a2c2e] w-[450px] max-h-[calc(100vh-150px)] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#2a2c2e]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#38FE60]/10 flex items-center justify-center">
              <Key className="w-5 h-5 text-[#38FE60]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Delta Exchange API</h2>
              <p className="text-sm text-gray-400">Connect your trading account</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Info Banner */}
          <div className="bg-[#38FE60]/5 border border-[#38FE60]/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-[#38FE60] mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-[#38FE60] font-semibold text-sm mb-1">Secure Connection</h3>
                <p className="text-xs text-gray-300">
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

          {/* API Key */}
          <div>
            <label htmlFor="api_key" className="block text-sm font-medium text-gray-300 mb-2">
              Delta API Key
            </label>
            <div className="relative">
              <input
                id="api_key"
                name="api_key"
                type={showApiKey ? 'text' : 'password'}
                value={formData.api_key}
                onChange={handleChange}
                placeholder="Enter your Delta Exchange API Key"
                required
                className="w-full px-4 py-2.5 bg-[#111113] border border-[#2a2c2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38FE60] focus:border-transparent transition-all placeholder:text-gray-500 pr-10"
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

          {/* API Secret */}
          <div>
            <label htmlFor="api_secret" className="block text-sm font-medium text-gray-300 mb-2">
              Delta API Secret
            </label>
            <div className="relative">
              <input
                id="api_secret"
                name="api_secret"
                type={showApiSecret ? 'text' : 'password'}
                value={formData.api_secret}
                onChange={handleChange}
                placeholder="Enter your Delta Exchange API Secret"
                required
                className="w-full px-4 py-2.5 bg-[#111113] border border-[#2a2c2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38FE60] focus:border-transparent transition-all placeholder:text-gray-500 pr-10"
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

          {/* Help Text */}
          <div className="bg-[#111113] border border-[#2a2c2e] rounded-lg p-3">
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

          {/* Buttons */}
          <div className="flex space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 bg-[#111113] hover:bg-[#2a2c2e] border border-[#2a2c2e] text-white rounded-lg transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2.5 bg-[#38FE60] hover:bg-[#30E050] text-[#111113] font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : 'Save Credentials'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApiCredentialsDialog;
