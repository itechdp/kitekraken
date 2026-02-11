import React from 'react';
import { RefreshCcw, Shield } from 'lucide-react';

/* 
 * SAFE BROWSING COMPLIANCE: Refund & Cancellation Policy Page
 * Purpose: Provides transparency about cancellation and refund procedures
 * Addresses: Trust signals, compliance requirements, deceptive practices prevention
 */

const RefundPolicy = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[rgb(26,28,30)] to-[rgb(17,17,19)]">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[rgba(55,255,97,0.1)] rounded-2xl mb-6">
            <RefreshCcw className="w-8 h-8 text-[rgb(55,255,97)]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-normal text-white mb-6">
            Refund & Cancellation Policy
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
                <h2 className="text-3xl font-normal text-white mb-4">1. Subscription Cancellation</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed mb-4">
                  You may cancel your subscription at any time through your account settings or by contacting our support team at support@bullexai.com.
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4">
                  <li>Cancellation takes effect at the end of your current billing period</li>
                  <li>You will retain access to all features until the end of the paid period</li>
                  <li>No partial refunds are provided for unused time within a billing period</li>
                  <li>No cancellation fees or penalties are applied</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">2. Refund Eligibility</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed mb-4">
                  We offer a limited refund policy under the following conditions:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4">
                  <li><strong>7-Day Money-Back Guarantee:</strong> First-time subscribers may request a full refund within 7 days of their initial purchase</li>
                  <li>Refund requests must be submitted via email to support@bullexai.com</li>
                  <li>Refunds are processed within 5-10 business days</li>
                  <li>Recurring subscriptions beyond the first billing cycle are not eligible for refunds</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">3. Non-Refundable Items</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed mb-4">
                  The following are not eligible for refunds:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4">
                  <li>Subscriptions renewed beyond the first billing period</li>
                  <li>Access to VIP communities or exclusive content already consumed</li>
                  <li>Services rendered including trade signals, indicators, or educational content accessed</li>
                  <li>Lifetime or discounted promotional subscriptions (non-refundable after initial 7-day period)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">4. Subscription Pause/Hold</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  We offer a free account hold feature that allows you to pause your subscription for up to 90 days. During this time, your subscription will not renew and you will not be charged. Contact support to activate an account hold.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">5. How to Request a Refund</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed mb-4">
                  To request a refund:
                </p>
                <ol className="list-decimal list-inside text-[rgb(218,218,218)] space-y-2 ml-4">
                  <li>Email support@bullexai.com with "Refund Request" in the subject line</li>
                  <li>Include your account email address and order/transaction ID</li>
                  <li>Provide a brief reason for your refund request</li>
                  <li>Allow 1-2 business days for our team to review your request</li>
                </ol>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">6. Payment Disputes & Chargebacks</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  If you initiate a chargeback or payment dispute through your bank or payment provider without first contacting us, your account will be immediately suspended and all access revoked. We encourage you to contact our support team first to resolve any billing issues.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">7. Changes to This Policy</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  We reserve the right to modify this Refund & Cancellation Policy at any time. Changes will be posted on this page with an updated "Last Modified" date. Your continued use of our services after changes are posted constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">8. Contact Us</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  If you have questions about our Refund & Cancellation Policy, please contact us:
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

export default RefundPolicy;
