import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      title: "All in one and amazing tool",
      text: "All in one and amazing tool. I was watching Elite Algo videos on YouTube and Instagram about 3 months. I started today by purchasing 3 months account. I'm completely zero on trading markets. Today's results was amazing for me 👉4 trades 4 wins! Thanks Elite signals community for their hardworking and honesty...",
      author: "Ali Reza",
      initials: "AR"
    },
    {
      id: 2,
      title: "5 days in and I'm in PROFIT",
      text: "5 days in and I'm already seeing profit! I've been trading since 2019 but in and out of groups as they were more focused on recruiting instead of helping the traders.... Elite Algo focuses on indicators to help read the charts for better analyzing... I've never seen this much blue un-assisted in my MT4...",
      author: "Jana Schulz",
      initials: "JS"
    },
    {
      id: 3,
      title: "Gold Standard.. i love it",
      text: "My trading journey started the hard way; I made all the mistakes a new trader could possible make, and blew 2 accounts due to my lack of knowledge and experience. After trying more indicators that I can remember, I was fortunate to find Elite Algo. This is an end-to-end all round amaz...",
      author: "John K Heinz",
      initials: "JH"
    },
    {
      id: 4,
      title: "EliteAlgo is a machine...",
      text: "EliteAlgo it's a good machine learning algorithm that shows the best buys and the best sell. I make profit in the last 2 weeks also EliteAlgo give us access to 32 analytics over all markets. They also have signals from 20 different analysts so you can trade, stocks, forex, indices, futures, and XAUUSD!!",
      author: "Maroun Attieh",
      initials: "MA"
    },
    {
      id: 5,
      title: "This indicator is like a light...",
      text: "This indicator is like a light which is shining in the darkness, respectively the trading aspect. For most it can be very challenging to trade on the market. This indicator has helped me focus on my take profits and stop loss management with a more disciplined, risk-managed approach. I...",
      author: "Paun Theodor",
      initials: "PT"
    },
    {
      id: 6,
      title: "I love this software...",
      text: "I love this software it gives me great confidence in my trades and helps me make better decisions. I have been using it for a few months now and I am very happy with the results. The support team is also very helpful and responsive to any questions I have.",
      author: "Sarah Miller",
      initials: "SM"
    },
    {
      id: 7,
      title: "Best trading tool I've used",
      text: "Best trading tool I've used so far. The signals are accurate and the community is very supportive. I've been able to make consistent profits since I started using this platform. Highly recommend to anyone serious about trading.",
      author: "Mike Johnson",
      initials: "MJ"
    },
    {
      id: 8,
      title: "Game changer for my trading",
      text: "This has been a game changer for my trading journey. The accuracy of signals and the support from the community is unmatched. I've tried many platforms before, but none come close to what KiteKraken AI offers. Absolutely worth every penny!",
      author: "David Lee",
      initials: "DL"
    },
    {
      id: 9,
      title: "Incredible accuracy and support",
      text: "The accuracy of the indicators is incredible. I've been profitable 8 out of 10 trades using this system. The VIP Telegram group is very active and the analysts are always there to help. This is the real deal!",
      author: "Emma Chen",
      initials: "EC"
    },
    {
      id: 10,
      title: "Finally a system that works",
      text: "After years of struggling with trading, I finally found a system that actually works. The AI is incredibly smart and the signals are on point. My account has grown 45% in just 2 months. Thank you KiteKraken AI!",
      author: "Robert Garcia",
      initials: "RG"
    },
    {
      id: 11,
      title: "Professional grade platform",
      text: "This is a professional grade platform with institutional-level tools. The backtesting feature alone is worth the subscription. I use it across forex, crypto, and stocks. Excellent value for money.",
      author: "Lisa Wang",
      initials: "LW"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-32 bg-[#111113] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-3 md:mb-4">
            <span className="text-[#38FE60]">TRUSTED BY 66,000+ TRADERS</span>
          </h2>
          <p className="text-[#B5B5B5] text-sm md:text-base lg:text-lg">
            <span className="font-normal text-white italic">Verified</span> reviews from <span className="font-normal text-white italic">REAL</span> members.
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Carousel */}
      <div className="relative">
        <div className="flex animate-scroll-testimonials gap-6">
          {/* First set of testimonials */}
          {testimonials.map((testimonial) => (
            <div key={`first-${testimonial.id}`} className="flex-shrink-0 w-[350px] md:w-[400px] bg-white rounded-2xl p-6 shadow-lg">
              <div className="mb-4">
                <h3 className="text-black font-semibold text-lg mb-3">"{testimonial.title}"</h3>
                <div className="flex gap-1 mb-3">
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {testimonial.text} <span className="text-gray-900 font-medium cursor-pointer">Read more on Trustpilot</span>
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#38FE60] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">{testimonial.initials}</span>
                </div>
                <span className="text-black font-semibold text-sm">{testimonial.author}</span>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {testimonials.map((testimonial) => (
            <div key={`second-${testimonial.id}`} className="flex-shrink-0 w-[350px] md:w-[400px] bg-white rounded-2xl p-6 shadow-lg">
              <div className="mb-4">
                <h3 className="text-black font-semibold text-lg mb-3">"{testimonial.title}"</h3>
                <div className="flex gap-1 mb-3">
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {testimonial.text} <span className="text-gray-900 font-medium cursor-pointer">Read more on Trustpilot</span>
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#38FE60] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">{testimonial.initials}</span>
                </div>
                <span className="text-black font-semibold text-sm">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
