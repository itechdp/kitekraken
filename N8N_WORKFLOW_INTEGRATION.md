# N8N Workflow Manager Integration

This document explains how to set up and run the n8n Workflow Manager integrated into the Bullex frontend at the `/superadmin/workflows` route.

## Overview

The n8n Workflow Manager has been integrated into your Bullex frontend application. It displays at the route `/superadmin/workflows` and allows you to:

- View all n8n workflows
- Activate/Deactivate individual workflows
- Bulk activate/deactivate all workflows
- Search workflows by name or ID
- Monitor workflow statistics

## Architecture

The integration consists of:

1. **Frontend Component** (`src/n8n-workflow/App.jsx`) - The workflow manager UI
2. **Backend Proxy** (`backend/server.js`) - Node.js server that proxies requests to n8n API
3. **Route Integration** (`src/pages/WorkflowManagement.jsx`) - Wrapper component
4. **Proxy Configuration** (`src/setupProxy.js`) - Dev proxy for local development

## Setup Instructions

### 1. Install Backend Dependencies

Navigate to the backend directory and install dependencies:

```powershell
cd backend
npm install
```

### 2. Configure Environment Variables

The backend already has a `.env` file configured. If needed, you can update it:

**backend/.env:**
```env
PORT=5000
N8N_BASE_URL=https://n8n.srv1103655.hstgr.cloud
N8N_API_KEY=your_api_key_here
```

**Frontend .env.local:**
```env
REACT_APP_API_URL=http://localhost:5000
```

### 3. Start the Backend Server

From the `backend` directory:

```powershell
node server.js
```

The backend will start on `http://localhost:5000`

### 4. Start the Frontend Development Server

From the root directory:

```powershell
npm start
```

The frontend will start on `http://localhost:3000`

## Usage

1. Navigate to the admin login page: `http://localhost:3000/admin/login`
2. Login with your admin credentials
3. Navigate to: `http://localhost:3000/superadmin/workflows`
4. You should see the n8n Workflow Manager interface

## Features

### Dashboard View
- **Total Workflows**: Shows count of all workflows
- **Active Workflows**: Shows count of currently active workflows
- **Inactive Workflows**: Shows count of inactive workflows

### Workflow Management
- **Refresh**: Manually refresh the workflow list
- **Search**: Search workflows by name or ID
- **Activate All**: Bulk activate all inactive workflows
- **Deactivate All**: Bulk deactivate all active workflows
- **Individual Controls**: Activate/Deactivate each workflow individually

### Auto-Refresh
The workflow list automatically refreshes every 30 seconds to keep data up-to-date.

## API Endpoints

The backend server provides these endpoints:

- `GET /api/health` - Health check
- `GET /api/n8n/workflows` - Get all workflows
- `POST /api/n8n/workflows/:id/activate` - Activate a workflow
- `POST /api/n8n/workflows/:id/deactivate` - Deactivate a workflow

## Proxy Configuration

For development, the frontend uses a proxy (configured in `src/setupProxy.js`) to avoid CORS issues:

- Frontend requests to `/api/n8n/*` are proxied to the n8n API
- The proxy automatically adds authentication headers

## Production Deployment

For production:

1. Build the frontend:
   ```powershell
   npm run build
   ```

2. Deploy the backend server to your hosting service

3. Update environment variables:
   - Set `REACT_APP_API_URL` to your production backend URL
   - Ensure the backend `.env` has correct n8n credentials

4. Serve the built frontend from the `build` directory

## Troubleshooting

### Backend not connecting to n8n
- Verify the `N8N_BASE_URL` in backend/.env
- Check the `N8N_API_KEY` is valid
- Ensure n8n instance is accessible

### Frontend not loading workflows
- Check backend is running on port 5000
- Verify `REACT_APP_API_URL` in `.env.local`
- Check browser console for errors
- Verify you're logged in as an admin

### CORS Errors
- Ensure `src/setupProxy.js` is properly configured
- Backend server should have CORS enabled
- For production, add your frontend domain to backend CORS whitelist

## File Structure

```
Bullex-frontend only/
├── backend/
│   ├── .env                    # Backend environment variables
│   ├── package.json           # Backend dependencies
│   └── server.js              # Express server
├── src/
│   ├── n8n-workflow/
│   │   ├── App.jsx            # Main workflow manager component
│   │   └── App.css            # Styles for workflow manager
│   ├── pages/
│   │   └── WorkflowManagement.jsx  # Route wrapper component
│   └── setupProxy.js          # Development proxy configuration
├── .env                       # Frontend environment variables (base)
└── .env.local                # Frontend environment variables (local dev)
```

## Support

For issues or questions:
1. Check the browser console for errors
2. Check the backend server logs
3. Verify all environment variables are set correctly
4. Ensure you have the correct admin permissions
