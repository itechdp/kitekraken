import React from 'react';
import { FileText, Shield } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[rgb(26,28,30)] to-[rgb(17,17,19)]">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[rgba(55,255,97,0.1)] rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-[rgb(55,255,97)]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-normal text-white mb-6">
            Terms & Conditions
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
                <h2 className="text-3xl font-normal text-white mb-4">1. Introduction & Acceptance of Terms</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  Welcome to KiteKraken AI. By accessing and using our website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">2. Use of Website</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed mb-4">
                  You may use our website and services only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4">
                  <li>Use the website in any way that violates any applicable law or regulation</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Interfere with or disrupt the website or servers</li>
                  <li>Use automated systems to access the website without our permission</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">3. Intellectual Property Rights</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  All content, features, and functionality on our website, including but not limited to text, graphics, logos, and software, are the exclusive property of KiteKraken AI and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">4. User Content & Comments</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  By submitting content to our website, you grant KiteKraken AI a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute such content. You represent that you own or have the necessary rights to the content you submit.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">5. Prohibited Activities</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed mb-4">
                  You may not use our website for any of the following purposes:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4">
                  <li>Fraudulent or illegal activities</li>
                  <li>Distributing malware or harmful code</li>
                  <li>Reverse engineering our software or services</li>
                  <li>Reselling or redistributing our services without authorization</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">6. Liability Disclaimer</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  KiteKraken AI provides trading indicators and educational content. We do not provide financial advice, and our services should not be considered as such. Trading involves significant risk, and past performance does not guarantee future results. You are solely responsible for your trading decisions.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">7. Links to Other Websites</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites. We recommend reviewing their terms and policies before engaging with them.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">8. Modifications to Terms</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">9. Governing Law</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which KiteKraken AI operates, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">10. Contact Information</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <p className="text-[rgb(55,255,97)] font-medium mt-2">
                  support@bullexai.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
