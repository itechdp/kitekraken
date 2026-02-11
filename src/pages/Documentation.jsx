import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Video, Code, HelpCircle } from 'lucide-react';

/* 
 * SAFE BROWSING COMPLIANCE: Documentation Page
 * Purpose: Centralized educational resources and help documentation
 * Addresses: Transparency, educational value, user support
 */

const Documentation = () => {
  return (
    <div className="min-h-screen pt-20 bg-[rgb(17,17,19)]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[rgb(26,28,30)] to-[rgb(17,17,19)]">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[rgba(55,255,97,0.1)] rounded-2xl mb-6">
            <BookOpen className="w-8 h-8 text-[rgb(55,255,97)]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-normal text-white mb-6">
            Documentation & Resources
          </h1>
          <p className="text-xl text-[rgb(218,218,218)] max-w-3xl mx-auto">
            Everything you need to get started and master KiteKraken AI trading tools
          </p>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Getting Started */}
            <Link
              to="/tutorials"
              className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 hover:border-[rgb(55,255,97)] transition-all hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-[rgba(55,255,97,0.1)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Video className="w-8 h-8 text-[rgb(55,255,97)]" />
              </div>
              <h3 className="text-2xl font-normal text-white mb-4">Getting Started</h3>
              <p className="text-[rgb(161,161,170)] mb-4">
                Step-by-step tutorials and video guides to help you set up and use KiteKraken AI indicators
              </p>
              <span className="text-[rgb(55,255,97)] text-sm font-medium">View Tutorials →</span>
            </Link>

            {/* API Documentation */}
            <a
              href="https://t.me/bullexailabs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 hover:border-[rgb(55,255,97)] transition-all hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-[rgba(55,150,255,0.1)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-8 h-8 text-[rgb(55,150,255)]" />
              </div>
              <h3 className="text-2xl font-normal text-white mb-4">API Integration</h3>
              <p className="text-[rgb(161,161,170)] mb-4">
                Learn how to connect your exchange accounts and configure API settings securely
              </p>
              <span className="text-[rgb(55,255,97)] text-sm font-medium">Contact Support →</span>
            </a>

            {/* User Guides */}
            <a
              href="https://t.me/bullexailabs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 hover:border-[rgb(55,255,97)] transition-all hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-[rgba(255,193,7,0.1)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-[rgb(255,193,7)]" />
              </div>
              <h3 className="text-2xl font-normal text-white mb-4">User Guides</h3>
              <p className="text-[rgb(161,161,170)] mb-4">
                Comprehensive guides covering all features, settings, and best practices
              </p>
              <span className="text-[rgb(55,255,97)] text-sm font-medium">Get Help →</span>
            </a>

            {/* FAQs */}
            <a
              href="/#faq"
              className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 hover:border-[rgb(55,255,97)] transition-all hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-[rgba(233,30,99,0.1)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-8 h-8 text-[rgb(233,30,99)]" />
              </div>
              <h3 className="text-2xl font-normal text-white mb-4">FAQs</h3>
              <p className="text-[rgb(161,161,170)] mb-4">
                Frequently asked questions about features, pricing, and troubleshooting
              </p>
              <span className="text-[rgb(55,255,97)] text-sm font-medium">Browse FAQs →</span>
            </a>

            {/* Video Tutorials */}
            <a
              href="https://www.youtube.com/@bullexailabs/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 hover:border-[rgb(55,255,97)] transition-all hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-[rgba(156,39,176,0.1)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Video className="w-8 h-8 text-[rgb(156,39,176)]" />
              </div>
              <h3 className="text-2xl font-normal text-white mb-4">Video Library</h3>
              <p className="text-[rgb(161,161,170)] mb-4">
                Watch detailed video tutorials on YouTube covering all aspects of the platform
              </p>
              <span className="text-[rgb(55,255,97)] text-sm font-medium">Watch Videos →</span>
            </a>

            {/* Community Support */}
            <Link
              to="/contact"
              className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 hover:border-[rgb(55,255,97)] transition-all hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-[rgba(255,152,0,0.1)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-[rgb(255,152,0)]" />
              </div>
              <h3 className="text-2xl font-normal text-white mb-4">Community Support</h3>
              <p className="text-[rgb(161,161,170)] mb-4">
                Join our Telegram and Discord communities for peer support and expert guidance
              </p>
              <span className="text-[rgb(55,255,97)] text-sm font-medium">Get Support →</span>
            </Link>

          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-[rgb(26,28,30)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-8 text-center">
              Popular Documentation Topics
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/tutorials"
                className="p-4 bg-[rgb(38,40,42)] rounded-lg border border-[rgba(255,255,255,0.1)] hover:border-[rgb(55,255,97)] transition-colors"
              >
                <p className="text-white font-medium">How to set up TradingView indicators</p>
              </Link>
              <Link
                to="/backtesting"
                className="p-4 bg-[rgb(38,40,42)] rounded-lg border border-[rgba(255,255,255,0.1)] hover:border-[rgb(55,255,97)] transition-colors"
              >
                <p className="text-white font-medium">Backtesting strategies guide</p>
              </Link>
              <a
                href="https://t.me/bullexailabs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[rgb(38,40,42)] rounded-lg border border-[rgba(255,255,255,0.1)] hover:border-[rgb(55,255,97)] transition-colors"
              >
                <p className="text-white font-medium">Understanding trading signals</p>
              </a>
              <Link
                to="/risk-disclaimer"
                className="p-4 bg-[rgb(38,40,42)] rounded-lg border border-[rgba(255,255,255,0.1)] hover:border-[rgb(55,255,97)] transition-colors"
              >
                <p className="text-white font-medium">Risk management best practices</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-lg text-[rgb(218,218,218)] mb-8">
            Our support team is here to help via Telegram, Discord, or email
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[rgb(55,255,97)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
