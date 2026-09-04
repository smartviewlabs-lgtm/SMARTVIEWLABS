import React from 'react';
import { Phone, Mail, Globe, MapPin, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact-section" className="py-16 md:py-24 bg-[#F8FAFC] relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0284C7] bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200/80 inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            Contact Smart View Labs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Have questions about course admissions, fee structures, or hiring positions? Connect with our dedicated support desk.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Phone */}
          <div 
            id="contact-card-phone"
            className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 hover:shadow-lg hover:border-sky-300 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-5 border border-sky-100">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-1">
                Call Helpline
              </h3>
              <p className="text-xs text-slate-500 mb-4 font-light">
                Direct telephonic counseling & hiring query line.
              </p>
              <a
                href="tel:7508094760"
                className="text-lg font-bold text-[#0284C7] hover:text-sky-700 block transition-colors"
              >
                +91 7508094760
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                id="contact-call-btn"
                href="tel:7508094760"
                className="w-full py-2.5 px-4 bg-sky-50 hover:bg-sky-100 text-[#0284C7] text-xs font-semibold rounded-full flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Call Directly</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div 
            id="contact-card-email"
            className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 hover:shadow-lg hover:border-sky-300 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-1">
                Official Email
              </h3>
              <p className="text-xs text-slate-500 mb-4 font-light">
                Send your resume, portfolio, or partnership enquiries.
              </p>
              <a
                href="mailto:service@smartviewlabs.com"
                className="text-sm font-bold text-slate-800 hover:text-emerald-600 block break-all transition-colors"
              >
                service@smartviewlabs.com
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                id="contact-email-btn"
                href="mailto:service@smartviewlabs.com"
                className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Web Portal & Desk */}
          <div 
            id="contact-card-web"
            className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 hover:shadow-lg hover:border-sky-300 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 border border-indigo-100">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-1">
                Web Portal & Desk
              </h3>
              <p className="text-xs text-slate-500 mb-4 font-light">
                Official digital platform and candidate portal.
              </p>
              <a
                href="https://www.smartviewlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-indigo-700 hover:text-indigo-900 block transition-colors"
              >
                www.smartviewlabs.com
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  Mon - Sat
                </span>
                <span className="font-semibold text-slate-700">
                  9:30 AM - 6:30 PM
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
