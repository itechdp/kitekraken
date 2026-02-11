import React from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

/* 
 * SAFE BROWSING COMPLIANCE: Risk Disclaimer Banner
 * Purpose: Prominently display trading risk warning on all public pages
 * Addresses: Deceptive practices prevention, user awareness, compliance
 */

const RiskDisclaimerBanner = ({ onDismiss }) => {
  const [isDismissed, setIsDismissed] = React.useState(false);

  const handleDismiss = () => {
    setIsDismissed(true);
    if (onDismiss) onDismiss();
  };

  if (isDismissed) return null;

  return (
    <div className="bg-[rgba(255,193,7,0.15)] border-b-2 border-[rgb(255,193,7)] relative z-50">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1">
            <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-[rgb(255,193,7)] flex-shrink-0" />
            <div className="flex-1">
              <p className="text-white text-xs md:text-sm leading-tight">
                <strong>Risk Warning:</strong> Trading cryptocurrencies, forex, and other financial instruments involves substantial risk. 
                <Link to="/risk-disclaimer" className="underline hover:text-[rgb(255,193,7)] ml-1">
                  Read full disclaimer
                </Link>
              </p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-[rgb(255,193,7)] transition-colors flex-shrink-0"
            aria-label="Dismiss warning"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RiskDisclaimerBanner;
