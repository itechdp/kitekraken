const axios = require('axios');

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || 'https://n8n.srv1103655.hstgr.cloud/webhook/d2d76a5e-3873-4478-959f-ef5bc7c513f7';

module.exports = async (req, res) => {
  // Set CORS headers to allow frontend to access this endpoint
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    try {
      console.log('📥 Fetching webhook data from n8n...');
      
      const response = await axios.get(N8N_WEBHOOK_URL, {
        headers: {
          'Accept': 'application/json',
        },
        timeout: 15000,
      });

      console.log('✅ Successfully fetched webhook data');
      return res.json(response.data);
    } catch (error) {
      console.error('❌ Error fetching webhook:', error.message);
      
      // Return appropriate error response
      const status = error.response?.status || 500;
      const message = error.response?.statusText || error.message;
      
      return res.status(status).json({
        error: 'Failed to fetch webhook data',
        message: message,
        details: error.message
      });
    }
  }

  // Reject other methods
  return res.status(405).json({
    error: 'Method not allowed',
    message: 'Only GET requests are supported'
  });
};
