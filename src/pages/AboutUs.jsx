import React from 'react';
import { Shield, Zap, TrendingUp, Clock, Brain, Lock, ArrowRight, CheckCircle, BarChart3, Send, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#111113] relative">
      {/* Background Image with Opacity */}
      <div 
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url(/1351035.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-10 md:pt-24 lg:pt-32 md:pb-12 lg:pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto text-center space-y-4 md:space-y-6">
              <div className="inline-block">
                <span className="text-[#36FE60] text-xs md:text-sm font-normal uppercase tracking-wider bg-[#1a1c1e] px-4 md:px-6 py-2 md:py-3 rounded-full border border-[#2a2c2e]">
                  About Kitekraken.ai
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.1] tracking-tight">
                Technology-First
                <br />
                <span className="text-[#36FE60]">Trading Automation</span>
              </h1>
              
              <p className="text-[#B5B5B5] text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
                At Kitekraken.ai, we aren't just a trading tool—we are a technology-first software company dedicated to democratizing market access through high-performance automation. We believe that the biggest obstacle for any trader isn't the market itself, but the limitations of manual execution and emotional decision-making.
              </p>
              
              <p className="text-[#B5B5B5] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Our mission is to provide a secure, scalable, and educational infrastructure that allows users to bridge the gap between their technical analysis and the world's leading financial exchanges.
              </p>
            </div>
          </div>
        </section>

        {/* Core Philosophy Section */}
        <section className="py-10 md:py-12 lg:py-16 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
                Our Core <span className="text-[#36FE60]">Philosophy</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {/* Philosophy 1 */}
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 md:p-8 hover:border-[#36FE60] transition-all group">
                <div className="w-14 h-14 bg-[#36FE60] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7 text-[#111113]" />
                </div>
                <h3 className="text-xl md:text-2xl font-normal text-white mb-3">Technology Over Emotion</h3>
                <p className="text-[#B5B5B5] text-sm md:text-base leading-relaxed mb-4">
                  The markets never sleep, but humans must. We build software that operates on logic and mathematics. By automating your strategies, we help you eliminate the "fear and greed" factors that often lead to inconsistent results.
                </p>
                <span className="text-[#36FE60] text-xs font-medium">24/7 Market Execution Technology</span>
              </div>

              {/* Philosophy 2 */}
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 md:p-8 hover:border-[#36FE60] transition-all group">
                <div className="w-14 h-14 bg-[#36FE60] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-[#111113]" />
                </div>
                <h3 className="text-xl md:text-2xl font-normal text-white mb-3">Security by Design</h3>
                <p className="text-[#B5B5B5] text-sm md:text-base leading-relaxed mb-4">
                  Your security is our priority. Kitekraken.AI operates on a non-custodial model. This means we never have access to your capital. Through secure API integrations, your funds remain safely in your chosen exchange while our software executes your predefined instructions.
                </p>
                <span className="text-[#36FE60] text-xs font-medium">Algorithmic Strategy Insights</span>
              </div>

              {/* Philosophy 3 */}
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 md:p-8 hover:border-[#36FE60] transition-all group">
                <div className="w-14 h-14 bg-[#36FE60] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-7 h-7 text-[#111113]" />
                </div>
                <h3 className="text-xl md:text-2xl font-normal text-white mb-3">Education & Empowerment</h3>
                <p className="text-[#B5B5B5] text-sm md:text-base leading-relaxed mb-4">
                  We are committed to the "Education First" model. Our platform is designed to help users understand the mechanics of the market. We provide List of Indicators and Strategies. We empower you to become a more disciplined, systematic participant in the global economy.
                </p>
                <span className="text-[#36FE60] text-xs font-medium">Backtested Strategy Results</span>
              </div>

              {/* Philosophy 4 */}
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 md:p-8 hover:border-[#36FE60] transition-all group">
                <div className="w-14 h-14 bg-[#36FE60] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-[#111113]" />
                </div>
                <h3 className="text-xl md:text-2xl font-normal text-white mb-3">Multi-Asset Agility</h3>
                <p className="text-[#B5B5B5] text-sm md:text-base leading-relaxed mb-4">
                  While many platforms are limited to one niche, Kitekraken.ai provides a unified interface for Forex, Stocks, Commodities, and Crypto.
                </p>
                <span className="text-[#36FE60] text-xs font-medium">Automated Trading Infrastructure</span>
              </div>

              {/* Philosophy 5 */}
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 md:p-8 hover:border-[#36FE60] transition-all group">
                <div className="w-14 h-14 bg-[#36FE60] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-[#111113]" />
                </div>
                <h3 className="text-xl md:text-2xl font-normal text-white mb-3">Seamless Integration</h3>
                <p className="text-[#B5B5B5] text-sm md:text-base leading-relaxed mb-4">
                  We specialize in the "TradingView-to-Exchange" pipeline, making it easier than ever for chartists to turn their visual signals into real-world execution.
                </p>
                <span className="text-[#36FE60] text-xs font-medium">Efficiency Tools for Traders</span>
              </div>

              {/* Philosophy 6 */}
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 md:p-8 hover:border-[#36FE60] transition-all group">
                <div className="w-14 h-14 bg-[#36FE60] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-7 h-7 text-[#111113]" />
                </div>
                <h3 className="text-xl md:text-2xl font-normal text-white mb-3">Institutional-Grade Logic</h3>
                <p className="text-[#B5B5B5] text-sm md:text-base leading-relaxed">
                  We bring the same level of automation used by large-scale firms to the individual software user, ensuring low-latency performance across all asset classes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
                  Our <span className="text-[#36FE60]">Vision</span>
                </h2>
              </div>
              
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 md:p-8">
                <p className="text-[#B5B5B5] text-lg md:text-xl leading-relaxed mb-6">
                  As the financial landscape evolves toward decentralization and algorithmic precision, Kitekraken.AI aims to be the premier software partner for the modern trader. We are constantly innovating, refining our code, and expanding our integrations to ensure our users stay ahead of the curve in an increasingly automated world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Transparency Section */}
        <section className="py-10 md:py-12 lg:py-16 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
                  Corporate <span className="text-[#36FE60]">Transparency</span>
                </h2>
              </div>
              
              <div className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 md:p-8">
                <p className="text-[#B5B5B5] text-lg md:text-xl leading-relaxed">
                  Kitekraken.AI is a software development firm. We do not act as financial advisors or brokers. Our software is designed to execute trade in user's selected Exchange, and we encourage all our users to practice responsible risk management and continuous learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6 bg-gradient-to-br from-[#1a1c1e] to-[#0a0a0a] border border-[#2a2c2e] rounded-3xl p-6 md:p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight">
                Ready to Automate
                <br />
                <span className="text-[#36FE60]">Your Trading Strategy?</span>
              </h2>
              
              <p className="text-[#B5B5B5] text-lg md:text-xl max-w-2xl mx-auto">
                Join traders who are leveraging Kitekraken.AI's technology-first approach to trading automation
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  onClick={() => navigate('/pricing')}
                  className="bg-[#36FE60] text-[#111113] hover:bg-[#36FE60] font-normal px-10 py-7 rounded-full text-lg transition-all hover:scale-105 shadow-lg w-full sm:w-auto"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  onClick={() => navigate('/tutorials')}
                  variant="outline"
                  className="border-[#36FE60] text-[#36FE60] hover:bg-[#36FE60] hover:text-[#111113] font-normal px-10 py-7 rounded-full text-lg transition-all w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section id="social-media" className="py-10 md:py-12 lg:py-16 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-block">
                <span className="text-[#36FE60] text-xs md:text-sm font-normal uppercase tracking-wider bg-[#1a1c1e] px-4 md:px-6 py-2 md:py-3 rounded-full border border-[#2a2c2e]">
                  Stay Connected
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight">
                Follow Kitekraken.AI on
                <br />
                <span className="text-[#36FE60]">Social Media</span>
              </h2>
              
              <p className="text-[#B5B5B5] text-lg md:text-xl max-w-2xl mx-auto">
                Join our growing community and stay updated with the latest news, features, and trading insights.
              </p>

              {/* Social Media Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {/* Telegram */}
                <a 
                  href="https://t.me/kitekraken" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 hover:border-[#36FE60] transition-all group"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#36FE60] to-[#30E050] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Send className="w-8 h-8 text-[#111113]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Telegram</h3>
                    <p className="text-[#B5B5B5] text-sm text-center">Join our Telegram community for real-time updates</p>
                  </div>
                </a>

                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/@bullexailabs/videos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 hover:border-[#36FE60] transition-all group"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Youtube className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">YouTube</h3>
                    <p className="text-[#B5B5B5] text-sm text-center">Watch tutorials and trading insights</p>
                  </div>
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/profile.php?id=61583845973970" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 hover:border-[#36FE60] transition-all group"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Facebook className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Facebook</h3>
                    <p className="text-[#B5B5B5] text-sm text-center">Follow us for latest announcements</p>
                  </div>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/bullexailabs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 hover:border-[#36FE60] transition-all group"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Instagram className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Instagram</h3>
                    <p className="text-[#B5B5B5] text-sm text-center">Daily trading tips and updates</p>
                  </div>
                </a>

                {/* Twitter/X */}
                <a 
                  href="https://x.com/BullexAiLabs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 hover:border-[#36FE60] transition-all group"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Twitter className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Twitter (X)</h3>
                    <p className="text-[#B5B5B5] text-sm text-center">Get instant market updates</p>
                  </div>
                </a>

                {/* Discord */}
                <a 
                  href="https://discord.gg/shdwXNAX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6 hover:border-[#36FE60] transition-all group"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Discord</h3>
                    <p className="text-[#B5B5B5] text-sm text-center">Connect with the community</p>
                  </div>
                </a>
              </div>

              {/* Additional Info */}
              <div className="mt-6 bg-[#1a1c1e] border border-[#2a2c2e] rounded-2xl p-6">
                <p className="text-white text-lg mb-4">
                  Have questions? Reach out to us on any platform!
                </p>
                <p className="text-[#B5B5B5] text-sm">
                  Our team is active across all channels and ready to assist you with your trading journey.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;
