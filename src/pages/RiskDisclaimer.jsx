import React from 'react';
import { AlertTriangle, TrendingDown } from 'lucide-react';

/* 
 * SAFE BROWSING COMPLIANCE: Risk Disclaimer Page
 * Purpose: Clearly communicate trading risks and no-guarantee stance
 * Addresses: Deceptive profit claims, unrealistic expectations, legal compliance
 */

const RiskDisclaimer = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[rgb(26,28,30)] to-[rgb(17,17,19)]">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[rgba(255,193,7,0.1)] rounded-2xl mb-6">
            <AlertTriangle className="w-8 h-8 text-[rgb(255,193,7)]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-normal text-white mb-6">
            Risk Disclaimer
          </h1>
          <p className="text-xl text-[rgb(218,218,218)] max-w-3xl mx-auto">
            Important Information About Trading Risks
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-[rgb(26,28,30)] border-2 border-[rgb(255,193,7)] rounded-3xl p-12">
            <div className="prose prose-invert max-w-none space-y-8">
              
              {/* Critical Warning */}
              <div className="bg-[rgba(255,193,7,0.1)] border-l-4 border-[rgb(255,193,7)] p-6 rounded-r-xl">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-8 h-8 text-[rgb(255,193,7)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-normal text-[rgb(255,193,7)] mb-2">IMPORTANT NOTICE</h3>
                    <p className="text-white leading-relaxed">
                      Trading cryptocurrencies, forex, stocks, and other financial instruments involves substantial risk of loss. You should only trade with money you can afford to lose. Past performance is not indicative of future results.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">1. No Guarantee of Profit</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed mb-4">
                  KiteKraken AI provides educational tools, trading indicators, and signals designed to assist your trading decisions. However:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4">
                  <li><strong>We do not guarantee profits</strong> or any specific trading outcomes</li>
                  <li>Trading results vary significantly based on market conditions, user decisions, and execution</li>
                  <li>Automated trading algorithms can and do experience losses</li>
                  <li>Historical performance data does not guarantee future performance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">2. Risk of Loss</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed mb-4">
                  All forms of trading carry inherent risk:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4">
                  <li><strong>You can lose all invested capital</strong> - Only trade with funds you can afford to lose</li>
                  <li>Market volatility can result in rapid and substantial losses</li>
                  <li>Leverage and margin trading amplify both potential gains AND losses</li>
                  <li>Cryptocurrency markets are highly volatile and operate 24/7 without circuit breakers</li>
                  <li>Technical failures, exchange issues, or connectivity problems can impact trading outcomes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">3. Not Financial Advice</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  KiteKraken AI is an educational and informational platform. We are NOT:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4 mt-4">
                  <li>A registered financial advisor or broker</li>
                  <li>Providing personalized investment advice</li>
                  <li>Recommending specific trades or investment strategies</li>
                  <li>Making predictions about future market performance</li>
                </ul>
                <p className="text-[rgb(218,218,218)] leading-relaxed mt-4">
                  You should consult with a qualified financial advisor before making any investment decisions.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">4. Backtesting Limitations</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  Backtesting results presented on our platform are simulated and subject to limitations:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4 mt-4">
                  <li>Backtests use historical data and do not account for real market slippage</li>
                  <li>Results do not reflect trading fees, spreads, or execution delays</li>
                  <li>Simulated results may not reflect actual live trading performance</li>
                  <li>Overfitting to historical data can lead to unrealistic expectations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">5. Testimonials & Performance Claims</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  User testimonials and performance examples shared on our platform represent individual experiences and are not typical results. Your results may differ significantly. We do not claim that our tools will produce similar outcomes for all users.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">6. Regulatory Considerations</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  Cryptocurrency and forex trading may be restricted or prohibited in certain jurisdictions. You are responsible for:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4 mt-4">
                  <li>Verifying the legality of trading in your jurisdiction</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Understanding tax implications of trading activities</li>
                  <li>Ensuring you meet the legal age and requirements for trading</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">7. Your Responsibility</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  By using KiteKraken AI services, you acknowledge and accept:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4 mt-4">
                  <li>You are solely responsible for all trading decisions</li>
                  <li>You accept full financial risk for all trading activities</li>
                  <li>KiteKraken AI is not liable for any trading losses</li>
                  <li>You will not rely solely on automated tools without understanding their operation</li>
                  <li>You will use proper risk management and position sizing</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-normal text-white mb-4">8. Technical Risks</h2>
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  Technology-based trading involves additional risks:
                </p>
                <ul className="list-disc list-inside text-[rgb(218,218,218)] space-y-2 ml-4 mt-4">
                  <li>Software bugs or errors may affect trading performance</li>
                  <li>Internet connectivity issues can disrupt trading</li>
                  <li>Exchange API limitations or failures can impact execution</li>
                  <li>Cybersecurity threats including hacking or account compromise</li>
                </ul>
              </div>

              <div className="bg-[rgba(255,193,7,0.1)] border-l-4 border-[rgb(255,193,7)] p-6 rounded-r-xl mt-8">
                <p className="text-white leading-relaxed">
                  <strong>By using KiteKraken AI's services, you explicitly acknowledge that you have read, understood, and accepted this Risk Disclaimer in its entirety.</strong>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiskDisclaimer;
