import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Youtube, MessageCircle, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[rgb(26,28,30)] border-t border-[rgba(255,255,255,0.1)] mt-32 relative z-10">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 pt-24 md:pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="KiteKraken AI Logo" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-[rgb(161,161,170)] text-xs md:text-sm leading-relaxed">
              Unleash the power of Artificial Intelligence in trading. Trusted by over 66,000 traders worldwide.
            </p>
            <div className="flex space-x-2 md:space-x-3 pt-4">
              <a href="https://x.com/BullexAiLabs" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-[rgb(38,40,42)] flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(55,255,97)] hover:text-[rgb(17,17,19)] transition-all hover:-translate-y-1">
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61583845973970" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-[rgb(38,40,42)] flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(55,255,97)] hover:text-[rgb(17,17,19)] transition-all hover:-translate-y-1">
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="https://www.instagram.com/bullexailabs/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-[rgb(38,40,42)] flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(55,255,97)] hover:text-[rgb(17,17,19)] transition-all hover:-translate-y-1">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="https://www.youtube.com/@bullexailabs/videos" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-[rgb(38,40,42)] flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(55,255,97)] hover:text-[rgb(17,17,19)] transition-all hover:-translate-y-1">
                <Youtube className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="https://t.me/bullexailabs" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-[rgb(38,40,42)] flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(55,255,97)] hover:text-[rgb(17,17,19)] transition-all hover:-translate-y-1">
                <Send className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="https://discord.gg/shdwXNAX" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-[rgb(38,40,42)] flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(55,255,97)] hover:text-[rgb(17,17,19)] transition-all hover:-translate-y-1">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4">Product</h3>
            <ul className="space-y-2.5 md:space-y-3">
              <li>
                <Link to="/pricing" className="text-[rgb(161,161,170)] hover:text-[rgb(55,255,97)] transition-colors text-xs md:text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-[rgb(161,161,170)] hover:text-[rgb(55,255,97)] transition-colors text-xs md:text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-[rgb(161,161,170)] hover:text-[rgb(55,255,97)] transition-colors text-xs md:text-sm">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-[rgb(161,161,170)] hover:text-[rgb(55,255,97)] transition-colors text-xs md:text-sm">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4">Support</h3>
            <ul className="space-y-2.5 md:space-y-3">
              <li>
                <Link to="/contact" className="text-[rgb(161,161,170)] hover:text-[rgb(55,255,97)] transition-colors text-xs md:text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-[rgb(161,161,170)] hover:text-[rgb(55,255,97)] transition-colors text-xs md:text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <a href="https://t.me/bullexailabs" target="_blank" rel="noopener noreferrer" className="text-[rgb(161,161,170)] hover:text-[rgb(55,255,97)] transition-colors text-xs md:text-sm">
                  Community Telegram
                </a>
              </li>
              <li>
                <a href="https://discord.gg/shdwXNAX" target="_blank" rel="noopener noreferrer" className="text-[rgb(161,161,170)] hover:text-[rgb(55,255,97)] transition-colors text-xs md:text-sm">
                  Discord Community
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4">Legal</h3>
            <ul className="space-y-2.5 md:space-y-3">
              <li>
                <Link to="/terms" className="text-[rgb(161,161,170)] hover:text-[rgb(55,255,97)] transition-colors text-xs md:text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-[rgb(161,161,170)] hover:text-[rgb(55,255,97)] transition-colors text-xs md:text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-[rgb(161,161,170)] hover:text-[rgb(55,255,97)] transition-colors text-xs md:text-sm">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/risk-disclaimer" className="text-[rgb(161,161,170)] hover:text-[rgb(55,255,97)] transition-colors text-xs md:text-sm">
                  Risk Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-[rgb(161,161,170)] hover:text-[rgb(55,255,97)] transition-colors text-xs md:text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/affiliates" className="text-[rgb(161,161,170)] hover:text-[rgb(55,255,97)] transition-colors text-xs md:text-sm">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(255,255,255,0.1)] mt-12 md:mt-16 pt-8 md:pt-10 pb-10 md:pb-12 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-center md:text-left">
          <p className="text-[rgb(161,161,170)] text-xs md:text-sm">
            © 2025 KiteKraken AI. All rights reserved.
          </p>
          <p className="text-[rgb(161,161,170)] text-xs md:text-sm">
            Made with <span className="text-[rgb(55,255,97)]">AI</span> for traders worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
