import React from 'react';
import { Phone, Mail, Globe, Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { SVLLogo } from './SVLLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenEnrollment: () => void;
  onOpenJobApply: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigate, 
  onOpenEnrollment, 
  onOpenJobApply 
}) => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Branding & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <SVLLogo className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-tight">
                  Smart View <span className="font-editorial-serif italic font-normal text-sky-400">Labs</span>
                </span>
                <span className="text-[10px] font-medium tracking-wider text-slate-400">
                  Next-Gen Digital Solutions & Innovation
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-light">
              Smart View Labs is India's leading practical skill development and Work-From-Home employment accelerator. We train students on Google 360 virtual tours, digital marketing, and web designing.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 bg-slate-800/80 border border-slate-700/80 rounded-full text-emerald-400 font-medium">
                ✓ 100% Practical Training
              </span>
              <span className="px-3 py-1 bg-slate-800/80 border border-slate-700/80 rounded-full text-sky-400 font-medium">
                ✓ Min. 12th Pass Jobs
              </span>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => onNavigate('home')}
                  className="hover:text-sky-400 transition-colors text-slate-400 hover:translate-x-1 duration-150 inline-block"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-learn"
                  onClick={() => onNavigate('learn-section')}
                  className="hover:text-sky-400 transition-colors text-slate-400 hover:translate-x-1 duration-150 inline-block"
                >
                  Learn (Courses)
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-earn"
                  onClick={() => onNavigate('earn-section')}
                  className="hover:text-sky-400 transition-colors text-slate-400 hover:translate-x-1 duration-150 inline-block"
                >
                  Earn (Jobs)
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => onNavigate('about-section')}
                  className="hover:text-sky-400 transition-colors text-slate-400 hover:translate-x-1 duration-150 inline-block"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => onNavigate('contact-section')}
                  className="hover:text-sky-400 transition-colors text-slate-400 hover:translate-x-1 duration-150 inline-block"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Programs & Opportunities */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Programs & Jobs
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  id="footer-prog-digital"
                  onClick={onOpenEnrollment}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Digital Marketing Course
                </button>
              </li>
              <li>
                <button
                  id="footer-prog-web"
                  onClick={onOpenEnrollment}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Website Designing
                </button>
              </li>
              <li>
                <button
                  id="footer-prog-virtual"
                  onClick={onOpenEnrollment}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Google 360 Virtual Tour (Insta360)
                </button>
              </li>
              <li>
                <button
                  id="footer-job-wfh"
                  onClick={onOpenJobApply}
                  className="hover:text-emerald-400 transition-colors text-left font-semibold text-slate-300"
                >
                  Work From Home Openings (₹15k-₹49k)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Desk
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  id="footer-phone-link"
                  href="tel:7508094760"
                  className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="font-semibold">7508094760</span>
                </a>
              </li>
              <li>
                <a
                  id="footer-email-link"
                  href="mailto:service@smartviewlabs.com"
                  className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>service@smartviewlabs.com</span>
                </a>
              </li>
              <li>
                <a
                  id="footer-website-link"
                  href="https://www.smartviewlabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors"
                >
                  <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>www.smartviewlabs.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p id="copyright-notice">
            © 2026 Smart View Labs. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>ISO Certified Training Architecture</span>
            <span>Made with Precision for Learners & Earners</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
