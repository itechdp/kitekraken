import React, { useState } from 'react';
import { X, Shield, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecurityNotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[rgb(17,17,19)] border-b border-[rgba(255,255,97,0.3)] relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 md:py-2.5">
          <div className="flex items-center gap-2 md:gap-3 flex-1">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-[rgb(55,255,97)] flex-shrink-0" />
            <p className="text-xs md:text-sm text-white flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-[rgb(55,255,97)]">⚠️ Security Note:</span>
              <span className="text-[rgb(200,200,200)]">
                Kitekraken.ai will <strong className="text-white">never</strong> ask for your exchange password or withdrawal permissions. 
                Always keep <strong className="text-[rgb(55,255,97)]">"Enable Withdrawals" OFF</strong> in your API settings.
              </span>
              <Link 
                to="/documentation" 
                className="text-[rgb(55,255,97)] hover:text-[rgb(45,245,87)] underline inline-flex items-center gap-1 whitespace-nowrap font-medium"
              >
                <Info className="w-3 h-3 md:w-4 md:h-4" />
                Learn More about API Safety
              </Link>
            </p>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="ml-2 p-1 hover:bg-[rgba(255,255,255,0.1)] rounded transition-colors flex-shrink-0"
            aria-label="Close notification"
          >
            <X className="w-4 h-4 md:w-5 md:h-5 text-[rgb(161,161,170)] hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityNotificationBar;
