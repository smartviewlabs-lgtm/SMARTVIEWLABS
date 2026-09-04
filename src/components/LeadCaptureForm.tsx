import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Phone, 
  User, 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  X,
  Clock,
  ArrowRight
} from 'lucide-react';
import { IntentType, LeadSubmission } from '../types';
import { COURSES_DATA, JOBS_DATA } from '../data/coursesAndJobs';

interface LeadCaptureFormProps {
  initialIntent: IntentType;
  initialSelection?: string;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ 
  initialIntent, 
  initialSelection 
}) => {
  const [intent, setIntent] = useState<IntentType>(initialIntent);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [selectedProgramOrRole, setSelectedProgramOrRole] = useState(
    initialSelection || (initialIntent === 'learn' ? 'Full Course Package (@ ₹17,000/-)' : JOBS_DATA[0].title)
  );
  const [qualification, setQualification] = useState('12th Pass');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<LeadSubmission | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Sync when initialIntent or initialSelection props change
  useEffect(() => {
    setIntent(initialIntent);
    if (initialSelection) {
      setSelectedProgramOrRole(initialSelection);
    } else if (initialIntent === 'learn') {
      setSelectedProgramOrRole('Full Course Package (@ ₹17,000/-)');
    } else {
      setSelectedProgramOrRole(JOBS_DATA[0].title);
    }
  }, [initialIntent, initialSelection]);

  const handleIntentChange = (newIntent: IntentType) => {
    setIntent(newIntent);
    if (newIntent === 'learn') {
      setSelectedProgramOrRole('Full Course Package (@ ₹17,000/-)');
    } else {
      setSelectedProgramOrRole(JOBS_DATA[0].title);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!emailAddress.trim() || !emailAddress.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate instant process with realistic submission
    setTimeout(() => {
      const generatedId = `SVL-${Math.floor(100000 + Math.random() * 900000)}`;
      const submission: LeadSubmission = {
        id: generatedId,
        fullName: fullName.trim(),
        phoneNumber: cleanPhone,
        emailAddress: emailAddress.trim(),
        intent,
        selectedProgramOrRole,
        qualification,
        message: notes.trim(),
        createdAt: new Date().toLocaleString(),
      };

      // Store in localStorage for persistence
      try {
        const stored = JSON.parse(localStorage.getItem('smartview_leads') || '[]');
        stored.push(submission);
        localStorage.setItem('smartview_leads', JSON.stringify(stored));
      } catch (err) {
        console.warn('Storage error', err);
      }

      setIsSubmitting(false);
      setSuccessData(submission);
      
      // Reset form
      setFullName('');
      setPhoneNumber('');
      setEmailAddress('');
      setNotes('');
    }, 600);
  };

  return (
    <section id="lead-form-section" className="py-16 md:py-24 bg-[#F8FAFC] relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0284C7] bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200/80 inline-block mb-3">
            Quick Application & Enrollment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            Take the Next Step with Smart View Labs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Fill out the simple form below. Our team will contact you within 24 hours to schedule your counseling or job interview.
          </p>
        </div>

        {/* Interactive Form Card */}
        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-lg relative overflow-hidden">
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            
            {/* INTENT SELECTOR (TABS / DROPDOWN) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                I am applying for <span className="text-red-500">*</span>
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                <button
                  type="button"
                  id="intent-learn-btn"
                  onClick={() => handleIntentChange('learn')}
                  className={`py-3 px-4 rounded-full border text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    intent === 'learn'
                      ? 'bg-sky-50 border-[#0284C7] text-[#0284C7] shadow-xs'
                      : 'bg-white/80 border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>I want to Learn (Course)</span>
                </button>

                <button
                  type="button"
                  id="intent-earn-btn"
                  onClick={() => handleIntentChange('earn')}
                  className={`py-3 px-4 rounded-full border text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    intent === 'earn'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-700 shadow-xs'
                      : 'bg-white/80 border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  <span>I want to Apply (Job Role)</span>
                </button>
              </div>

              <div className="mt-2">
                <label className="block text-xs font-medium text-slate-500 mb-1">
                  Or select directly from intent dropdown:
                </label>
                <select
                  id="intent-dropdown-select"
                  value={intent}
                  onChange={(e) => handleIntentChange(e.target.value as IntentType)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
                >
                  <option value="learn">I want to Learn (Course)</option>
                  <option value="earn">I want to Apply (Job Role)</option>
                </select>
              </div>
            </div>

            {/* FULL NAME */}
            <div>
              <label htmlFor="form-full-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="form-full-name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* PHONE & EMAIL DUAL COLUMN */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="form-phone-number" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone Number (WhatsApp) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="form-phone-number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. 7508094760"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="form-email-address" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    id="form-email-address"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    placeholder="e.g. rahul@example.com"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* SPECIFIC SELECTION ACCORDING TO INTENT */}
            <div>
              <label htmlFor="form-program-role" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {intent === 'learn' ? 'Select Training Course' : 'Select Job Position'} <span className="text-red-500">*</span>
              </label>
              
              {intent === 'learn' ? (
                <select
                  id="form-program-role"
                  value={selectedProgramOrRole}
                  onChange={(e) => setSelectedProgramOrRole(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
                >
                  <option value="Full Course Package (@ ₹17,000/-)">Complete Course Package (All 4 Modules @ ₹17,000/-)</option>
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title} — {c.subtitle}
                    </option>
                  ))}
                </select>
              ) : (
                <select
                  id="form-program-role"
                  value={selectedProgramOrRole}
                  onChange={(e) => setSelectedProgramOrRole(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {JOBS_DATA.map((j) => (
                    <option key={j.id} value={j.title}>
                      {j.title} ({j.salaryRange.split('+')[0]}) — {j.workMode}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* HIGHEST QUALIFICATION */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="form-qualification" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Educational Qualification
                </label>
                <select
                  id="form-qualification"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
                >
                  <option value="12th Pass">12th Class Pass (Minimum Required)</option>
                  <option value="Pursuing Graduation">Pursuing Graduation / College</option>
                  <option value="Graduate (Any Stream)">Graduate (Any Stream)</option>
                  <option value="Postgraduate / Diploma">Postgraduate / Diploma</option>
                </select>
              </div>

              <div>
                <label htmlFor="form-notes" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Brief Message / City
                </label>
                <input
                  type="text"
                  id="form-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. From Delhi, looking for morning batch"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* ERROR MESSAGE DISPLAY */}
            {errorMessage && (
              <div className="p-3 bg-red-50 text-red-700 text-xs font-semibold rounded-xl border border-red-200">
                {errorMessage}
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <div>
              <button
                type="submit"
                id="form-submit-btn"
                disabled={isSubmitting}
                className={`w-full py-3.5 px-6 rounded-full text-base font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99] ${
                  intent === 'learn'
                    ? 'bg-[#0284C7] hover:bg-sky-700 accent-glow'
                    : 'bg-emerald-600 hover:bg-emerald-700 shadow-md'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Processing Application...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>
                      {intent === 'learn' ? 'Submit Enrollment Application' : 'Submit Job Application'}
                    </span>
                  </>
                )}
              </button>
            </div>

            {/* Trust Footer */}
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Your personal information is 100% confidential and secure.</span>
            </div>

          </form>
        </div>

      </div>

      {/* INSTANT SUCCESS POPUP NOTIFICATION MODAL */}
      {successData && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div 
            id="submission-success-popup"
            className="glass-card rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200/80 text-center relative animate-in fade-in zoom-in-95 duration-200"
          >
            <button
              id="close-success-popup-btn"
              onClick={() => setSuccessData(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100 shadow-xs">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>

            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold badge-green mb-2">
              Application Received Successfully!
            </span>

            <h3 className="text-2xl font-extrabold text-[#0F172A] mb-2">
              Thank You, {successData.fullName}!
            </h3>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed font-light">
              We have recorded your application for{' '}
              <strong className="text-slate-900 font-semibold">{successData.selectedProgramOrRole}</strong>.
              Our counseling and hiring desk will connect with you on{' '}
              <span className="font-semibold text-sky-700">+91 {successData.phoneNumber}</span> within 24 hours.
            </p>

            <div className="bg-slate-50/80 rounded-xl p-4 text-left border border-slate-200/70 mb-6 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Reference ID:</span>
                <span className="font-mono font-bold text-slate-900">{successData.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Path:</span>
                <span className="font-semibold text-slate-800 capitalize">
                  {successData.intent === 'learn' ? 'Course Enrollment' : 'Job Application'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Eligibility:</span>
                <span className="font-semibold text-slate-800">{successData.qualification}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                id="success-call-now-btn"
                href="tel:7508094760"
                className="flex-1 py-3 px-4 bg-[#0F172A] hover:bg-slate-800 text-white rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Call Us (7508094760)</span>
              </a>

              <button
                id="success-done-btn"
                onClick={() => setSuccessData(null)}
                className="flex-1 py-3 px-4 bg-[#0284C7] hover:bg-sky-700 text-white rounded-full text-xs font-semibold accent-glow transition-colors"
              >
                Got It, Thanks!
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
