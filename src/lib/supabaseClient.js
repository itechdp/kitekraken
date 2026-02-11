import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vwvgfhdzxfjdbmnsgthr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3dmdmaGR6eGZqZGJtbnNndGhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1ODQ1OTYsImV4cCI6MjA3NzE2MDU5Nn0.s2QEoYteorPw6WoXgQtHUz7IbBoum6CyqMbH8jHOJvo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
