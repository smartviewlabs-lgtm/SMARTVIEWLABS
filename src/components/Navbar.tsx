import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ArrowRight, Sparkles, GraduationCap, Briefcase } from 'lucide-react';
import { SVLLogo } from './SVLLogo';
import { LegalDocType } from '../types';

interface NavbarProps {
  onSelectIntent: (intent: 'learn' | 'earn') => void;
  onOpenLegal?: (doc: LegalDocType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectIntent, onOpenLegal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleEnrollCTA = () => {
    onSelectIntent('learn');
    handleNavClick('lead-form-section');
  };

  const handleApplyCTA = () => {
    onSelectIntent('earn');
    handleNavClick('lead-form-section');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro contact banner */}
      <div className="bg-[#0F172A] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Admissions & Hiring Open for 2026 Batch
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">Work-From-Home Positions Available</span>
          </div>

          <div className="flex items-center gap-5 text-[11px] sm:text-xs">
            <a
              id="topbar-phone-link"
              href="tel:7508094760"
              className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-semibold text-slate-100">+91 7508094760</span>
            </a>
            <a
              id="topbar-email-link"
              href="mailto:service@smartviewlabs.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>service@smartviewlabs.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-card border-b border-slate-200/80 py-3 shadow-sm'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[52px]">
          {/* Brand Logo & Name */}
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-2.5 group text-left"
          >
            <SVLLogo className="w-9 h-9 sm:w-10 sm:h-10 group-hover:scale-105 transition-transform duration-200" />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#0F172A] leading-tight">
                Smart View <span className="text-[#0284C7]">Labs</span>
              </span>
              <span className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                Next-Gen Digital Solutions & Innovation
              </span>
            </div>
          </a>

          {/* Desktop Center Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-50/80 p-1 rounded-full border border-slate-200/70 text-sm font-medium">
            <button
              id="nav-home-btn"
              onClick={() => handleNavClick('home')}
              className="px-4 py-1.5 text-slate-700 hover:text-[#0284C7] hover:bg-white rounded-full transition-all duration-150"
            >
              Home
            </button>
            <button
              id="nav-learn-btn"
              onClick={() => handleNavClick('learn-section')}
              className="px-4 py-1.5 text-slate-700 hover:text-[#0284C7] hover:bg-white rounded-full transition-all duration-150 flex items-center gap-1.5"
            >
              <GraduationCap className="w-4 h-4 text-sky-600" />
              Learn (Courses)
            </button>
            <button
              id="nav-earn-btn"
              onClick={() => handleNavClick('earn-section')}
              className="px-4 py-1.5 text-slate-700 hover:text-[#0284C7] hover:bg-white rounded-full transition-all duration-150 flex items-center gap-1.5"
            >
              <Briefcase className="w-4 h-4 text-emerald-600" />
              Earn (Jobs)
            </button>
            <button
              id="nav-about-btn"
              onClick={() => handleNavClick('about-section')}
              className="px-4 py-1.5 text-slate-700 hover:text-[#0284C7] hover:bg-white rounded-full transition-all duration-150"
            >
              About Us
            </button>
            <button
              id="nav-contact-btn"
              onClick={() => handleNavClick('contact-section')}
              className="px-4 py-1.5 text-slate-700 hover:text-[#0284C7] hover:bg-white rounded-full transition-all duration-150"
            >
              Contact
            </button>
          </div>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-cta-apply-job"
              onClick={handleApplyCTA}
              className="px-4 py-2 text-sm font-semibold border-2 border-[#0284C7] text-[#0284C7] rounded-full hover:bg-[#0284C7] hover:text-white transition-all duration-200 active:scale-95 shadow-xs"
            >
              Apply for Job
            </button>
            <button
              id="nav-cta-enroll-now"
              onClick={handleEnrollCTA}
              className="px-5 py-2 text-sm font-semibold bg-[#0284C7] text-white rounded-full accent-glow hover:bg-sky-700 transition-all duration-200 active:scale-95 flex items-center gap-1.5"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 mt-3 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
            {/* Mobile Menu Brand Header with Logo */}
            <div className="flex items-center gap-3 pb-3 mb-3 border-b border-slate-100">
              <SVLLogo className="w-10 h-10" />
              <div className="flex flex-col text-left">
                <span className="text-base font-bold tracking-tight text-[#0F172A] leading-tight">
                  Smart View <span className="text-[#0284C7]">Labs</span>
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                  Next-Gen Digital Solutions & Innovation
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <button
                id="mobile-nav-home"
                onClick={() => handleNavClick('home')}
                className="text-left px-3 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
              >
                Home
              </button>
              <button
                id="mobile-nav-learn"
                onClick={() => handleNavClick('learn-section')}
                className="text-left px-3 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-50 flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-sky-600" />
                  Learn (Courses)
                </span>
                <span className="text-xs badge-gold font-bold px-2.5 py-0.5 rounded-full">₹17,000</span>
              </button>
              <button
                id="mobile-nav-earn"
                onClick={() => handleNavClick('earn-section')}
                className="text-left px-3 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-50 flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-emerald-600" />
                  Earn (Jobs)
                </span>
                <span className="text-xs badge-green font-bold px-2.5 py-0.5 rounded-full">WFH Available</span>
              </button>
              <button
                id="mobile-nav-about"
                onClick={() => handleNavClick('about-section')}
                className="text-left px-3 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
              >
                About Us
              </button>
              <button
                id="mobile-nav-contact"
                onClick={() => handleNavClick('contact-section')}
                className="text-left px-3 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
              >
                Contact
              </button>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  id="mobile-cta-enroll"
                  onClick={handleEnrollCTA}
                  className="w-full py-2.5 text-center font-semibold text-white bg-[#0284C7] rounded-full accent-glow"
                >
                  Enroll Now
                </button>
                <button
                  id="mobile-cta-apply"
                  onClick={handleApplyCTA}
                  className="w-full py-2.5 text-center font-semibold text-[#0284C7] border-2 border-[#0284C7] rounded-full"
                >
                  Apply for Job
                </button>
              </div>

              {onOpenLegal && (
                <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-3 text-[11px] text-slate-500 font-medium">
                  <button
                    id="mobile-legal-privacy"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenLegal('privacy');
                    }}
                    className="hover:text-sky-600 transition-colors"
                  >
                    Privacy Policy
                  </button>
                  <span className="text-slate-300">•</span>
                  <button
                    id="mobile-legal-terms"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenLegal('terms');
                    }}
                    className="hover:text-sky-600 transition-colors"
                  >
                    Terms
                  </button>
                  <span className="text-slate-300">•</span>
                  <button
                    id="mobile-legal-disclaimer"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenLegal('disclaimer');
                    }}
                    className="hover:text-sky-600 transition-colors"
                  >
                    Disclaimer
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
