import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  AlertTriangle, 
  X, 
  Printer, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2, 
  Lock, 
  Scale, 
  HelpCircle 
} from 'lucide-react';
import { LegalDocType } from '../types';
import { SVLLogo } from './SVLLogo';

interface LegalModalProps {
  isOpen: boolean;
  activeDoc: LegalDocType;
  onClose: () => void;
  onSelectDoc: (doc: LegalDocType) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  activeDoc,
  onClose,
  onSelectDoc,
}) => {
  // Prevent background scrolling when modal is open and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      {/* Click outside backdrop */}
      <div 
        className="absolute inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200/80 flex flex-col overflow-hidden z-10">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <SVLLogo className="w-8 h-8 sm:w-9 sm:h-9" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold tracking-tight text-white">
                  Smart View <span className="text-sky-400 font-editorial-serif italic">Labs</span>
                </span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  Legal & Compliance
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Next-Gen Digital Solutions & Innovation • Updated September 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="legal-print-btn"
              onClick={handlePrint}
              title="Print Document"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors inline-flex items-center gap-1.5 text-xs font-medium"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              type="button"
              id="legal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-2 flex items-center gap-2 overflow-x-auto shrink-0 scrollbar-none">
          <button
            type="button"
            id="tab-privacy-policy"
            onClick={() => onSelectDoc('privacy')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 shrink-0 ${
              activeDoc === 'privacy'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>

          <button
            type="button"
            id="tab-terms-conditions"
            onClick={() => onSelectDoc('terms')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 shrink-0 ${
              activeDoc === 'terms'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Terms & Conditions</span>
          </button>

          <button
            type="button"
            id="tab-disclaimer"
            onClick={() => onSelectDoc('disclaimer')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 shrink-0 ${
              activeDoc === 'disclaimer'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Disclaimer</span>
          </button>
        </div>

        {/* Scrollable Document Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 text-slate-700 text-sm leading-relaxed space-y-6">
          
          {/* ================= PRIVACY POLICY ================= */}
          {activeDoc === 'privacy' && (
            <article className="space-y-6" id="privacy-policy-doc">
              <header className="border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2 text-sky-600 font-semibold text-xs uppercase tracking-wider mb-1">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Smart View Labs • Privacy Protection</span>
                </div>
                <h1 id="legal-modal-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Privacy Policy
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Last Updated & Effective Date: September 2026 | Compliant with IT Act 2000 & Digital Personal Data Protection Standards
                </p>
              </header>

              <div className="bg-sky-50/70 border border-sky-100 rounded-xl p-4 text-xs sm:text-sm text-sky-900 space-y-2">
                <p className="font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  Our Commitment to Your Data Privacy:
                </p>
                <p className="text-sky-800">
                  Smart View Labs ("we", "our", or "us") respects your personal privacy. We collect and process student and applicant details strictly to facilitate practical digital skills training, certification, and genuine Work-From-Home (WFH) job opportunities. We never sell or rent your personal contact information to third-party telemarketers.
                </p>
              </div>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  1. Information We Collect
                </h2>
                <p>
                  When you visit our website (<strong>www.smartviewlabs.com</strong>), register for our practical courses, or apply for our Work-From-Home job openings, we may collect the following categories of personal data:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Contact Details:</strong> Full Name, Email Address, WhatsApp Number, Mobile Phone Number.</li>
                  <li><strong>Professional & Educational Profile:</strong> Highest educational qualification (e.g. 10th, 12th pass, Graduate, Post Graduate), city/state of residence, work experience status, and resume/CV (if submitted).</li>
                  <li><strong>Course & Application Preferences:</strong> Selected courses (Google 360 Virtual Tour, Digital Marketing, Website Designing, etc.) or preferred WFH career roles (Customer Support, Calling, Video Editing, Data Processing).</li>
                  <li><strong>Technical Data:</strong> Browser user agent, approximate IP geolocation, session timestamps, and device metrics to improve website responsiveness and prevent automated spam submissions.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  2. Purpose of Information Collection
                </h2>
                <p>We use your information exclusively for legitimate educational and employment facilitation purposes:</p>
                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-1">For Students / Learners</h3>
                    <p className="text-xs text-slate-600">Enrolling you into training batches, scheduling live sessions, dispatching class study materials, recording project assignments, and issuing course completion certificates.</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-1">For Job Applicants</h3>
                    <p className="text-xs text-slate-600">Reviewing eligibility for verified Work-From-Home roles, coordinating telephonic/video interviews, onboarding for client data tasks, and project compensation payouts.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  3. Non-Disclosure & Third-Party Sharing Policy
                </h2>
                <p>
                  We maintain strict safeguards regarding your personal records:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>No Commercial Sale:</strong> We never sell, lease, or monetize your contact records to third-party advertising brokers or unauthorized marketing networks.</li>
                  <li><strong>Recruitment Partners:</strong> For job seekers, candidate resumes and assessment scores are shared only with vetted corporate hiring partners offering verified Work-From-Home opportunities.</li>
                  <li><strong>Service Providers:</strong> We may utilize cloud infrastructure (such as secure messaging gateways for batch alerts or Google Forms / Sheets) operating under strict data confidentiality obligations.</li>
                  <li><strong>Legal Obligations:</strong> Information may be disclosed if required by law, court order, or governmental authorities in accordance with applicable Indian laws.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  4. Data Security & Storage
                </h2>
                <p>
                  Smart View Labs deploys SSL/TLS encryption for all data submitted via our website. Access to candidate and student directories is password-protected and restricted strictly to authorized program coordinators and faculty managers.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  5. User Rights & Data Deletion
                </h2>
                <p>
                  You have the right to request access to your personal data held by us, request correction of any inaccurate contact details, or request that your profile be permanently removed from our job drive database.
                </p>
                <p className="text-xs text-slate-600">
                  To request data update or erasure, email us at <strong className="text-slate-800">service@smartviewlabs.com</strong> with the subject line <em>"Data Privacy Request"</em> along with your registered phone number.
                </p>
              </section>

              <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs space-y-1.5">
                <p className="font-semibold text-slate-900">Grievance Officer & Privacy Desk:</p>
                <p className="text-slate-600">Smart View Labs • Next-Gen Digital Solutions & Innovation</p>
                <p className="text-slate-600">Official Helpline: <strong>+91 7508094760</strong> | Official Email: <strong>service@smartviewlabs.com</strong> / <strong>smartviewlabs@gmail.com</strong></p>
              </div>
            </article>
          )}

          {/* ================= TERMS & CONDITIONS ================= */}
          {activeDoc === 'terms' && (
            <article className="space-y-6" id="terms-conditions-doc">
              <header className="border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2 text-sky-600 font-semibold text-xs uppercase tracking-wider mb-1">
                  <Scale className="w-3.5 h-3.5" />
                  <span>Smart View Labs • Agreement & Code of Conduct</span>
                </div>
                <h1 id="legal-modal-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Terms & Conditions
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Last Updated: September 2026 | By accessing this platform or submitting forms, you agree to these terms.
                </p>
              </header>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800">
                These Terms and Conditions govern the utilization of training programs, website materials, and recruitment drives offered by <strong>Smart View Labs</strong>. By registering for our courses, submitting your contact details, or applying for employment positions, you acknowledge and confirm full agreement with these terms.
              </div>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  1. Eligibility & User Representation
                </h2>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li>Applicants for training programs or Work-From-Home positions must be at least 18 years old or possess parental/guardian consent if between 16–18 years of age.</li>
                  <li>Applicants must possess at least a 10th or 12th Standard qualification or higher as indicated in individual program requirements.</li>
                  <li>You agree to provide accurate, up-to-date, and truthful information during registration. Providing fraudulent credentials or impersonating others will result in immediate disqualification.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  2. Course Enrollment, Delivery & Certification
                </h2>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>Practical Curriculum:</strong> Our courses (including Google 360 Virtual Tour creation with Insta360 cameras, Digital Marketing, and Website Designing) are focused on 100% practical, project-based learning.</li>
                  <li><strong>Batch Allocation:</strong> Course timing, batch schedules, and faculty assignment are managed by Smart View Labs administration to ensure balanced class sizes.</li>
                  <li><strong>Certification Criteria:</strong> Course completion certificates are awarded only upon satisfactory completion of assigned practical project work, minimum 80% attendance, and submission of milestone tasks.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  3. Fee Structure & Refund Policy
                </h2>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>Transparent Commercials:</strong> Course fees (such as our all-inclusive comprehensive package at ₹17,000/-) are transparently disclosed prior to enrollment.</li>
                  <li><strong>Seat Reservation:</strong> Due to limited batch seats and specialized equipment/software licenses allocated per student, admission registration fees are strictly non-refundable once batch orientation commences.</li>
                  <li><strong>Payment Verification:</strong> All fee transactions must be conducted via official Smart View Labs authorized channels. A valid receipt is provided for every enrollment.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  4. Work-From-Home (WFH) Opportunities & Employment
                </h2>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>Performance-Based Engagement:</strong> Remote job opportunities (ranging from ₹15,000 to ₹49,000/month) are performance and output-based remote positions (e.g. data validation, tele-calling, virtual tour stitching, digital campaign management).</li>
                  <li><strong>Interview & Selection:</strong> Submission of an application form does not constitute an automatic employment contract. All applicants must undergo telephonic/practical interview assessments.</li>
                  <li><strong>Independent Contractor / Remote Work:</strong> Selected candidates work under mutually agreed terms specifying deliverables, task accuracy thresholds, and milestone payouts.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  5. Intellectual Property & Prohibited Activities
                </h2>
                <p>
                  All learning syllabus, tutorial videos, course notes, proprietary templates, and branding elements belong exclusively to Smart View Labs. You agree not to record, reproduce, redistribute, or commercially exploit any course materials without prior written authorization.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  6. Communication Authorization
                </h2>
                <p>
                  By submitting your mobile number and email on our forms, you grant Smart View Labs express consent to contact you via Phone Call, WhatsApp, and Email with orientation updates, course reminders, and interview call letters. You may opt out anytime by informing our helpdesk.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  7. Governing Law & Jurisdiction
                </h2>
                <p>
                  These terms shall be interpreted in accordance with the laws of the Republic of India. Any disputes arising out of or related to our services shall be subject to the exclusive jurisdiction of the competent courts in India.
                </p>
              </section>
            </article>
          )}

          {/* ================= DISCLAIMER ================= */}
          {activeDoc === 'disclaimer' && (
            <article className="space-y-6" id="disclaimer-doc">
              <header className="border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2 text-amber-600 font-semibold text-xs uppercase tracking-wider mb-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Smart View Labs • Clarifications & Disclaimers</span>
                </div>
                <h1 id="legal-modal-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Disclaimer
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Please review these educational, employment, and income clarifications carefully.
                </p>
              </header>

              <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-950 space-y-2">
                <p className="font-semibold flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  General Notice on Learning & Employment Outcomes:
                </p>
                <p className="text-amber-900">
                  Smart View Labs is an independent, private digital skill development institute and employment facilitation accelerator. The content provided on this website is for informational, skill-building, and recruitment outreach purposes only.
                </p>
              </div>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  1. Income & Earnings Disclaimer
                </h2>
                <p>
                  Any references to salary ranges, monthly earnings, or potential compensation on this website (such as <strong>₹15,000 to ₹49,000/month</strong>):
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li>Represent historical and prospective compensation figures achievable by qualified candidates based on project scale, hours committed, task accuracy, and client budgets.</li>
                  <li><strong>No "Get-Rich-Quick" Scheme:</strong> Smart View Labs does NOT promote or operate any passive investment schemes or automated income programs. All earnings are strictly tied to genuine, productive work output.</li>
                  <li>Individual earnings will naturally vary depending upon candidate aptitude, dedication, speed of execution, and market demand for digital deliverables.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  2. Educational & Skill Development Scope
                </h2>
                <p>
                  While we pride ourselves on delivering 100% practical, real-world training with hands-on camera hardware (such as Insta360) and live software platforms, completing a course does not automatically substitute for the effort, practice, and portfolio building required to thrive in competitive freelancing or corporate environments.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  3. Third-Party Trademarks & Brands
                </h2>
                <p>
                  Any brand names, logos, or trademarks referenced on this platform—including but not limited to <strong>Google, Google Street View, Google Maps, Insta360, Meta, WhatsApp, Canva, and WordPress</strong>:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li>Remain the sole intellectual property of their respective trademark holders.</li>
                  <li>References to these platforms are made strictly in a nominative fair-use context to identify technical tools, cameras, and platforms taught within our educational modules.</li>
                  <li>Smart View Labs operates independently and is not an official corporate subsidiary or exclusive agent of Google LLC or Insta360.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  4. Website Content & External Links
                </h2>
                <p>
                  We endeavor to keep all information regarding batch schedules, course modules, and vacancies accurate and current. However, Smart View Labs reserves the right to modify curricula, update opening positions, or revise schedules to align with current technological trends and industry requirements without prior public notice.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  5. Help & Advisory Notice
                </h2>
                <p>
                  If you have any questions regarding the terms, eligibility, or specifics of any course or job role, our team is directly available via our official helpdesk phone (<strong>7508094760</strong>) and email (<strong>service@smartviewlabs.com</strong>).
                </p>
              </section>
            </article>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Smart View Labs Verified Policies • 2026 Edition</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="modal-legal-close-action"
              onClick={onClose}
              className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors shadow-xs"
            >
              I Understand & Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
