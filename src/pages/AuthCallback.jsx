import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';
import { Loader2 } from 'lucide-react';

const AuthCallback = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState('');

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        // Get the session from the URL hash
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();

        if (sessionError) {
          console.error('Session error:', sessionError);
          setError('Failed to complete authentication. Please try again.');
          setTimeout(() => navigate('/auth'), 3000);
          return;
        }

        if (session) {
          const user = session.user;
          
          // Check if user exists in delta_users table
          const { data: existingUser, error: checkError } = await supabase
            .from('delta_users')
            .select('*')
            .eq('email', user.email)
            .maybeSingle();

          if (checkError && checkError.code !== 'PGRST116') {
            console.error('Database check error:', checkError);
          }

          // If user doesn't exist in delta_users, create a record
          if (!existingUser) {
            const { data: newUser, error: insertError } = await supabase
              .from('delta_users')
              .insert([
                {
                  email: user.email,
                  name: user.user_metadata?.full_name || user.user_metadata?.name || user.email.split('@')[0],
                  exchange_name: 'Delta Exchange',
                  is_api_active: false,
                  is_active: true,
                  auth_provider: user.app_metadata?.provider || 'oauth'
                }
              ])
              .select()
              .single();

            if (insertError) {
              console.error('Insert error:', insertError);
              setError('Failed to create user profile. Please contact support.');
              setTimeout(() => navigate('/auth'), 3000);
              return;
            }

            // Login with new user data
            login({
              id: newUser.id,
              email: newUser.email,
              name: newUser.name,
              api_key: newUser.api_key,
              exchange_name: newUser.exchange_name,
              is_api_active: newUser.is_api_active,
              created_at: newUser.created_at
            });
          } else {
            // Login with existing user data
            login({
              id: existingUser.id,
              email: existingUser.email,
              name: existingUser.name,
              api_key: existingUser.api_key,
              exchange_name: existingUser.exchange_name,
              is_api_active: existingUser.is_api_active,
              created_at: existingUser.created_at
            });
          }

          // Redirect to profile
          navigate('/profile');
        } else {
          setError('No session found. Redirecting to login...');
          setTimeout(() => navigate('/auth'), 2000);
        }
      } catch (err) {
        console.error('OAuth callback error:', err);
        setError('An unexpected error occurred. Please try again.');
        setTimeout(() => navigate('/auth'), 3000);
      }
    };

    handleOAuthCallback();
  }, [navigate, login]);

  return (
    <div className="min-h-screen bg-[#111113] flex items-center justify-center px-4">
      <div className="text-center">
        {error ? (
          <div className="space-y-4">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">Authentication Failed</h2>
            <p className="text-gray-400">{error}</p>
          </div>
        ) : (
          <div className="space-y-4">
            <Loader2 className="w-16 h-16 text-[#38FE60] mx-auto animate-spin" />
            <h2 className="text-2xl font-bold text-white">Completing Sign In...</h2>
            <p className="text-gray-400">Please wait while we set up your account</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthCallback;
