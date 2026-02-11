import React from 'react';
import { ArrowRight, Star, CheckCircle, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import AnimatedChart from '../components/AnimatedChart';
import { useNavigate } from 'react-router-dom';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import { pricingPlans } from '../data/mockData';

const Home = () => {
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
      <section className="relative pt-20 pb-16 md:pt-32 lg:pt-40 md:pb-20 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-6">
              {/* Trustpilot Badge */}
              <div className="flex justify-center lg:justify-start">
                <img src="/TRUSTPILOT.webp" alt="Trustpilot" className="h-12 md:h-16 lg:h-20" />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-normal text-white leading-[1.1] tracking-tight">
                <span className="text-[#38FE60]">Automate</span> Your
                <br />
                Trades & <span className="text-[#38FE60]">Maximize</span>
                <br />
                Profits with AI
              </h1>
              
              <p className="text-[#B5B5B5] text-base md:text-lg lg:text-xl leading-relaxed font-normal">
                Unlock powerful trading AI bots, Indicators, Signals, and Alerts used by 66,000+ traders globally.
              </p>
              
              <div className="pt-2 md:pt-4">
                <Button
                  onClick={() => navigate('/pricing')}
                  className="bg-[#38FE60] text-[#111113] hover:bg-[#36FE60] font-normal px-6 md:px-8 py-5 md:py-7 rounded-full text-base md:text-lg transition-all hover:scale-105 shadow-lg w-full sm:w-auto"
                >
                  Get Access
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
                <p className="text-[#9CA3AF] text-xs md:text-sm mt-3">No trading experience required.</p>
              </div>
            </div>

            {/* Right - Illustration */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src="/Illustration.webp" 
                  alt="Trading Illustration" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Logos Section - Infinite Carousel */}
      <section className="py-8 md:py-12 border-y border-[#2a2c2e] overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll-fast">
            {/* First set of logos */}
            <div className="flex items-center justify-around min-w-max space-x-24 md:space-x-32 lg:space-x-40 px-12 md:px-16">
              <img src="/businessinsider.webp" alt="Business Insider" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px' }} />
              <img src="/marketwatch.webp" alt="MarketWatch" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px' }} />
              <img src="/yahoo.webp" alt="Yahoo Finance" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px' }} />
              <img src="/barchart.webp" alt="Barchart" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px' }} />
              <img src="/forbes.webp" alt="Forbes" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px' }} />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center justify-around min-w-max space-x-24 md:space-x-32 lg:space-x-40 px-12 md:px-16">
              <img src="/businessinsider.webp" alt="Business Insider" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px' }} />
              <img src="/marketwatch.webp" alt="MarketWatch" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px' }} />
              <img src="/yahoo.webp" alt="Yahoo Finance" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px' }} />
              <img src="/barchart.webp" alt="Barchart" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px' }} />
              <img src="/forbes.webp" alt="Forbes" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px' }} />
            </div>
            {/* Third set for extra smoothness */}
            <div className="flex items-center justify-around min-w-max space-x-24 md:space-x-32 lg:space-x-40 px-12 md:px-16">
              <img src="/businessinsider.webp" alt="Business Insider" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px' }} />
              <img src="/marketwatch.webp" alt="MarketWatch" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px' }} />
              <img src="/yahoo.webp" alt="Yahoo Finance" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px' }} />
              <img src="/barchart.webp" alt="Barchart" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px' }} />
              <img src="/forbes.webp" alt="Forbes" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Toolkits Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-[#111113]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[#0a0a0a] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 xl:p-14">
            <div className="grid lg:grid-cols-[45%_55%] gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-4 md:space-y-6">
                <div>
                  <span className="text-[#38FE60] text-xs md:text-sm lg:text-base font-normal">
                    Advanced <span className="text-white">Toolkits</span>
                  </span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
                  <span className="text-[#38FE60]">Next-Generation</span>
                  <br />
                  <span className="text-white">Trading Solutions</span>
                </h2>
                
                <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
                  Our revolutionary algorithms, designed for both automated and manual trading, empower investors of all levels—from beginners to seasoned experts—to succeed in any financial market. Trusted by a community of over 66,000 traders and enhanced by proven AI toolkits, we provide everything you need to achieve lasting success as an investor.
                </p>
              </div>

              {/* Right - Video/Image */}
              <div className="relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl lg:-ml-8 ml-0">
                <video 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/IMG_0689.MP4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Suite Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-[#111113]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left - Chart with Indicators */}
            <div className="relative bg-[#1a1c1e] rounded-2xl md:rounded-3xl border border-[#2a2c2e] p-4 md:p-6 shadow-2xl order-2 lg:order-1">
              <div className="space-y-4">
                {/* Mock Chart */}
                <div className="h-64 md:h-80 bg-[#111113] rounded-xl border border-[#2a2c2e] relative overflow-hidden">
                  <AnimatedChart />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
              <div className="inline-block">
                <span className="text-[#38FE60] text-xs md:text-sm font-normal uppercase tracking-wider bg-[#1a1c1e] px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-[#2a2c2e]">
                  Master Suite
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight">
                Loaded with
                <br />
                Powerful Insights
              </h2>
              
              <p className="text-[#B5B5B5] text-sm md:text-base lg:text-lg leading-relaxed">
                Effortlessly identify high-probability setups while avoiding high-risk trades. Get professional-grade alerts that integrate seamlessly with our toolkits for precision and confidence. Filter out the noise and uncover trade opportunities across forex, stocks, and other markets. Our advanced algorithms analyze market conditions in real-time, keeping you ahead of trends, detecting key reversals, and maximizing profits with minimal effort. Say goodbye to guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Engineering Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-[#111113]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-6">
              <div className="inline-block">
                <span className="text-[#38FE60] text-xs md:text-sm font-normal uppercase tracking-wider bg-[#1a1c1e] px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-[#2a2c2e]">
                  Expert Engineering
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight">
                Unleash The Power of
                <br />
                Artificial Intelligence
              </h2>
              
              <p className="text-[#B5B5B5] text-sm md:text-base lg:text-lg leading-relaxed">
                Unleash the power of Artificial Intelligence with our revolutionary algorithms, designed for both automated and manual trading. Whether you're a beginner or a seasoned expert, our AI-driven tools empower you to thrive in any financial market. Trusted by over 66,000 traders, we provide everything you need to achieve lasting success as an investor.
              </p>
            </div>

            {/* Right - Chart with Indicators */}
            <div className="relative bg-[#1a1c1e] rounded-2xl md:rounded-3xl border border-[#2a2c2e] p-4 md:p-6 shadow-2xl">
              <div className="h-64 md:h-80 bg-[#111113] rounded-xl border border-[#2a2c2e] relative overflow-hidden">
                <AnimatedChart />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-[#111113]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-[#38FE60] text-[#111113] px-4 md:px-6 py-1.5 md:py-2 rounded-full font-normal text-xs md:text-sm mb-6 md:mb-8">
              Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-3 md:mb-4 px-4">
              Get Access To The
              <br />
              <span className="text-[#38FE60]">KiteKraken Signals Toolkit</span>
            </h2>
            <p className="text-[#B5B5B5] text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-4">
              Explore our premium pricing options—transparent, straightforward, and absolutely no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-[rgb(26,28,30)] border rounded-2xl p-8 relative transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[rgb(55,255,97)] ${
                  plan.popular ? 'border-[rgb(55,255,97)] shadow-[0_0_25px_rgba(55,255,97,0.2)]' : 'border-[rgba(255,255,255,0.1)]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[rgb(55,255,97)] text-[rgb(17,17,19)] px-4 py-1 rounded-full text-xs font-normal">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-normal text-white mb-2">{plan.name}</h3>
                  <p className="text-[rgb(161,161,170)] text-sm mb-6">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-3xl font-normal text-[rgb(161,161,170)] line-through">
                      ${plan.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl text-[rgb(55,255,97)]">${plan.price}</span>
                    <span className="text-[rgb(161,161,170)] text-base">/{plan.duration}</span>
                  </div>
                  <div className="mt-3">
                    <span className="inline-block bg-[rgba(55,255,97,0.15)] text-[rgb(55,255,97)] px-3 py-1 rounded-full text-xs font-medium">
                      Save ${plan.originalPrice - plan.price}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-[rgb(55,255,97)] flex-shrink-0 mt-0.5" />
                      <span className="text-[rgb(218,218,218)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => navigate('/pricing')}
                  className={`w-full py-6 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-[rgb(55,255,97)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] hover:scale-105 hover:shadow-[0_8px_25px_rgba(55,255,97,0.3)]'
                      : 'bg-[rgba(55,255,97,0.1)] text-[rgb(55,255,97)] border border-[rgb(55,255,97)] hover:bg-[rgb(55,255,97)] hover:text-[rgb(17,17,19)]'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* FAQ Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-[#111113]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-3 md:mb-4 px-4">
              Answers to your most
              <br />
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
            <details className="group bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer text-white font-semibold text-base md:text-lg hover:text-[#38FE60] transition-colors">
                <span>How can I automate Bitcoin options (FnO)?</span>
                <span className="text-xl md:text-2xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-[#B5B5B5] text-sm md:text-base leading-relaxed">
                Kitekraken.AI is specifically engineered for Bitcoin Options. Our software handles complex Greeks-based strategies and rule-based automation, allowing you to manage volatility 24/7 without manual intervention. Connect your Delta Exchange India account and enjoy auto trading (your account, your profit).
              </div>
            </details>

            <details className="group bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer text-white font-semibold text-base md:text-lg hover:text-[#38FE60] transition-colors">
                <span>What is Kitekraken.AI exactly?</span>
                <span className="text-xl md:text-2xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-[#B5B5B5] text-sm md:text-base leading-relaxed">
                We are a software development company that provides automation tools for traders. Our software lets you connect strategies (TradingView) to various exchanges (your account) to execute trades automatically across Forex, stocks, commodities, and crypto.
              </div>
            </details>

            <details className="group bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer text-white font-semibold text-base md:text-lg hover:text-[#38FE60] transition-colors">
                <span>Is Kitekraken.AI a broker?</span>
                <span className="text-xl md:text-2xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-[#B5B5B5] text-sm md:text-base leading-relaxed">
                No. Kitekraken.AI is a service provider. We do not take or hold your funds. You connect your existing brokerage or exchange accounts to our platform via secure API keys.
              </div>
            </details>

            <details className="group bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer text-white font-semibold text-base md:text-lg hover:text-[#38FE60] transition-colors">
                <span>Does Kitekraken.AI manage my money?</span>
                <span className="text-xl md:text-2xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-[#B5B5B5] text-sm md:text-base leading-relaxed">
                No. We are a non-custodial software provider. Your funds stay in your own brokerage or exchange account (for example, Delta Exchange India, Binance, Interactive Brokers). We only send execution signals via API.
              </div>
            </details>

            <details className="group bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer text-white font-semibold text-base md:text-lg hover:text-[#38FE60] transition-colors">
                <span>Do I need coding skills to use Kitekraken.AI?</span>
                <span className="text-xl md:text-2xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-[#B5B5B5] text-sm md:text-base leading-relaxed">
                Not necessarily. While we support advanced algorithmic execution, our TradingView integration is designed to be user-friendly, allowing you to automate trades using simple webhooks without writing complex code.
              </div>
            </details>

            <details className="group bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer text-white font-semibold text-base md:text-lg hover:text-[#38FE60] transition-colors">
                <span>Is my API key safe with you?</span>
                <span className="text-xl md:text-2xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-[#B5B5B5] text-sm md:text-base leading-relaxed">
                Yes. We use industry-standard encryption to protect your data. We also recommend enabling withdrawal restrictions on your API keys so the software can only place trades and cannot withdraw funds.
              </div>
            </details>

            <details className="group bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer text-white font-semibold text-base md:text-lg hover:text-[#38FE60] transition-colors">
                <span>Why is my browser or Google flagging trading content?</span>
                <span className="text-xl md:text-2xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-[#B5B5B5] text-sm md:text-base leading-relaxed">
                Financial software is highly regulated. To ensure a safe environment, we follow Google’s Financial Products and Services policies. We focus on software and education and never promise guaranteed returns.
              </div>
            </details>

            <details className="group bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer text-white font-semibold text-base md:text-lg hover:text-[#38FE60] transition-colors">
                <span>Which assets can I automate through Kitekraken.AI?</span>
                <span className="text-xl md:text-2xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-[#B5B5B5] text-sm md:text-base leading-relaxed">
                Our software is built for versatility. You can automate strategies for crypto (Bitcoin options on Delta Exchange India, and crypto futures on selected exchanges through TradingView), traditional markets (stocks, forex, and commodities), and any Kitekraken indicator or strategy that can generate a TradingView alert.
              </div>
            </details>

            <details className="group bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer text-white font-semibold text-base md:text-lg hover:text-[#38FE60] transition-colors">
                <span>How does &quot;Rule-Based Trading&quot; help me?</span>
                <span className="text-xl md:text-2xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-[#B5B5B5] text-sm md:text-base leading-relaxed">
                Rule-based automation removes emotional bias. The strategy executes exactly when parameters are met, helping you stay disciplined even in highly volatile markets.
              </div>
            </details>

            <details className="group bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer text-white font-semibold text-base md:text-lg hover:text-[#38FE60] transition-colors">
                <span>How does the TradingView integration work?</span>
                <span className="text-xl md:text-2xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-[#B5B5B5] text-sm md:text-base leading-relaxed">
                Purchase any Kitekraken.AI TradingView indicator or strategy plan, then use TradingView’s webhook feature to automate trading in your linked exchange (for example, Delta Exchange India, Binance) with low-latency execution.
              </div>
            </details>

            <details className="group bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer text-white font-semibold text-base md:text-lg hover:text-[#38FE60] transition-colors">
                <span>How do I get help if my bot isn&#39;t firing?</span>
                <span className="text-xl md:text-2xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-[#B5B5B5] text-sm md:text-base leading-relaxed">
                We provide 24/7 technical support through our help desk and community channels like Discord and Telegram. You can also access documentation for step-by-step setup guides. For live support on Telegram: <a href="https://t.me/kitekraken" target="_blank" rel="noopener noreferrer" className="text-[#38FE60] underline">https://t.me/kitekraken</a>.
              </div>
            </details>

            <details className="group bg-[#1a1c1e] border border-[#2a2c2e] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer text-white font-semibold text-base md:text-lg hover:text-[#38FE60] transition-colors">
                <span>Is there a free trial?</span>
                <span className="text-xl md:text-2xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-[#B5B5B5] text-sm md:text-base leading-relaxed">
                We offer various tiers depending on your selected plan. Please visit our <a href="/pricing" className="text-[#38FE60] underline">Pricing Page</a> for details, or reach out on Telegram: <a href="https://t.me/kitekraken" target="_blank" rel="noopener noreferrer" className="text-[#38FE60] underline">https://t.me/kitekraken</a>.
              </div>
            </details>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Home;
