const axios = require('axios');

const N8N_BASE_URL = process.env.N8N_BASE_URL || 'https://n8n.srv1103655.hstgr.cloud';
const N8N_API_KEY = process.env.N8N_API_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZDhkOTAyZS00NzZjLTRlNzktYTU1Ni0wYWZkMTBlZGY4ZmIiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzY1MTI2Njc1fQ.UQuIAn5tQc_Ic4gD5Iq329jlk6tP6NWnJgDOZ8hyn84';

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { id } = req.query;

  try {
    if (req.method === 'GET') {
      // Get workflows or single workflow
      const url = id 
        ? `${N8N_BASE_URL}/api/v1/workflows/${id}`
        : `${N8N_BASE_URL}/api/v1/workflows`;
      
      console.log(`📥 [GET] Fetching workflow${id ? `: ${id}` : 's'}...`);
      
      const response = await axios.get(url, {
        headers: {
          'X-N8N-API-KEY': N8N_API_KEY,
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      });

      console.log(`✅ [GET] Successfully fetched workflow${id ? `: ${id}` : 's'}`);
      return res.json(response.data);
    }

    if (req.method === 'POST' && id) {
      // Handle activate/deactivate
      const action = req.query.action; // 'activate' or 'deactivate'
      
      if (!action || !['activate', 'deactivate'].includes(action)) {
        return res.status(400).json({
          error: 'Invalid action',
          message: 'Action must be either "activate" or "deactivate"'
        });
      }

      console.log(`${action === 'activate' ? '🟢' : '🔴'} [POST] ${action}ing workflow: ${id}`);
      
      const response = await axios.post(
        `${N8N_BASE_URL}/api/v1/workflows/${id}/${action}`,
        {},
        {
          headers: {
            'X-N8N-API-KEY': N8N_API_KEY,
            'Content-Type': 'application/json',
          },
          timeout: 10000,
        }
      );

      console.log(`✅ [POST] Successfully ${action}d workflow: ${id}`);
      return res.json({ 
        success: true, 
        message: `Workflow ${action}d`, 
        data: response.data 
      });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error(`❌ Error in workflows API:`, error.message);
    const statusCode = error.response?.status || 500;
    res.status(statusCode).json({
      error: 'API request failed',
      message: error.message,
    });
  }
};
