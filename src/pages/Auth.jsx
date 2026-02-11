import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';
import bcrypt from 'bcryptjs';

const Auth = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
  }, [isAuthenticated, navigate]);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted!', { isLogin, formData });
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (isLogin) {
        // Login logic
        console.log('Attempting login...');
        const { data, error } = await supabase
          .from('delta_users')
          .select('*')
          .eq('email', formData.email)
          .single();

        console.log('Login response:', { data, error });

        if (error || !data) {
          setError('Invalid email or password');
          setLoading(false);
          return;
        }

        // Compare password with hashed password
        const passwordMatch = await bcrypt.compare(formData.password, data.password_hash);
        
        if (!passwordMatch) {
          setError('Invalid email or password');
          setLoading(false);
          return;
        }

        // Save user data to context
        login({
          id: data.id,
          email: data.email,
          name: data.name,
          api_key: data.api_key,
          exchange_name: data.exchange_name,
          is_api_active: data.is_api_active,
          created_at: data.created_at
        });

        setSuccess('Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/profile');
        }, 1500);
      } else {
        // Signup logic
        console.log('Attempting signup...');
        
        // Check if user already exists
        const { data: existingUser, error: checkError } = await supabase
          .from('delta_users')
          .select('email')
          .eq('email', formData.email)
          .maybeSingle(); // Use maybeSingle instead of single to avoid errors when no user exists

        console.log('Existing user check:', { existingUser, checkError });

        if (existingUser) {
          setError('An account with this email already exists');
          setLoading(false);
          return;
        }

        // Hash the password before storing
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(formData.password, saltRounds);

        // Insert new user into delta_users table
        const { data, error } = await supabase
          .from('delta_users')
          .insert([
            {
              email: formData.email,
              password_hash: hashedPassword,
              name: `${formData.firstName} ${formData.lastName}`,
              exchange_name: 'Delta Exchange',
              is_api_active: false,
              is_active: true
            }
          ])
          .select();

        console.log('Signup response:', { data, error });

        if (error) {
          console.error('Signup error:', error);
          setError(error.message || 'Failed to create account. Please try again.');
          setLoading(false);
          return;
        }

        setSuccess('Account created successfully! Redirecting to login...');
        setTimeout(() => {
          setIsLogin(true);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
          });
          setSuccess('');
        }, 2000);
      }
    } catch (err) {
      console.error('Caught error:', err);
      setError(`An unexpected error occurred: ${err.message || 'Please try again.'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      setLoading(true);
      setError('');
      
      let authProvider;
      
      // Map provider names to Supabase provider strings
      if (provider === 'Google') {
        authProvider = 'google';
      } else if (provider === 'Apple') {
        authProvider = 'apple';
      } else if (provider === 'Telegram') {
        // Telegram OAuth requires custom implementation
        setError('Telegram sign-in coming soon!');
        setLoading(false);
        return;
      }
      
      // Supabase OAuth sign in
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: authProvider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          }
        }
      });

      if (error) {
        console.error('OAuth error:', error);
        setError(`Failed to sign in with ${provider}. Please try again.`);
      }
      
      // Note: User will be redirected to OAuth provider's page
      // After authentication, they'll be redirected back to /auth/callback
      
    } catch (err) {
      console.error('Social login error:', err);
      setError(`An error occurred during ${provider} sign-in.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111113] flex items-center justify-center px-4 pt-32 pb-20">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <img src="/logo.png" alt="Bullex Logo" className="h-16 w-auto object-contain" />
          </Link>
        </div>

        {/* Main Card */}
        <div className="bg-[#1a1c1e] rounded-2xl shadow-lg border border-[#2a2c2e] p-8">
          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            {isLogin ? 'Welcome Back' : 'Create Your Account'}
          </h2>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg">
              <p className="text-red-500 text-sm text-center">{error}</p>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-4 p-3 bg-[#38FE60]/10 border border-[#38FE60]/50 rounded-lg">
              <p className="text-[#38FE60] text-sm text-center">{success}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields (Signup Only) */}
            {!isLogin && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1.5">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-[#111113] border border-[#2a2c2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38FE60] focus:border-transparent transition-all placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-[#111113] border border-[#2a2c2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38FE60] focus:border-transparent transition-all placeholder:text-gray-500"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-[#111113] border border-[#2a2c2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38FE60] focus:border-transparent transition-all placeholder:text-gray-500"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-[#111113] border border-[#2a2c2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38FE60] focus:border-transparent transition-all placeholder:text-gray-500 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Terms (Signup Only) */}
            {!isLogin && (
              <p className="text-xs text-gray-400 text-center pt-2">
                By creating an account, I agree to Bullex's{' '}
                <Link to="/terms" className="text-[#38FE60] hover:underline">
                  Terms of Use
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-[#38FE60] hover:underline">
                  Privacy Policy
                </Link>
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              onClick={(e) => console.log('Button clicked!', e)}
              className="w-full bg-[#38FE60] hover:bg-[#30E050] text-[#111113] font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (isLogin ? 'Logging in...' : 'Creating Account...') : (isLogin ? 'Login' : 'Register')}
            </button>
          </form>

          {/* Already have account / Login toggle */}
          <p className="text-center text-sm text-gray-400 mt-4">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => {
                console.log('Toggle clicked! Switching from', isLogin ? 'login' : 'signup', 'to', !isLogin ? 'login' : 'signup');
                setIsLogin(!isLogin);
              }}
              className="text-[#38FE60] hover:underline font-medium"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#2a2c2e]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-[#1a1c1e] text-gray-400">Or register with</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex gap-3 justify-center">
            <button
              type="button"
              onClick={() => handleSocialLogin('Google')}
              className="p-3 bg-[#111113] border border-[#2a2c2e] rounded-lg hover:bg-[#2a2c2e] transition-colors"
              aria-label="Login with Google"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin('Apple')}
              className="p-3 bg-[#111113] border border-[#2a2c2e] rounded-lg hover:bg-[#2a2c2e] transition-colors"
              aria-label="Login with Apple"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin('Telegram')}
              className="p-3 bg-[#111113] border border-[#2a2c2e] rounded-lg hover:bg-[#2a2c2e] transition-colors"
              aria-label="Login with Telegram"
            >
              <svg className="w-5 h-5" fill="#0088cc" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.015-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.14.121.099.155.232.171.326.016.093.036.306.02.472z"/>
              </svg>
            </button>
          </div>

          {/* Always verify section */}
          <div className="mt-6 pt-6 border-t border-[#2a2c2e]">
            <p className="text-xs font-semibold text-gray-300 text-center mb-3">Always verify:</p>
            <div className="flex flex-wrap gap-3 justify-center text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#38FE60]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#38FE60]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-xs">The page uses https encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#38FE60]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#38FE60]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-xs">You have two-factor auth (2FA) enabled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
