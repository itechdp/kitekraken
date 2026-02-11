import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const AdminAuthContext = createContext();

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider');
  }
  return context;
};

export const AdminAuthProvider = ({ children }) => {
  const [adminUser, setAdminUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock super admin credentials for demo
  const SUPER_ADMIN_CREDENTIALS = {
    email: 'superadmin@kitekraken.ai',
    password: 'SuperAdmin@2024!',
    role: 'super_admin',
    name: 'Super Administrator'
  };

  useEffect(() => {
    // Check if admin is logged in from localStorage
    const savedAdmin = localStorage.getItem('superAdminUser');
    if (savedAdmin) {
      setAdminUser(JSON.parse(savedAdmin));
    }
    setLoading(false);
  }, []);

  const loginAdmin = (email, password) => {
    if (
      email === SUPER_ADMIN_CREDENTIALS.email &&
      password === SUPER_ADMIN_CREDENTIALS.password
    ) {
      const adminData = {
        email: SUPER_ADMIN_CREDENTIALS.email,
        role: SUPER_ADMIN_CREDENTIALS.role,
        name: SUPER_ADMIN_CREDENTIALS.name,
        loginTime: new Date().toISOString()
      };
      
      setAdminUser(adminData);
      localStorage.setItem('superAdminUser', JSON.stringify(adminData));
      return { success: true, user: adminData };
    }
    
    return { success: false, error: 'Invalid credentials' };
  };

  const logoutAdmin = () => {
    setAdminUser(null);
    localStorage.removeItem('superAdminUser');
  };

  const value = {
    adminUser,
    loading,
    loginAdmin,
    logoutAdmin,
    isSuperAdmin: adminUser?.role === 'super_admin'
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};
