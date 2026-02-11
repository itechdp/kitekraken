import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, Settings, LogOut, Activity, Wallet, Key } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const navItems = [

    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Backtesting', path: '/backtesting' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Join Telegram', path: '/contact' },
        { name: 'About Us', path: '/about' }
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    navigate('/');
  };

  const getUserInitials = () => {
    if (!user || !user.name || user.name === 'undefined' || typeof user.name !== 'string') return 'U';
    const trimmedName = user.name.trim();
    if (!trimmedName) return 'U';
    const names = trimmedName.split(' ');
    if (names.length >= 2 && names[0] && names[1]) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return trimmedName[0].toUpperCase();
  };

  const getUserFirstName = () => {
    if (!user || !user.name || user.name === 'undefined' || typeof user.name !== 'string') return 'User';
    const trimmedName = user.name.trim();
    if (!trimmedName) return 'User';
    const firstName = trimmedName.split(' ')[0];
    return firstName || 'User';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111113] border-b border-[#2a2c2e] backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="Bullex Logo" className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium transition-colors hover:text-[#38FE60] ${
                  isActive(item.path) ? 'text-[#38FE60]' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {isAuthenticated && (
              <Link
                to="/api-settings"
                className={`text-base font-medium transition-colors hover:text-[#38FE60] ${
                  isActive('/api-settings') ? 'text-[#38FE60]' : 'text-white'
                }`}
              >
                API Settings
              </Link>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 bg-[#38FE60]/10 hover:bg-[#38FE60]/20 border border-[#38FE60] text-[#38FE60] rounded-full px-4 py-2 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-[#38FE60] flex items-center justify-center text-[#111113] font-bold">
                    {getUserInitials()}
                  </div>
                  <span className="font-medium">{getUserFirstName()}</span>
                </button>

                {/* Dropdown Menu */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl shadow-lg overflow-hidden z-50">
                    <div className="p-4 border-b border-[#2a2c2e]">
                      <p className="text-white font-semibold">
                        {user?.name && user.name !== 'undefined' && typeof user.name === 'string' ? user.name : 'User'}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {user?.email && user.email !== 'undefined' && typeof user.email === 'string' ? user.email : ''}
                      </p>
                    </div>
                    
                    <div className="py-2">
                      <Link
                        to="/profile"
                        onClick={() => setShowProfileMenu(false)}
                        className="flex items-center space-x-3 px-4 py-2.5 text-gray-300 hover:bg-[#2a2c2e] hover:text-[#38FE60] transition-colors"
                      >
                        <User className="w-5 h-5" />
                        <span>My Profile</span>
                      </Link>
                      
                      <Link
                        to="/api-settings"
                        onClick={() => setShowProfileMenu(false)}
                        className="flex items-center space-x-3 px-4 py-2.5 text-gray-300 hover:bg-[#2a2c2e] hover:text-[#38FE60] transition-colors"
                      >
                        <Key className="w-5 h-5" />
                        <span>API Credentials</span>
                      </Link>
                      
                      <Link
                        to="/profile?tab=trading"
                        onClick={() => setShowProfileMenu(false)}
                        className="flex items-center space-x-3 px-4 py-2.5 text-gray-300 hover:bg-[#2a2c2e] hover:text-[#38FE60] transition-colors"
                      >
                        <Activity className="w-5 h-5" />
                        <span>Trading Activity</span>
                      </Link>
                      
                      <Link
                        to="/profile?tab=api"
                        onClick={() => setShowProfileMenu(false)}
                        className="flex items-center space-x-3 px-4 py-2.5 text-gray-300 hover:bg-[#2a2c2e] hover:text-[#38FE60] transition-colors"
                      >
                        <Wallet className="w-5 h-5" />
                        <span>API Settings</span>
                      </Link>
                      
                      <Link
                        to="/profile?tab=settings"
                        onClick={() => setShowProfileMenu(false)}
                        className="flex items-center space-x-3 px-4 py-2.5 text-gray-300 hover:bg-[#2a2c2e] hover:text-[#38FE60] transition-colors"
                      >
                        <Settings className="w-5 h-5" />
                        <span>Settings</span>
                      </Link>
                    </div>
                    
                    <div className="border-t border-[#2a2c2e] py-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 px-4 py-2.5 text-red-400 hover:bg-[#2a2c2e] hover:text-red-300 transition-colors w-full"
                      >
                        <LogOut className="w-5 h-5" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/auth">
                <Button
                  className="bg-[#38FE60] text-[#111113] hover:bg-[#36FE60] font-normal px-6 py-2.5 rounded-full transition-all hover:scale-105"
                >
                  Sign Up
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#38FE60] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111113] border-t border-[#2a2c2e]">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors hover:text-[#38FE60] py-2 ${
                  isActive(item.path) ? 'text-[#38FE60]' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {isAuthenticated && (
              <Link
                to="/api-settings"
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors hover:text-[#38FE60] py-2 ${
                  isActive('/api-settings') ? 'text-[#38FE60]' : 'text-white'
                }`}
              >
                API Settings
              </Link>
            )}
            {isAuthenticated ? (
              <>
                <div className="border-t border-[#2a2c2e] pt-3 mt-3">
                  <div className="flex items-center space-x-3 px-2 py-2">
                    <div className="w-10 h-10 rounded-full bg-[#38FE60] flex items-center justify-center text-[#111113] font-bold">
                      {getUserInitials()}
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        {user?.name && user.name !== 'undefined' && typeof user.name === 'string' ? user.name : 'User'}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {user?.email && user.email !== 'undefined' && typeof user.email === 'string' ? user.email : ''}
                      </p>
                    </div>
                  </div>
                </div>
                
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-2 py-2.5 text-gray-300 hover:text-[#38FE60] transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span>My Profile</span>
                </Link>
                
                <Link
                  to="/api-settings"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-2 py-2.5 text-gray-300 hover:text-[#38FE60] transition-colors"
                >
                  <Key className="w-5 h-5" />
                  <span>API Credentials</span>
                </Link>
                
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-3 px-2 py-2.5 text-red-400 hover:text-red-300 transition-colors w-full"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link to="/auth" onClick={() => setIsOpen(false)}>
                <Button
                  className="bg-[#38FE60] text-[#111113] hover:bg-[#36FE60] font-medium px-8 py-3 rounded-full transition-all hover:scale-105 w-full"
                >
                  Sign Up
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
