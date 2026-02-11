import React from 'react';
import { Check, Zap, Crown, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { pricingPlans } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  const features = [
    'KiteKraken AI Premium Suite (all indicators)',
    'Real-time signals & alerts',
    'Candle coloring & dashboard analytics',
    'Automated alerts & customizable settings',
    'Support and resistance levels',
    'Institutional activity insights',
    'VIP Telegram access with 30+ expert analysts',
    'Thousands of real-time alerts across every market',
    'Video tutorials & courses',
    '24/7 support'
  ];

  const getBadgeIcon = (plan) => {
    if (plan.badge === 'Most Popular') return <Zap className="w-4 h-4" />;
    if (plan.badge === 'Best Value') return <Crown className="w-4 h-4" />;
    return null;
  };

  return (
    <div className="min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[rgb(26,28,30)] to-[rgb(17,17,19)]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-normal text-white mb-6">
            Choose Your <span className="text-[rgb(55,255,97)]">Plan</span>
          </h1>
          <p className="text-xl text-[rgb(218,218,218)] max-w-3xl mx-auto">
            All plans include full access to KiteKraken AI indicators, VIP Telegram community, and 24/7 support
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-[rgb(26,28,30)] border rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-[rgb(55,255,97)] shadow-[0_8px_25px_rgba(55,255,97,0.2)] scale-105'
                    : 'border-[rgba(255,255,255,0.1)] hover:border-[rgb(55,255,97)]'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[rgb(55,255,97)] text-[rgb(17,17,19)] px-4 py-1 rounded-full text-xs font-normal flex items-center space-x-1">
                      {getBadgeIcon(plan)}
                      <span>{plan.badge}</span>
                    </div>
                  </div>
                )}

                {/* Plan Details */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-normal text-white mb-2">{plan.name}</h3>
                  <p className="text-[rgb(161,161,170)] text-sm mb-6">{plan.description}</p>
                  
                  {/* Price with Strikethrough */}
                  <div className="mb-2">
                    <span className="text-3xl font-normal text-[rgb(161,161,170)] line-through">
                      ${plan.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-6xl text-[rgb(55,255,97)]">${plan.price}</span>
                    {plan.duration !== 'lifetime' && (
                      <span className="text-[rgb(161,161,170)] text-base">/{plan.duration}</span>
                    )}
                  </div>
                  
                  {/* Savings Badge */}
                  <div className="mt-3">
                    <span className="inline-block bg-[rgba(55,255,97,0.15)] text-[rgb(55,255,97)] px-3 py-1 rounded-full text-xs font-medium">
                      Save ${plan.originalPrice - plan.price}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3 text-sm">
                      <Check className="w-5 h-5 text-[rgb(55,255,97)] flex-shrink-0 mt-0.5" />
                      <span className="text-[rgb(218,218,218)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => console.log(`Selected ${plan.name}`)}
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

      {/* Features List */}
      <section className="py-20 bg-[rgb(26,28,30)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[rgba(55,255,97,0.1)] rounded-xl mb-4">
                <Sparkles className="w-7 h-7 text-[rgb(55,255,97)]" />
              </div>
              <h2 className="text-4xl font-normal text-white mb-4">
                What's Included With All Memberships
              </h2>
              <p className="text-xl text-[rgb(218,218,218)]">
                Every plan includes access to our complete suite of trading tools
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-xl p-4 flex items-center space-x-3 hover:border-[rgb(55,255,97)] transition-colors"
                >
                  <Check className="w-5 h-5 text-[rgb(55,255,97)] flex-shrink-0" />
                  <span className="text-[rgb(218,218,218)] text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[rgb(26,28,30)] to-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-3xl p-12">
            <h2 className="text-3xl font-normal text-white mb-8 text-center">
              Flexible & Secure Payment Options
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-[rgb(55,255,97)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Flexible Memberships</h3>
                    <p className="text-[rgb(161,161,170)] text-sm">No hidden fees or surprise charges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-[rgb(55,255,97)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Cancel Anytime</h3>
                    <p className="text-[rgb(161,161,170)] text-sm">No cancellation charges or penalties</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-[rgb(55,255,97)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Free Account Hold</h3>
                    <p className="text-[rgb(161,161,170)] text-sm">Pause your subscription when needed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-[rgb(55,255,97)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Secure Processing</h3>
                    <p className="text-[rgb(161,161,170)] text-sm">Via Stripe & PayPal with PCI compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-6">
            Ready to start trading smarter?
          </h2>
          <p className="text-xl text-[rgb(218,218,218)] mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders using KiteKraken AI
          </p>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[rgb(55,255,97)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] font-semibold px-10 py-6 rounded-xl text-lg transition-all hover:scale-105 hover:shadow-[0_8px_25px_rgba(55,255,97,0.3)]"
          >
            Choose Your Plan
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
