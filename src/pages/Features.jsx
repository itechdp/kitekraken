import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Target, TrendingUp, Shield, Zap, BarChart3, Bell, Users, BookOpen, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

/* 
 * SAFE BROWSING COMPLIANCE: Features Page
 * Purpose: Informational page showcasing platform capabilities
 * Addresses: Transparency, product clarity, no deceptive claims
 */

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI-Powered Trading Indicators",
      description: "Advanced machine learning algorithms analyze market conditions to provide actionable insights. Trading involves risk and results may vary.",
      color: "bg-[rgba(55,255,97,0.1)]",
      iconColor: "text-[rgb(55,255,97)]"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Real-Time Signals & Alerts",
      description: "Get notified instantly when trading opportunities arise across multiple markets and timeframes. Not financial advice.",
      color: "bg-[rgba(55,150,255,0.1)]",
      iconColor: "text-[rgb(55,150,255)]"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive market analysis tools including support/resistance levels, trend identification, and volatility indicators.",
      color: "bg-[rgba(255,193,7,0.1)]",
      iconColor: "text-[rgb(255,193,7)]"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Backtesting",
      description: "Test your strategies against historical data to evaluate performance. Past results do not guarantee future performance.",
      color: "bg-[rgba(233,30,99,0.1)]",
      iconColor: "text-[rgb(233,30,99)]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "VIP Community Access",
      description: "Join 66,000+ traders in exclusive Telegram and Discord communities with 20+ professional analysts.",
      color: "bg-[rgba(156,39,176,0.1)]",
      iconColor: "text-[rgb(156,39,176)]"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Educational Resources",
      description: "Comprehensive tutorials, video courses, and documentation to help you master trading strategies.",
      color: "bg-[rgba(255,152,0,0.1)]",
      iconColor: "text-[rgb(255,152,0)]"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure API Integration",
      description: "Connect your exchange accounts safely with read-only or limited trading permissions. Your funds remain on your exchange.",
      color: "bg-[rgba(76,175,80,0.1)]",
      iconColor: "text-[rgb(76,175,80)]"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Multi-Market Support",
      description: "Trade across crypto, forex, stocks, indices, and commodities on a single platform.",
      color: "bg-[rgba(255,87,34,0.1)]",
      iconColor: "text-[rgb(255,87,34)]"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-[rgb(17,17,19)]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[rgb(26,28,30)] to-[rgb(17,17,19)]">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[rgba(55,255,97,0.1)] rounded-2xl mb-6">
            <Sparkles className="w-8 h-8 text-[rgb(55,255,97)]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-normal text-white mb-6">
            Powerful Features for
            <br />
            <span className="text-[rgb(55,255,97)]">Serious Traders</span>
          </h1>
          <p className="text-xl text-[rgb(218,218,218)] max-w-3xl mx-auto">
            Professional-grade trading tools designed to help you analyze markets and make informed decisions.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 hover:border-[rgb(55,255,97)] transition-all hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className={feature.iconColor}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-normal text-white mb-4">{feature.title}</h3>
                <p className="text-[rgb(161,161,170)] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 bg-[rgb(26,28,30)]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-normal text-white mb-6">
                Why Choose <span className="text-[rgb(55,255,97)]">KiteKraken AI</span>
              </h2>
              <p className="text-xl text-[rgb(218,218,218)]">
                Trusted by over 66,000 traders worldwide for market analysis and education
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-6 bg-[rgb(38,40,42)] rounded-xl border border-[rgba(255,255,255,0.1)]">
                <CheckCircle className="w-6 h-6 text-[rgb(55,255,97)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">No Installation Required</h4>
                  <p className="text-[rgb(161,161,170)] text-sm">Cloud-based platform accessible from any device with internet connection</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-[rgb(38,40,42)] rounded-xl border border-[rgba(255,255,255,0.1)]">
                <CheckCircle className="w-6 h-6 text-[rgb(55,255,97)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">TradingView Integration</h4>
                  <p className="text-[rgb(161,161,170)] text-sm">Seamlessly integrates with TradingView's powerful charting platform</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-[rgb(38,40,42)] rounded-xl border border-[rgba(255,255,255,0.1)]">
                <CheckCircle className="w-6 h-6 text-[rgb(55,255,97)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">24/7 Customer Support</h4>
                  <p className="text-[rgb(161,161,170)] text-sm">Dedicated support team available via Telegram, Discord, and email</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-[rgb(38,40,42)] rounded-xl border border-[rgba(255,255,255,0.1)]">
                <CheckCircle className="w-6 h-6 text-[rgb(55,255,97)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Regular Updates</h4>
                  <p className="text-[rgb(161,161,170)] text-sm">Continuous improvements and new features based on user feedback</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-[rgb(38,40,42)] rounded-xl border border-[rgba(255,255,255,0.1)]">
                <CheckCircle className="w-6 h-6 text-[rgb(55,255,97)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Flexible Subscription</h4>
                  <p className="text-[rgb(161,161,170)] text-sm">Cancel anytime with no long-term commitment or hidden fees</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-[rgb(38,40,42)] rounded-xl border border-[rgba(255,255,255,0.1)]">
                <CheckCircle className="w-6 h-6 text-[rgb(55,255,97)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Educational First</h4>
                  <p className="text-[rgb(161,161,170)] text-sm">Focus on learning and improving your trading knowledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="py-12 bg-[rgba(255,193,7,0.1)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white text-sm md:text-base">
              <strong>Important:</strong> KiteKraken AI provides educational tools and market analysis. Trading involves substantial risk of loss. 
              <Link to="/risk-disclaimer" className="text-[rgb(55,255,97)] underline hover:text-[rgb(255,193,7)] ml-2">
                Read our full Risk Disclaimer
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-6">
            Ready to explore our features?
          </h2>
          <p className="text-xl text-[rgb(218,218,218)] mb-8 max-w-2xl mx-auto">
            Join thousands of traders using KiteKraken AI for market analysis
          </p>
          <Button
            onClick={() => navigate('/pricing')}
            className="bg-[rgb(55,255,97)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] font-semibold px-10 py-6 rounded-xl text-lg transition-all hover:scale-105 hover:shadow-[0_8px_25px_rgba(55,255,97,0.3)]"
          >
            View Pricing Plans
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Features;
