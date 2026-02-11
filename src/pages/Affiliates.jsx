import React from 'react';
import { DollarSign, Users, TrendingUp, Target, Check, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const Affiliates = () => {
  const affiliateFaqs = [
    {
      id: 1,
      question: 'Do I need to purchase to become an affiliate?',
      answer: 'No, you do not need to purchase to become an affiliate, but it is recommended. After 10 sales per month, you will receive free KiteKraken AI access.'
    },
    {
      id: 2,
      question: 'How do I track my sales?',
      answer: 'You will have full dashboard access to track all your sales, commissions, and performance metrics in real-time.'
    },
    {
      id: 3,
      question: 'How long does the cookie last?',
      answer: 'Our cookie tracking lasts for 90 days, giving you ample time to earn commissions from referred users.'
    },
    {
      id: 4,
      question: 'When do I get paid?',
      answer: 'Payouts are processed at the start of each month, with a 30-day hold on new sales for security purposes.'
    },
    {
      id: 5,
      question: 'Can I promote internationally?',
      answer: 'Yes! You can promote KiteKraken AI worldwide and earn commissions from international customers.'
    },
    {
      id: 6,
      question: 'What promotional materials do you provide?',
      answer: 'We provide a full suite of training materials, content templates, banners, and promotional assets to help you succeed.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[rgb(26,28,30)] to-[rgb(17,17,19)]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-normal text-white mb-6">
            Become a <span className="text-[rgb(55,255,97)]">KiteKraken AI Affiliate</span>
          </h1>
          <p className="text-xl text-[rgb(218,218,218)] max-w-3xl mx-auto mb-8">
            Build massive passive income by referring traders to KiteKraken AI. Earn up to 50% commission on every sale.
          </p>
          <Button className="bg-[rgb(55,255,97)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] font-semibold px-10 py-6 rounded-xl text-lg transition-all hover:scale-105 hover:shadow-[0_8px_25px_rgba(55,255,97,0.3)]">
            Join Affiliate Program
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-[rgb(218,218,218)]">
              Start earning in 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 text-center hover:-translate-y-2 transition-all hover:border-[rgb(55,255,97)]">
              <div className="w-16 h-16 bg-[rgba(55,255,97,0.1)] rounded-full flex items-center justify-center text-[rgb(55,255,97)] font-normal text-2xl mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-normal text-white mb-3">Sign Up</h3>
              <p className="text-[rgb(161,161,170)] text-sm">
                Join our affiliate program for free
              </p>
            </div>

            <div className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 text-center hover:-translate-y-2 transition-all hover:border-[rgb(55,255,97)]">
              <div className="w-16 h-16 bg-[rgba(55,255,97,0.1)] rounded-full flex items-center justify-center text-[rgb(55,255,97)] font-normal text-2xl mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-normal text-white mb-3">Get Your Link</h3>
              <p className="text-[rgb(161,161,170)] text-sm">
                Receive your unique referral link
              </p>
            </div>

            <div className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 text-center hover:-translate-y-2 transition-all hover:border-[rgb(55,255,97)]">
              <div className="w-16 h-16 bg-[rgba(55,255,97,0.1)] rounded-full flex items-center justify-center text-[rgb(55,255,97)] font-normal text-2xl mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-normal text-white mb-3">Share</h3>
              <p className="text-[rgb(161,161,170)] text-sm">
                Promote to your network and audience
              </p>
            </div>

            <div className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 text-center hover:-translate-y-2 transition-all hover:border-[rgb(55,255,97)]">
              <div className="w-16 h-16 bg-[rgba(55,255,97,0.1)] rounded-full flex items-center justify-center text-[rgb(55,255,97)] font-normal text-2xl mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-normal text-white mb-3">Earn</h3>
              <p className="text-[rgb(161,161,170)] text-sm">
                Receive commission on every sale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-20 bg-[rgb(26,28,30)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal text-white mb-4">
              Commission Structure
            </h2>
            <p className="text-xl text-[rgb(218,218,218)]">
              Earn more as you grow your referrals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Tier 1 */}
            <div className="bg-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 hover:-translate-y-2 transition-all hover:border-[rgb(55,255,97)] hover:shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[rgba(55,255,97,0.1)] rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-[rgb(55,255,97)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-normal text-white">Tier 1</h3>
                  <p className="text-[rgb(161,161,170)] text-sm">New Affiliates</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[rgb(55,255,97)]" />
                  <span className="text-[rgb(218,218,218)]"><span className="font-normal text-[rgb(55,255,97)]">25%</span> on KiteKraken AI Memberships</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[rgb(55,255,97)]" />
                  <span className="text-[rgb(218,218,218)]"><span className="font-normal text-[rgb(55,255,97)]">10%</span> on Coaching</span>
                </li>
              </ul>
            </div>

            {/* Tier 2 */}
            <div className="bg-gradient-to-br from-[rgb(38,40,42)] to-[rgb(26,28,30)] border-2 border-[rgb(55,255,97)] rounded-2xl p-8 hover:-translate-y-2 transition-all shadow-[0_8px_25px_rgba(55,255,97,0.2)] relative">
              <div className="absolute -top-3 right-6 bg-[rgb(55,255,97)] text-[rgb(17,17,19)] px-4 py-1 rounded-full text-xs font-normal">
                TRUSTED
              </div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[rgba(55,255,97,0.1)] rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[rgb(55,255,97)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-normal text-white">Tier 2</h3>
                  <p className="text-[rgb(161,161,170)] text-sm">3+ Referrals</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[rgb(55,255,97)]" />
                  <span className="text-[rgb(218,218,218)]"><span className="font-normal text-[rgb(55,255,97)]">50%</span> on KiteKraken AI Memberships</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[rgb(55,255,97)]" />
                  <span className="text-[rgb(218,218,218)]"><span className="font-normal text-[rgb(55,255,97)]">15%</span> on Coaching</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal text-white mb-4">
              Affiliate Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 hover:border-[rgb(55,255,97)] transition-colors">
              <DollarSign className="w-8 h-8 text-[rgb(55,255,97)] mb-4" />
              <h3 className="text-lg font-normal text-white mb-2">High Commissions</h3>
              <p className="text-[rgb(161,161,170)] text-sm">Earn commission for each sale</p>
            </div>

            <div className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 hover:border-[rgb(55,255,97)] transition-colors">
              <TrendingUp className="w-8 h-8 text-[rgb(55,255,97)] mb-4" />
              <h3 className="text-lg font-normal text-white mb-2">Passive Income</h3>
              <p className="text-[rgb(161,161,170)] text-sm">Build recurring revenue stream</p>
            </div>

            <div className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 hover:border-[rgb(55,255,97)] transition-colors">
              <Users className="w-8 h-8 text-[rgb(55,255,97)] mb-4" />
              <h3 className="text-lg font-normal text-white mb-2">Free Access</h3>
              <p className="text-[rgb(161,161,170)] text-sm">After 10 sales/month</p>
            </div>

            <div className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 hover:border-[rgb(55,255,97)] transition-colors">
              <Target className="w-8 h-8 text-[rgb(55,255,97)] mb-4" />
              <h3 className="text-lg font-normal text-white mb-2">90-Day Cookie</h3>
              <p className="text-[rgb(161,161,170)] text-sm">Extended tracking window</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[rgb(26,28,30)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {affiliateFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={`item-${faq.id}`}
                  className="bg-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-xl px-6 hover:border-[rgb(55,255,97)] transition-colors"
                >
                  <AccordionTrigger className="text-white hover:text-[rgb(55,255,97)] text-left font-semibold py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[rgb(218,218,218)] leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-[rgb(26,28,30)] to-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-3xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-normal text-white mb-4">
                Apply Now
              </h2>
              <p className="text-[rgb(218,218,218)]">
                Start earning with KiteKraken AI today
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white placeholder-[rgb(161,161,170)] focus:outline-none focus:border-[rgb(55,255,97)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white placeholder-[rgb(161,161,170)] focus:outline-none focus:border-[rgb(55,255,97)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Website or Social Media</label>
                <input
                  type="url"
                  placeholder="https://..."
                  className="w-full bg-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white placeholder-[rgb(161,161,170)] focus:outline-none focus:border-[rgb(55,255,97)] transition-colors"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[rgb(55,255,97)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] font-semibold py-6 rounded-xl text-lg transition-all hover:scale-105 hover:shadow-[0_8px_25px_rgba(55,255,97,0.3)]"
              >
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Affiliates;
