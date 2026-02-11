import React from 'react';
import { Cookie, Shield } from 'lucide-react';

/* 
 * SAFE BROWSING COMPLIANCE: Cookie Policy Page
 * Purpose: Transparency about data collection and cookie usage
 * Addresses: Privacy compliance, user consent, trust signals
 */

const CookiePolicy = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[rgb(26,28,30)] to-[rgb(17,17,19)]">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[rgba(55,255,97,0.1)] rounded-2xl mb-6">
            <Cookie className="w-8 h-8 text-[rgb(55,255,97)]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-normal text-white mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-[rgb(218,218,218)] max-w-3xl mx-auto">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-3xl p-12">
            <div className="prose prose-invert max-w-none space-y-8">
              
              <div>
                <h2 className="text-3xl font-normal text-white mb-4">1. What Are Cookies</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">2. How We Use Cookies</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed mb-4">
                  KiteKraken AI uses cookies for the following purposes:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly, including user authentication and security</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous information</li>
                  <li><strong>Functionality Cookies:</strong> Remember your preferences and settings to enhance your experience</li>
                  <li><strong>Analytics Cookies:</strong> Allow us to analyze website traffic and improve our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">3. Types of Cookies We Use</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-normal text-white mb-2">Session Cookies</h3>
                    <p className="text-[rgb(218,218,218)] leading-relaxed">
                      Temporary cookies that expire when you close your browser. These are essential for the website's core functionality.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-normal text-white mb-2">Persistent Cookies</h3>
                    <p className="text-[rgb(218,218,218)] leading-relaxed">
                      Remain on your device for a set period or until you delete them. Used to remember your preferences across sessions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-normal text-white mb-2">First-Party Cookies</h3>
                    <p className="text-[rgb(218,218,218)] leading-relaxed">
                      Set directly by KiteKraken AI to enable website functionality and remember your settings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-normal text-white mb-2">Third-Party Cookies</h3>
                    <p className="text-[rgb(218,218,218)] leading-relaxed">
                      Set by external services we use, such as analytics providers (Google Analytics) and payment processors (Stripe, PayPal).
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">4. Third-Party Services</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed mb-4">
                  We use the following third-party services that may set cookies:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> Website traffic analysis and user behavior tracking</li>
                  <li><strong>Stripe & PayPal:</strong> Secure payment processing</li>
                  <li><strong>TradingView:</strong> Charting and trading indicators integration</li>
                  <li><strong>Social Media Platforms:</strong> Social sharing and authentication features</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">5. Managing Cookies</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4">
                  <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                  <li>Opt-out tools: Use third-party opt-out mechanisms for analytics cookies</li>
                  <li>Privacy extensions: Install browser extensions that block tracking cookies</li>
                </ul>
                <p className="text-[rgb(218,218,218)] leading-relaxed mt-4">
                  Please note that blocking all cookies may impact your experience on our website and limit certain functionality.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">6. Cookie Retention</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  Different cookies have different retention periods:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4 mt-4">
                  <li>Session cookies: Deleted when you close your browser</li>
                  <li>Authentication cookies: Expire after 30 days</li>
                  <li>Preference cookies: Expire after 1 year</li>
                  <li>Analytics cookies: Expire after 2 years</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">7. Your Consent</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  By using our website, you consent to the use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your browser settings or contacting us at support@bullexai.com.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">8. Changes to This Policy</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last Modified" date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">9. Contact Us</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  If you have questions about our use of cookies, please contact us:
                </p>
                <ul className="list-none text-[rgb(218,218,218)] space-y-2 mt-4">
                  <li><strong>Email:</strong> support@bullexai.com</li>
                  <li><strong>Telegram:</strong> <a href="https://t.me/bullexailabs" className="text-[rgb(55,255,97)] hover:underline" target="_blank" rel="noopener noreferrer">@bullexailabs</a></li>
                  <li><strong>Discord:</strong> <a href="https://discord.gg/shdwXNAX" className="text-[rgb(55,255,97)] hover:underline" target="_blank" rel="noopener noreferrer">Join Server</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
