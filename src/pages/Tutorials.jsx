import React from 'react';
import { Play, BookOpen, Users, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { tutorials } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const Tutorials = () => {
  const navigate = useNavigate();
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Beginner':
        return <BookOpen className="w-6 h-6" />;
      case 'Advanced':
        return <TrendingUp className="w-6 h-6" />;
      case 'Community':
        return <Users className="w-6 h-6" />;
      default:
        return <Play className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Beginner':
        return 'bg-green-500/10 text-green-500';
      case 'Advanced':
        return 'bg-purple-500/10 text-purple-500';
      case 'Community':
        return 'bg-blue-500/10 text-blue-500';
      default:
        return 'bg-[rgba(55,255,97,0.1)] text-[rgb(55,255,97)]';
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[rgb(26,28,30)] to-[rgb(17,17,19)]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-normal text-white mb-6">
            Tutorials & <span className="text-[rgb(55,255,97)]">Guides</span>
          </h1>
          <p className="text-xl text-[rgb(218,218,218)] max-w-3xl mx-auto">
            Master KiteKraken AI with our comprehensive video tutorials and step-by-step guides. From beginner to advanced strategies, we've got you covered.
          </p>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:border-[rgb(55,255,97)] hover:shadow-2xl group"
              >
                {/* Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-[rgb(38,40,42)] to-[rgb(26,28,30)] flex items-center justify-center">
                  <div className="w-16 h-16 bg-[rgba(55,255,97,0.1)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-[rgb(55,255,97)]" />
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium">
                    {tutorial.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${getCategoryColor(tutorial.category)}`}>
                      {tutorial.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-normal text-white mb-2 group-hover:text-[rgb(55,255,97)] transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-[rgb(161,161,170)] text-sm leading-relaxed mb-4">
                    {tutorial.description}
                  </p>
                  <Button className="w-full bg-[rgba(55,255,97,0.1)] text-[rgb(55,255,97)] hover:bg-[rgb(55,255,97)] hover:text-[rgb(17,17,19)] border border-[rgb(55,255,97)] rounded-xl transition-all">
                    Watch Tutorial
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-[rgb(26,28,30)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-normal text-white mb-4">
              Need More Help?
            </h2>
            <p className="text-xl text-[rgb(218,218,218)]">
              Access additional resources and support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Telegram Community */}
            <div className="bg-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 text-center hover:-translate-y-2 transition-all">
              <div className="w-14 h-14 bg-[rgba(55,255,97,0.1)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="w-7 h-7 text-[rgb(55,255,97)]" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3">Telegram Community</h3>
              <p className="text-[rgb(161,161,170)] mb-6 text-sm">
                Join our VIP Telegram with 30+ expert analysts
              </p>
              <a
                href="https://t.me/bullexailabs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[rgb(55,255,97)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] rounded-xl w-full">
                  Join Telegram
                </Button>
              </a>
            </div>

            {/* Documentation */}
            <div className="bg-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 text-center hover:-translate-y-2 transition-all">
              <div className="w-14 h-14 bg-[rgba(55,255,97,0.1)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="w-7 h-7 text-[rgb(55,255,97)]" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3">Documentation</h3>
              <p className="text-[rgb(161,161,170)] mb-6 text-sm">
                Comprehensive guides and API references
              </p>
              <Button
                onClick={() => navigate('/documentation')}
                className="bg-transparent border-2 border-[rgb(55,255,97)] text-[rgb(55,255,97)] hover:bg-[rgba(55,255,97,0.1)] rounded-xl w-full"
              >
                View Docs
              </Button>
            </div>

            {/* Live Support */}
            <div className="bg-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 text-center hover:-translate-y-2 transition-all">
              <div className="w-14 h-14 bg-[rgba(55,255,97,0.1)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Play className="w-7 h-7 text-[rgb(55,255,97)]" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3">24/7 Support</h3>
              <p className="text-[rgb(161,161,170)] mb-6 text-sm">
                Get instant help via live chat or email
              </p>
              <Button
                onClick={() => navigate('/contact')}
                className="bg-transparent border-2 border-[rgb(55,255,97)] text-[rgb(55,255,97)] hover:bg-[rgba(55,255,97,0.1)] rounded-xl w-full"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutorials;
