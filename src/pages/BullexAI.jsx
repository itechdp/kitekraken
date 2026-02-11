import React from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const BullexAI = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <img src="/trustpilot.webp" alt="Trustpilot" className="h-12 md:h-16 lg:h-20" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal mb-8 leading-tight">
              Automate Your
              <br />
              Trades with <span className="text-[#c5ff01]">KiteKraken AI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto">
              The <span className="text-white">next generation</span> of fully automated, algorithmic trading is here.
              <br />
              <span className="text-[#c5ff01]">KiteKraken AI Pro Scalper is designed to excel in 2025 Market Conditions</span>
            </p>
          </div>

          {/* Product Box */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black border-4 border-[#c5ff01] rounded-3xl p-12 shadow-2xl">
                <div className="text-center">
                  <h2 className="text-6xl font-normal text-[#c5ff01] mb-4">KiteKraken AI</h2>
                  <div className="space-y-2 text-left">
                    {/* <p className="text-lg">● METATRADER 5 VERSION</p> */}
                    {/* <p className="text-lg">● METATRADER 4 VERSION</p> */}
                    <p className="text-lg">● DYNAMIC TRADING LOGIC</p>
                    <p className="text-lg">● RISK MANAGEMENT TOOLS</p>
                    <p className="text-lg">● 24/7 RAPID SUPPORT</p>
                    <p className="text-lg">● PROP FIRM COMPATIBLE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Logos Section */}
      <section className="py-12 bg-white border-y border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-black text-xl mb-8">
            The ultimate trading toolkits trusted by 60,000+ traders
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll-fast">
            {/* First set of logos */}
            <div className="flex items-center justify-around min-w-max space-x-24 md:space-x-32 lg:space-x-40 px-12 md:px-16">
              <img src="/businessinsider.webp" alt="Business Insider" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px', filter: 'invert(1)' }} />
              <img src="/marketwatch.webp" alt="MarketWatch" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px', filter: 'invert(1)' }} />
              <img src="/yahoo.webp" alt="Yahoo Finance" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px', filter: 'invert(1)' }} />
              <img src="/barchart.webp" alt="Barchart" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px', filter: 'invert(1)' }} />
              <img src="/forbes.webp" alt="Forbes" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px', filter: 'invert(1)' }} />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center justify-around min-w-max space-x-24 md:space-x-32 lg:space-x-40 px-12 md:px-16">
              <img src="/businessinsider.webp" alt="Business Insider" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px', filter: 'invert(1)' }} />
              <img src="/marketwatch.webp" alt="MarketWatch" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px', filter: 'invert(1)' }} />
              <img src="/yahoo.webp" alt="Yahoo Finance" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px', filter: 'invert(1)' }} />
              <img src="/barchart.webp" alt="Barchart" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px', filter: 'invert(1)' }} />
              <img src="/forbes.webp" alt="Forbes" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px', filter: 'invert(1)' }} />
            </div>
            {/* Third set for extra smoothness */}
            <div className="flex items-center justify-around min-w-max space-x-24 md:space-x-32 lg:space-x-40 px-12 md:px-16">
              <img src="/businessinsider.webp" alt="Business Insider" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px', filter: 'invert(1)' }} />
              <img src="/marketwatch.webp" alt="MarketWatch" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px', filter: 'invert(1)' }} />
              <img src="/yahoo.webp" alt="Yahoo Finance" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px', filter: 'invert(1)' }} />
              <img src="/barchart.webp" alt="Barchart" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px', filter: 'invert(1)' }} />
              <img src="/forbes.webp" alt="Forbes" className="h-8 md:h-10 lg:h-12 w-auto object-contain" style={{ minWidth: '120px', filter: 'invert(1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Results & Experiences Section */}
      <section className="py-20 bg-black overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-16">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Results & Experiences
            </h2>
            <p className="text-xl text-gray-300">
              Results that will have you shouting from the rooftops.
              <br />
              <span className="text-[#c5ff01]">KiteKraken AI is that game-changer.</span>
            </p>
          </div>
        </div>

        {/* Horizontal Scrolling Carousel */}
        <div className="relative mt-8">
          <div className="flex animate-scroll-testimonials gap-6">
            {/* First set of testimonials */}
            <div className="flex-shrink-0 w-[350px] md:w-[400px] bg-white rounded-2xl p-6 shadow-lg">
              <div className="mb-4">
                <h3 className="text-black font-normal text-lg mb-3">"I no longer waste hours looking at..."</h3>
                <div className="flex gap-1 mb-3">
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  I no longer waste hours looking at charts because of BullexAI, I earned $890 last month while concentrating on my 9-5 work. <span className="text-gray-900 font-normal cursor-pointer">Read more on Trustpilot</span>
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                  <span className="text-black font-normal text-sm">RS</span>
                </div>
                <div>
                  <p className="text-black font-normal text-sm">Rachel Stewart</p>
                  <p className="text-xs text-gray-500">Date of experience: December 31, 2024</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-[350px] md:w-[400px] bg-white rounded-2xl p-6 shadow-lg">
              <div className="mb-4">
                <h3 className="text-black font-normal text-lg mb-3">"I made $2,300 in my first month of..."</h3>
                <div className="flex gap-1 mb-3">
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  I made $2,300 in my first month of trading because to BullexAI's automation and Bullex Algo's accurate signals. <span className="text-gray-900 font-normal cursor-pointer">Read more on Trustpilot</span>
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-black font-normal text-sm">PB</span>
                </div>
                <div>
                  <p className="text-black font-normal text-sm">Patrick Bell</p>
                  <p className="text-xs text-gray-500">Date of experience: December 24, 2024</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-[350px] md:w-[400px] bg-white rounded-2xl p-6 shadow-lg">
              <div className="mb-4">
                <h3 className="text-black font-normal text-lg mb-3">"In my first 20 days after activating..."</h3>
                <div className="flex gap-1 mb-3">
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  In my first 20 days after activating BullexAI on my MetaTrader 5, I made $1,400. The automation is dependable and faultless! <span className="text-gray-900 font-normal cursor-pointer">Read more on Trustpilot</span>
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-300 rounded-full flex items-center justify-center">
                  <span className="text-black font-normal text-sm">RP</span>
                </div>
                <div>
                  <p className="text-black font-normal text-sm">Rebecca Peterson</p>
                  <p className="text-xs text-gray-500">Date of experience: December 20, 2024</p>
                </div>
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex-shrink-0 w-[350px] md:w-[400px] bg-white rounded-2xl p-6 shadow-lg">
              <div className="mb-4">
                <h3 className="text-black font-normal text-lg mb-3">"I no longer waste hours looking at..."</h3>
                <div className="flex gap-1 mb-3">
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  I no longer waste hours looking at charts because of BullexAI, I earned $890 last month while concentrating on my 9-5 work. <span className="text-gray-900 font-normal cursor-pointer">Read more on Trustpilot</span>
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                  <span className="text-black font-normal text-sm">RS</span>
                </div>
                <div>
                  <p className="text-black font-normal text-sm">Rachel Stewart</p>
                  <p className="text-xs text-gray-500">Date of experience: December 31, 2024</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-[350px] md:w-[400px] bg-white rounded-2xl p-6 shadow-lg">
              <div className="mb-4">
                <h3 className="text-black font-normal text-lg mb-3">"I made $2,300 in my first month of..."</h3>
                <div className="flex gap-1 mb-3">
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  I made $2,300 in my first month of trading because to BullexAI's automation and Bullex Algo's accurate signals. <span className="text-gray-900 font-normal cursor-pointer">Read more on Trustpilot</span>
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-black font-normal text-sm">PB</span>
                </div>
                <div>
                  <p className="text-black font-normal text-sm">Patrick Bell</p>
                  <p className="text-xs text-gray-500">Date of experience: December 24, 2024</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-[350px] md:w-[400px] bg-white rounded-2xl p-6 shadow-lg">
              <div className="mb-4">
                <h3 className="text-black font-normal text-lg mb-3">"In my first 20 days after activating..."</h3>
                <div className="flex gap-1 mb-3">
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  In my first 20 days after activating BullexAI on my MetaTrader 5, I made $1,400. The automation is dependable and faultless! <span className="text-gray-900 font-normal cursor-pointer">Read more on Trustpilot</span>
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-300 rounded-full flex items-center justify-center">
                  <span className="text-black font-normal text-sm">RP</span>
                </div>
                <div>
                  <p className="text-black font-normal text-sm">Rebecca Peterson</p>
                  <p className="text-xs text-gray-500">Date of experience: December 20, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remove the navigation dots section */}

      {/* KiteKraken AI Pro Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-6xl md:text-7xl font-normal mb-6">
              <span className="text-[#ffffff]">Bullex </span>
              <span className="text-[#c5ff01]"> AI</span>
            </h2>
            <div className="inline-block border-2 border-[#c5ff01] px-6 py-2 rounded-full">
              <span className="text-xl">By Application Only</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl p-6">
              <span className="text-xl">KiteKraken AI Automated Trader™</span>
              <span className="text-[#c5ff01] text-2xl">✓</span>
            </div>
            <div className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl p-6">
              <span className="text-xl">VIP Access + Analyst Signals</span>
              <span className="text-[#c5ff01] text-2xl">✓</span>
            </div>
            <div className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl p-6">
              <span className="text-xl">Dedicated Setup (1:1 Webcall)</span>
              <span className="text-[#c5ff01] text-2xl">✓</span>
            </div>
            <div className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl p-6">
              <span className="text-xl">BullexAlgo Buy & Sell Toolkit</span>
              <span className="text-[#c5ff01] text-2xl">✓</span>
            </div>
            <div className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl p-6">
              <span className="text-xl">Monthly Profit Cap</span>
              <span className="text-xl">Unlimited</span>
            </div>
            <div className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl p-6">
              <span className="text-xl">Licenses Included</span>
              <span className="text-xl">3 Licenses</span>
            </div>
            <div className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl p-6">
              <span className="text-xl">Additional Licenses</span>
              <span className="text-[#c5ff01] text-2xl">✓</span>
            </div>
            <div className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl p-6">
              <span className="text-xl">Lifetime License</span>
              <span className="text-[#c5ff01] text-2xl">✓</span>
            </div>
            <div className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl p-6">
              <span className="text-xl">Lifetime Updates</span>
              <span className="text-[#c5ff01] text-2xl">✓</span>
            </div>
          </div>
        </div>
      </section>

      {/* How To Beat The Market Section */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-normal mb-6">
                How To Beat <span className="text-blue-600">The Market</span>
              </h2>
              <h3 className="text-2xl font-normal mb-4">
                The Revolutionary Forex Trading Paradigm Used by Wealthy Traders to Consistently Dominate the Market, Day in and Day Out...
              </h3>
              <p className="text-lg mb-4">
                <span className="text-red-600">Relying on a single strategy is not enough to crack the Forex market.</span>
              </p>
              <p className="text-lg mb-4">
                While a one-strategy approach may work for a few sessions, it will eventually fail when the market presents unexpected shifts.
              </p>
              <p className="text-lg mb-4">
                <span>Instead</span>, you need to embrace a <span>'Diversified Strategy' Paradigm</span>—a powerful approach that combines proven strategies with fast, precise, and reliable technology.
              </p>
              <p className="text-lg mb-6">
                With a Diversified Strategy, you can trade across any currency market, pair, or time frame. This flexibility allows you to maximize your potential by selecting the optimal strategy for each unique market condition.
              </p>
              <h3 className="text-3xl font-normal mb-6">
                The key: Use the right trading robot.
              </h3>
              <Button
                onClick={() => navigate('/pricing')}
                className="bg-[#c5ff01] text-black hover:bg-[#b0e600] px-8 py-6 rounded-full text-lg"
              >
                Book Free Demo Call ➜
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/Illustration.webp" 
                alt="Trader" 
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute bottom-8 right-8">
                <span className="text-[#c5ff01] text-8xl font-bold">X</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maximum Reliability Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/Illustration.webp" 
                alt="Trader relaxing" 
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute bottom-8 right-8">
                <span className="text-[#c5ff01] text-8xl font-bold">X</span>
              </div>
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl font-normal mb-6">
                Maximum <span className="text-[#c5ff01]">Reliability</span>
              </h2>
              <h3 className="text-2xl font-normal mb-6">
                A Fully Dynamic Trading System Built for Maximum Reliability.
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                Most trading software focuses on a single aspect of your strategy, such as capturing small-spread opportunities or detecting market reversals.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                The issue with this single-strategy approach is that it lacks a comprehensive plan to optimize each tactic.
              </p>
              <h3 className="text-3xl font-normal mb-4">
                <span className="text-[#c5ff01]">KiteKraken AI</span> does not have this problem.
              </h3>
              <p className="text-lg text-gray-300">
                Each trading tool is seamlessly integrated into a unified strategy, ensuring every action works in harmony to deliver superior results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* High Performance Section */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-normal mb-6">
                High <span className="text-blue-600">Performance</span>
              </h2>
              <h3 className="text-2xl font-normal mb-6">
                KiteKraken AI is the All-In-One, High-Performance Forex Trading System You've Been Searching For...
              </h3>
              <p className="text-lg mb-4">
                Since KiteKraken AI can be configured to use all three or just one of its powerful trading strategies, you can trust its ability to quickly adapt to any market condition without the need for constant tweaking or optimization.
              </p>
              <p className="text-lg mb-6">
                In today's fast-moving currency market, you need a comprehensive trading system that can reliably track market movements, select the optimal strategy, and precisely set the right parameters with minimal intervention.
              </p>
              <p className="text-lg mb-8">
                We believe <span className="text-[#c5ff01]">KiteKraken AI</span> is that system.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h4 className="text-xl font-normal">SMART</h4>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h4 className="text-xl font-normal">FAST</h4>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h4 className="text-xl font-normal">EASY</h4>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/Illustration.webp" 
                alt="Trading on phone" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-normal mb-8">
            Is <span className="text-[#c5ff01]">KiteKraken AI</span> Right For You?
          </h2>
          <Button
            onClick={() => navigate('/pricing')}
            className="bg-[#c5ff01] text-black hover:bg-[#b0e600] px-10 py-7 rounded-full text-xl mb-16"
          >
            Book Free Demo Call 📞
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-normal mb-4">
              Answers to your most
              <br />
              <span className="text-white">Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            <details className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white text-xl hover:text-[#c5ff01] transition-colors">
                <span>How does KiteKraken AI work?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-6 pb-6 text-gray-300 text-lg leading-relaxed">
                KiteKraken AI uses advanced algorithmic trading strategies to assist with trade execution on your MetaTrader platform. It analyzes market conditions in real-time and adapts its approach. Trading involves substantial risk and losses are possible.
              </div>
            </details>

            <details className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white text-xl hover:text-[#c5ff01] transition-colors">
                <span>What markets & timeframes does this work with?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-6 pb-6 text-gray-300 text-lg leading-relaxed">
                KiteKraken AI works with all major forex pairs, indices, commodities, and cryptocurrencies. It's compatible with all timeframes from M1 to D1, making it suitable for scalping, day trading, and swing trading strategies.
              </div>
            </details>

            <details className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white text-xl hover:text-[#c5ff01] transition-colors">
                <span>Is this beginner friendly?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-6 pb-6 text-gray-300 text-lg leading-relaxed">
                Absolutely! KiteKraken AI is designed for traders of all levels. Our Pro package includes a dedicated 1:1 setup call where we'll configure everything for you. We also provide comprehensive tutorials and 24/7 support to ensure your success.
              </div>
            </details>

            <details className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white text-xl hover:text-[#c5ff01] transition-colors">
                <span>Does KiteKraken AI work on mobile devices?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-6 pb-6 text-gray-300 text-lg leading-relaxed">
                KiteKraken AI runs on MetaTrader 4 and MetaTrader 5, which are available on mobile devices. However, for optimal performance, we recommend running the EA on a VPS (Virtual Private Server) to ensure 24/7 uptime.
              </div>
            </details>

            <details className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white text-xl hover:text-[#c5ff01] transition-colors">
                <span>Do you have tutorials on how to use KiteKraken AI?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-6 pb-6 text-gray-300 text-lg leading-relaxed">
                Yes! We provide comprehensive video tutorials, documentation, and step-by-step guides. Plus, KiteKraken AI Pro members receive a dedicated 1:1 setup call with our team to ensure everything is configured perfectly.
              </div>
            </details>

            <details className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white text-xl hover:text-[#c5ff01] transition-colors">
                <span>Does KiteKraken AI work with MetaTrader?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-6 pb-6 text-gray-300 text-lg leading-relaxed">
                Yes! KiteKraken AI is fully compatible with both MetaTrader 4 and MetaTrader 5. Simply install the EA on your platform and you're ready to start automated trading.
              </div>
            </details>

            <details className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white text-xl hover:text-[#c5ff01] transition-colors">
                <span>Why do I need to join the discord server?</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">›</span>
              </summary>
              <div className="px-6 pb-6 text-gray-300 text-lg leading-relaxed">
                Our VIP Telegram community provides real-time updates, trading signals from 20+ professional analysts, strategy discussions, and direct support from our team. It's where our most successful traders connect and share insights.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BullexAI;
