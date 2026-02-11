import React from 'react';
import { Shield, Lock } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[rgb(26,28,30)] to-[rgb(17,17,19)]">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[rgba(55,255,97,0.1)] rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-[rgb(55,255,97)]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-normal text-white mb-6">
            Privacy Policy
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
                <h2 className="text-3xl font-normal text-white mb-4">1. Information Collection</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed mb-4">
                  We collect information to provide better services to our users. The types of information we collect include:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4">
                  <li>Personal information you provide (name, email address, payment information)</li>
                  <li>Usage data and analytics</li>
                  <li>Device information and IP addresses</li>
                  <li>Communications and support inquiries</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">2. Use of Information</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4">
                  <li>Providing and maintaining our services</li>
                  <li>Processing payments and transactions</li>
                  <li>Sending important updates and notifications</li>
                  <li>Improving our website and user experience</li>
                  <li>Responding to customer support requests</li>
                  <li>Detecting and preventing fraud or abuse</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">3. Cookie Policy</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">4. Data Security</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  The security of your personal information is important to us. We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">5. Third-Party Services</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed mb-4">
                  We may employ third-party companies and services for the following purposes:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4">
                  <li>Payment processing (Stripe, PayPal)</li>
                  <li>Analytics and performance monitoring</li>
                  <li>Email communications</li>
                  <li>Customer support tools</li>
                </ul>
                <p className="text-[rgb(218,218,218)] leading-relaxed mt-4">
                  These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">6. User Rights</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4">
                  <li>Access and review your personal data</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Export your data in a portable format</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">7. Children's Privacy</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">8. Changes to Privacy Policy</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">9. Contact Information</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="text-[rgb(55,255,97)] font-medium mt-2">
                  support@bullexai.com
                </p>
              </div>

              <div className="bg-[rgb(38,40,42)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 mt-8">
                <div className="flex items-start space-x-4">
                  <Lock className="w-6 h-6 text-[rgb(55,255,97)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-normal text-white mb-2">Your Data is Protected</h3>
                    <p className="text-[rgb(218,218,218)] text-sm leading-relaxed">
                      We use enterprise-grade encryption and security measures to protect your personal information. All payments are processed through PCI DSS Level 1 certified providers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
