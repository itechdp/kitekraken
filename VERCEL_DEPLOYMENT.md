# 🚀 Vercel Deployment Guide - HTTPS Secured

## ✅ What Has Been Set Up

Your Bullex AI application is now configured to run 100% on HTTPS using Vercel Serverless Functions. No separate backend server needed!

### Files Created/Modified:

1. **`/api/health.js`** - Health check endpoint
2. **`/api/workflows.js`** - N8N workflow management endpoint
3. **`vercel.json`** - Vercel configuration with HTTPS enforcement
4. **`.env`** - Updated to use relative API paths
5. **`src/n8n-workflow/App.jsx`** - Updated API calls

---

## 📋 Deployment Steps

### Step 1: Set Environment Variables in Vercel

Go to your Vercel dashboard and add these environment variables:

**URL:** https://vercel.com/malak-bhadgaonkars-projects/kitekraken/settings/environment-variables

Add the following variables for **Production, Preview, and Development**:

| Key | Value |
|-----|-------|
| `N8N_BASE_URL` | `https://n8n.srv1103655.hstgr.cloud` |
| `N8N_API_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZDhkOTAyZS00NzZjLTRlNzktYTU1Ni0wYWZkMTBlZGY4ZmIiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzY1MTI2Njc1fQ.UQuIAn5tQc_Ic4gD5Iq329jlk6tP6NWnJgDOZ8hyn84` |
| `REACT_APP_API_URL` | *(leave empty - will use relative paths)* |

### Step 2: Deploy to Vercel

```bash
# Commit your changes
git add .
git commit -m "Configure HTTPS with Vercel Serverless Functions"
git push origin main
```

Vercel will automatically deploy your changes.

### Step 3: Verify HTTPS is Working

After deployment, your site will be available at:
- ✅ https://www.kitekraken.ai (Production - HTTPS Secured)
- ✅ https://kitekraken.ai (HTTPS Secured)
- ✅ https://kitekraken.vercel.app (HTTPS Secured)

All domains will automatically have:
- 🔒 SSL/TLS Encryption
- ✅ Valid SSL Certificate
- 🛡️ Security Headers
- ↗️ Automatic HTTP → HTTPS Redirect

---

## 🧪 Testing Your API Endpoints

After deployment, test your serverless functions:

### Health Check
```bash
curl https://www.kitekraken.ai/api/health
```

### Get Workflows
```bash
curl https://www.kitekraken.ai/api/workflows
```

### Activate Workflow
```bash
curl -X POST "https://www.kitekraken.ai/api/workflows?id=WORKFLOW_ID&action=activate"
```

### Deactivate Workflow
```bash
curl -X POST "https://www.kitekraken.ai/api/workflows?id=WORKFLOW_ID&action=deactivate"
```

---

## 🔧 Local Development

For local development, you can still use the backend server:

```bash
# Terminal 1 - Start backend server
cd backend
npm install
npm start

# Terminal 2 - Start frontend (in root directory)
npm start
```

When running locally, set in your local `.env`:
```env
REACT_APP_API_URL=http://localhost:5000
```

---

## 🎯 How It Works

### Production (Vercel)
- Frontend: React app served via Vercel CDN
- API: Serverless Functions in `/api` folder
- All traffic: HTTPS only
- No separate backend server needed

### Architecture Flow:
```
Browser → HTTPS → www.kitekraken.ai
                     ↓
                  React App (Static)
                     ↓
              /api/workflows (Serverless Function)
                     ↓
              N8N Server (n8n.srv1103655.hstgr.cloud)
```

### Local Development
- Frontend: React development server (port 3000)
- API: Express backend server (port 5000)
- Can test without deploying

---

## ✅ Security Features Enabled

Your site now has:

1. **HTTPS Enforcement** - Automatic redirect from HTTP to HTTPS
2. **HSTS** - HTTP Strict Transport Security (63072000 seconds)
3. **Content Security** - X-Content-Type-Options: nosniff
4. **Frame Protection** - X-Frame-Options: DENY
5. **XSS Protection** - X-XSS-Protection: 1; mode=block
6. **Referrer Policy** - strict-origin-when-cross-origin

---

## 🐛 Troubleshooting

### Issue: "Not Secure" warning
**Solution:** Make sure environment variables are set in Vercel and redeploy

### Issue: API not working
**Solution:** Check Vercel Function Logs at:
https://vercel.com/malak-bhadgaonkars-projects/kitekraken/logs

### Issue: CORS errors
**Solution:** Serverless functions already have CORS headers configured

### Issue: 404 on /api endpoints
**Solution:** Ensure `vercel.json` is in the root directory and redeploy

---

## 📊 Monitoring

Monitor your deployment:
- **Dashboard:** https://vercel.com/malak-bhadgaonkars-projects/kitekraken
- **Analytics:** https://vercel.com/malak-bhadgaonkars-projects/kitekraken/analytics
- **Logs:** https://vercel.com/malak-bhadgaonkars-projects/kitekraken/logs

---

## 🎉 Success Checklist

- ✅ Created `/api` serverless functions
- ✅ Configured `vercel.json` for HTTPS
- ✅ Updated `.env` for production
- ✅ Modified frontend to use relative API paths
- ✅ Added security headers
- ✅ Configured HTTP → HTTPS redirects

**Next:** Deploy and your site will be 100% HTTPS secured! 🔒
