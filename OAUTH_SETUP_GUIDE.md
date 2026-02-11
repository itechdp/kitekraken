# OAuth Setup Guide for Bullex.AI

## Overview
This guide explains how to enable Google, Apple, and Telegram OAuth authentication with Supabase backend.

---

## 1. Google OAuth Setup

### A. Google Cloud Console Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth 2.0 Client ID**
5. Configure consent screen if not done:
   - Add app name: "Bullex.AI"
   - Add authorized domains: `localhost`, `your-domain.com`
   - Add scopes: `email`, `profile`
6. Create OAuth Client ID:
   - Application type: **Web application**
   - Name: "Bullex.AI Web"
   - Authorized JavaScript origins:
     - `http://localhost:3000` (for development)
     - `https://your-domain.com` (for production)
   - Authorized redirect URIs:
     - `http://localhost:3000/auth/callback`
     - `https://your-domain.com/auth/callback`
     - `https://your-supabase-project.supabase.co/auth/v1/callback`
7. Copy **Client ID** and **Client Secret**

### B. Supabase Configuration
1. Go to your [Supabase Dashboard](https://app.supabase.com/)
2. Navigate to **Authentication** → **Providers**
3. Find **Google** and enable it
4. Paste your **Client ID** and **Client Secret**
5. Save changes

---

## 2. Apple OAuth Setup

### A. Apple Developer Account Setup
1. Go to [Apple Developer Portal](https://developer.apple.com/)
2. Navigate to **Certificates, Identifiers & Profiles**
3. Create a new **App ID**:
   - Description: "Bullex.AI"
   - Bundle ID: `com.bullex.ai` (or your domain in reverse)
   - Enable **Sign in with Apple**
4. Create a **Services ID**:
   - Description: "Bullex.AI Web"
   - Identifier: `com.bullex.ai.web`
   - Enable **Sign in with Apple**
   - Configure:
     - Primary App ID: Select the App ID created above
     - Return URLs: `https://your-supabase-project.supabase.co/auth/v1/callback`
5. Create a **Private Key**:
   - Navigate to **Keys**
   - Click **+** to create new key
   - Name: "Bullex.AI Sign in with Apple Key"
   - Enable **Sign in with Apple**
   - Configure: Select your App ID
   - Download the key file (`.p8`)
   - Note the **Key ID**
6. Note your **Team ID** (found in top right of Apple Developer Portal)

### B. Supabase Configuration
1. Go to your Supabase Dashboard
2. Navigate to **Authentication** → **Providers**
3. Find **Apple** and enable it
4. Fill in:
   - **Services ID**: Your Services ID (e.g., `com.bullex.ai.web`)
   - **Team ID**: Your Apple Team ID
   - **Key ID**: The Key ID from the private key you created
   - **Private Key**: Paste the contents of the `.p8` file
5. Save changes

---

## 3. Telegram OAuth Setup

### Option A: Using Telegram Widget (Recommended)
1. Contact [@BotFather](https://t.me/BotFather) on Telegram
2. Create a new bot: `/newbot`
3. Get your bot token
4. Enable OAuth for your bot:
   - Send `/setdomain` to BotFather
   - Enter your domain: `your-domain.com`
5. Add Telegram Login Widget to your website:
   ```html
   <script async src="https://telegram.org/js/telegram-widget.js?22" 
           data-telegram-login="YOUR_BOT_USERNAME" 
           data-size="large" 
           data-onauth="onTelegramAuth(user)" 
           data-request-access="write">
   </script>
   ```

### Option B: Custom Implementation
Telegram doesn't have native OAuth support in Supabase. You'll need to:
1. Use Telegram Login Widget on frontend
2. Create a custom backend endpoint to verify Telegram authentication
3. Generate a JWT token for your app
4. Store user in `delta_users` table

**Note**: This requires more complex implementation and is currently marked as "coming soon" in the code.

---

## 4. Database Schema Update

Add a column to track OAuth provider in your `delta_users` table:

```sql
ALTER TABLE delta_users 
ADD COLUMN auth_provider VARCHAR(50) DEFAULT 'email';
```

---

## 5. Environment Variables (Optional)

For better security, you can store OAuth credentials in environment variables:

Create a `.env` file:
```
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_APPLE_CLIENT_ID=your_apple_services_id
```

---

## 6. Testing OAuth Flow

### Development Testing:
1. Start your development server: `npm start`
2. Navigate to `/auth`
3. Click on Google/Apple sign-in buttons
4. You'll be redirected to the OAuth provider
5. After authentication, you'll be redirected to `/auth/callback`
6. The callback page will:
   - Verify the session
   - Create/update user in `delta_users` table
   - Log you in
   - Redirect to `/profile`

### Common Issues:
- **Redirect URI mismatch**: Ensure all URLs match exactly in OAuth settings
- **Cookie issues**: OAuth requires cookies to work; ensure they're enabled
- **HTTPS requirement**: Apple OAuth requires HTTPS in production
- **Pop-up blocked**: Some browsers block OAuth pop-ups; use redirects instead

---

## 7. Production Deployment Checklist

- [ ] Update all OAuth redirect URLs to production domain
- [ ] Enable HTTPS on your domain
- [ ] Update Supabase authentication settings
- [ ] Test all OAuth providers in production
- [ ] Update privacy policy to mention OAuth providers
- [ ] Add proper error handling and logging
- [ ] Implement rate limiting for OAuth endpoints

---

## 8. Security Best Practices

1. **Never expose OAuth secrets** in client-side code
2. **Validate all OAuth responses** on the backend
3. **Use PKCE flow** for additional security (Supabase handles this)
4. **Implement CSRF protection** (Supabase handles this)
5. **Store OAuth tokens securely** (use Supabase session management)
6. **Regularly rotate OAuth credentials**
7. **Monitor failed authentication attempts**
8. **Implement rate limiting** to prevent abuse

---

## 9. Current Implementation Status

✅ **Implemented:**
- Google OAuth integration
- Apple OAuth integration  
- OAuth callback handler
- Automatic user creation in database
- Session management
- Error handling

⚠️ **Pending:**
- Telegram OAuth (marked as "coming soon")
- Account linking (if user signs in with different providers using same email)
- OAuth token refresh handling

---

## Support & Troubleshooting

For issues:
1. Check browser console for errors
2. Verify Supabase dashboard logs
3. Ensure all OAuth credentials are correct
4. Test with different browsers
5. Clear cookies and try again

For Supabase-specific OAuth issues, refer to:
[Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
