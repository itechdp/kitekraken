import React, { useState } from 'react';
import { Mail, MessageCircle, Clock, Send, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: 'general',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[rgb(26,28,30)] to-[rgb(17,17,19)]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-normal text-white mb-6">
            Get in <span className="text-[rgb(55,255,97)]">Touch</span>
          </h1>
          <p className="text-xl text-[rgb(218,218,218)] max-w-3xl mx-auto">
            Have a question? We're here to help. Reach out to our support team and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {/* Telegram */}
            <a 
              href="https://t.me/bullexailabs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 text-center hover:-translate-y-2 transition-all hover:border-[rgb(55,255,97)]"
            >
              <div className="w-14 h-14 bg-[rgba(55,255,97,0.1)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Send className="w-7 h-7 text-[rgb(55,255,97)]" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3">Telegram</h3>
              <p className="text-[rgb(161,161,170)] text-sm mb-4">
                Join our community
              </p>
              <p className="text-[rgb(55,255,97)] font-medium text-sm">
                Join Now →
              </p>
            </a>

            {/* Discord */}
            <a 
              href="https://discord.gg/shdwXNAX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 text-center hover:-translate-y-2 transition-all hover:border-[rgb(55,255,97)]"
            >
              <div className="w-14 h-14 bg-[rgba(55,255,97,0.1)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <MessageCircle className="w-7 h-7 text-[rgb(55,255,97)]" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3">Discord</h3>
              <p className="text-[rgb(161,161,170)] text-sm mb-4">
                Chat with community
              </p>
              <p className="text-[rgb(55,255,97)] font-medium text-sm">
                Join Server →
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:support@bullexai.com"
              className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 text-center hover:-translate-y-2 transition-all hover:border-[rgb(55,255,97)]"
            >
              <div className="w-14 h-14 bg-[rgba(55,255,97,0.1)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Mail className="w-7 h-7 text-[rgb(55,255,97)]" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3">Email Us</h3>
              <p className="text-[rgb(161,161,170)] text-sm mb-4">
                Send us an email
              </p>
              <p className="text-[rgb(55,255,97)] font-medium text-sm">
                support@bullexai.com
              </p>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-normal text-white mb-3">Follow Us on Social Media</h2>
              <p className="text-[rgb(161,161,170)]">
                Stay updated with the latest news and insights
              </p>
            </div>
            
            <div className="flex justify-center items-center space-x-4 flex-wrap gap-4">
              <a
                href="https://x.com/BullexAiLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[rgb(38,40,42)] hover:bg-[rgb(55,255,97)] rounded-xl flex items-center justify-center text-[rgb(161,161,170)] hover:text-[rgb(17,17,19)] transition-all hover:scale-110"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61583845973970"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[rgb(38,40,42)] hover:bg-[rgb(55,255,97)] rounded-xl flex items-center justify-center text-[rgb(161,161,170)] hover:text-[rgb(17,17,19)] transition-all hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/bullexailabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[rgb(38,40,42)] hover:bg-[rgb(55,255,97)] rounded-xl flex items-center justify-center text-[rgb(161,161,170)] hover:text-[rgb(17,17,19)] transition-all hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@bullexailabs/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[rgb(38,40,42)] hover:bg-[rgb(55,255,97)] rounded-xl flex items-center justify-center text-[rgb(161,161,170)] hover:text-[rgb(17,17,19)] transition-all hover:scale-110"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://t.me/bullexailabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[rgb(38,40,42)] hover:bg-[rgb(55,255,97)] rounded-xl flex items-center justify-center text-[rgb(161,161,170)] hover:text-[rgb(17,17,19)] transition-all hover:scale-110"
              >
                <Send className="w-6 h-6" />
              </a>
              <a
                href="https://discord.gg/shdwXNAX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[rgb(38,40,42)] hover:bg-[rgb(55,255,97)] rounded-xl flex items-center justify-center text-[rgb(161,161,170)] hover:text-[rgb(17,17,19)] transition-all hover:scale-110"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[rgb(26,28,30)] to-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-3xl p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-normal text-white mb-3">Send Us a Message</h2>
                <p className="text-[rgb(161,161,170)]">
                  Fill out the form below and we'll get back to you shortly
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white placeholder-[rgb(161,161,170)] focus:outline-none focus:border-[rgb(55,255,97)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white placeholder-[rgb(161,161,170)] focus:outline-none focus:border-[rgb(55,255,97)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[rgb(55,255,97)] transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white placeholder-[rgb(161,161,170)] focus:outline-none focus:border-[rgb(55,255,97)] transition-colors resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[rgb(55,255,97)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] font-semibold py-6 rounded-xl text-lg transition-all hover:scale-105 hover:shadow-[0_8px_25px_rgba(55,255,97,0.3)] flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Support Info */}
      <section className="py-20 bg-[rgb(26,28,30)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-[rgb(55,255,97)]" />
                <h3 className="text-2xl font-normal text-white">Support Hours</h3>
              </div>
              <p className="text-[rgb(218,218,218)] text-lg">
                Our world-class 24/7 support team is always available to assist you. We typically respond within 24 hours via email, and instantly via live chat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
