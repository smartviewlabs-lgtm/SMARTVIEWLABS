import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Send } from 'lucide-react';

interface FloatingActionsProps {
  onQuickApply: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onQuickApply }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      {showBackToTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white text-slate-700 shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:text-sky-600 transition-all active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call & Action Pill */}
      <div className="flex items-center gap-2 glass-card p-1.5 rounded-full shadow-xl border border-slate-200/80">
        <a
          id="floating-call-btn"
          href="tel:7508094760"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-transform active:scale-95"
          title="Call Helpline Now"
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Call: 7508094760</span>
          <span className="sm:hidden">Call</span>
        </a>

        <button
          id="floating-apply-btn"
          onClick={onQuickApply}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#0284C7] hover:bg-sky-700 text-white text-xs font-semibold accent-glow transition-transform active:scale-95"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Apply / Enroll</span>
        </button>
      </div>
    </div>
  );
};
