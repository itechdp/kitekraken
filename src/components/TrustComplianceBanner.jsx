import React from 'react';
import { ShieldCheck, AlertTriangle, Lock } from 'lucide-react';

const TrustComplianceBanner = () => {
  return (
    <div className="bg-gradient-to-b from-[rgb(26,28,30)] to-[rgb(17,17,19)] border-y border-[rgba(255,255,255,0.1)] py-12 md:py-16 mt-24 md:mt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 bg-[rgb(38,40,42)] px-4 py-2 rounded-full mb-4">
              <ShieldCheck className="w-5 h-5 text-[rgb(55,255,97)]" />
              <span className="text-[rgb(55,255,97)] font-semibold text-sm">Trust & Compliance</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Important Disclosure
            </h2>
          </div>

          {/* Disclosure Content */}
          <div className="space-y-6">
            {/* SaaS Provider Notice */}
            <div className="bg-[rgb(38,40,42)] rounded-xl p-6 md:p-8 border border-[rgba(255,255,255,0.1)]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[rgba(55,255,97,0.1)] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-[rgb(55,255,97)]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg md:text-xl mb-3">
                    Software-as-a-Service Provider
                  </h3>
                  <p className="text-[rgb(161,161,170)] text-sm md:text-base leading-relaxed">
                    <strong className="text-white">Kitekraken.ai is a Software-as-a-Service (SaaS) provider.</strong> We offer automated execution tools and educational content for traders. <span className="text-[rgb(55,255,97)] font-medium">We do not provide financial advice, managed accounts, or guaranteed profit signals.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Risk Warning */}
            <div className="bg-[rgb(38,40,42)] rounded-xl p-6 md:p-8 border border-[rgba(255,255,97,0.3)]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[rgba(255,255,97,0.1)] flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-[rgb(255,255,97)]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[rgb(255,255,97)] font-semibold text-lg md:text-xl mb-3">
                    Risk Warning
                  </h3>
                  <p className="text-[rgb(161,161,170)] text-sm md:text-base leading-relaxed">
                    <strong className="text-white">Trading in Forex, Stocks, Crypto, and Commodities involves significant risk of loss and is not suitable for all investors.</strong> Please ensure you fully understand the risks involved before using automation software. <span className="text-[rgb(55,255,97)] font-medium">Kitekraken.ai does not have access to your funds; all capital remains in your personal exchange account.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Non-Custodial Security */}
            <div className="bg-gradient-to-br from-[rgb(38,40,42)] to-[rgb(28,30,32)] rounded-xl p-6 md:p-8 border border-[rgba(55,255,97,0.2)]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[rgba(55,255,97,0.1)] flex items-center justify-center">
                    <Lock className="w-5 h-5 md:w-6 md:h-6 text-[rgb(55,255,97)]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[rgb(55,255,97)] font-semibold text-lg md:text-xl mb-3">
                    Non-Custodial: Your Keys, Your Crypto
                  </h3>
                  <p className="text-[rgb(161,161,170)] text-sm md:text-base leading-relaxed">
                    <strong className="text-white">We never touch your money.</strong> Kitekraken.ai operates exclusively through read-only or trade-only API connections. Your funds remain 100% in your control on your chosen exchange. We cannot withdraw, transfer, or access your capital at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-8 text-center">
            <p className="text-xs md:text-sm text-[rgb(161,161,170)]">
              By using our platform, you acknowledge that you have read and understood these disclosures. 
              Please review our <a href="/terms" className="text-[rgb(55,255,97)] hover:underline">Terms & Conditions</a> and{' '}
              <a href="/risk-disclaimer" className="text-[rgb(55,255,97)] hover:underline">Risk Disclaimer</a> for complete details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustComplianceBanner;
