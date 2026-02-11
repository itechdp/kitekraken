# Network Access Setup Guide

## Current Configuration

### Server IP Address
- **10.166.161.160**

### Access URLs

#### From This Computer
- Frontend: `http://localhost:3002`
- Backend API: `http://localhost:5000`
- Workflows: `http://localhost:3002/superadmin/workflows`

#### From Other Devices (Same Network)
- Frontend: `http://10.166.161.160:3002`
- Backend API: `http://10.166.161.160:5000`
- Workflows: `http://10.166.161.160:3002/superadmin/workflows`

## Important Notes

### Firewall Settings
Make sure Windows Firewall allows incoming connections on ports 3002 and 5000:

1. Open Windows Defender Firewall
2. Click "Advanced settings"
3. Create Inbound Rules for:
   - Port 3002 (React Frontend)
   - Port 5000 (Backend API)
4. Allow TCP connections on these ports

### Network Requirements
- All devices must be on the same network
- Your computer must not go to sleep (server will stop)
- Backend server must be running: `cd backend && node server.js`
- Frontend server must be running: `npm start`

### Troubleshooting

**"Failed to fetch" error:**
- ✅ Backend server is running and accessible
- ✅ .env.local has correct IP: `REACT_APP_API_URL=http://10.166.161.160:5000`
- ❌ Check firewall settings
- ❌ Verify network connectivity: ping 10.166.161.160

**Cannot access from other devices:**
1. Test backend health from other device: `http://10.166.161.160:5000/api/health`
2. If fails, check Windows Firewall settings
3. Ensure both servers are running

**IP Address Changed:**
If your IP changes (after reconnecting to network):
1. Run `ipconfig` to find new IP
2. Update `.env.local` with new IP
3. Restart both frontend and backend servers

## Quick Commands

```powershell
# Find your IP address
ipconfig | Select-String "IPv4"

# Start backend server
cd backend
node server.js

# Start frontend (in new terminal)
npm start

# Check if backend is accessible
curl http://10.166.161.160:5000/api/health
```

## Security Notice

This setup is for **development/local network only**. Do not expose these ports to the internet without proper security measures (authentication, HTTPS, etc.).
