const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/webhook',
    createProxyMiddleware({
      target: 'https://n8n.srv1103655.hstgr.cloud',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api/webhook': '/webhook-test/d2d76a5e-3873-4478-959f-ef5bc7c513f7',
      },
      onProxyReq: function(proxyReq, req, res) {
        proxyReq.setHeader('Accept', 'application/json');
      },
      onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
        proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
      },
      logLevel: 'debug',
    })
  );

  // Proxy for n8n API workflows
  app.use(
    '/api/n8n',
    createProxyMiddleware({
      target: 'https://n8n.srv1103655.hstgr.cloud',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api/n8n/workflows/([^/]+)/activate': '/api/v1/workflows/$1/activate',
        '^/api/n8n/workflows/([^/]+)/deactivate': '/api/v1/workflows/$1/deactivate',
        '^/api/n8n': '/api/v1',
      },
      onProxyReq: function(proxyReq, req, res) {
        proxyReq.setHeader('X-N8N-API-KEY', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZDhkOTAyZS00NzZjLTRlNzktYTU1Ni0wYWZkMTBlZGY4ZmIiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzY1MDkxNTAwfQ.yUzQF_p0zSluTUjRGCAQY4G5JNEbeC6I-5_3TekWX8o');
        proxyReq.setHeader('Content-Type', 'application/json');
        proxyReq.setHeader('Accept', 'application/json');
        console.log('Proxying n8n API request:', req.method, req.url, '-> Target:', proxyReq.path);
      },
      onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS';
        proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, X-N8N-API-KEY';
        console.log('n8n API response status:', proxyRes.statusCode);
      },
      logLevel: 'debug',
    })
  );
};
