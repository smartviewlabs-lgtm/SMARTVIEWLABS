import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Home as HomeIcon, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Sparkles,
  Award
} from 'lucide-react';

interface HeroProps {
  onExploreCourses: () => void;
  onViewJobs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCourses, onViewJobs }) => {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Decorative Gradients & Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[350px] bg-sky-100/70 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-48 right-10 -z-10 w-[300px] h-[300px] bg-emerald-100/50 blur-[90px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Super tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/90 border border-slate-200 rounded-full text-xs font-semibold text-[#0284C7] uppercase tracking-wider mb-5 shadow-xs backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Govt. Registered & Practical Skill Development Institute</span>
          </div>

          {/* Primary High Conversion Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15] mb-5">
            Learn In-Demand Digital Skills &{' '}
            <span className="text-[#0284C7] font-editorial-serif italic font-normal tracking-normal">
              Earn Up To ₹49,000/Month
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mb-8">
            Smart View Labs offers <strong className="font-semibold text-slate-900">100% practical training</strong> and <strong className="font-semibold text-slate-900">Work-From-Home career opportunities</strong> for freshers, 12th pass students, graduates, and working professionals.
          </p>

          {/* 3 Highlight Badges requested */}
          <div className="flex flex-wrap justify-center gap-3.5 max-w-3xl mx-auto mb-10">
            {/* Badge 1 */}
            <div className="glass-card px-4 py-2.5 rounded-xl flex items-center gap-3 border border-slate-200/80 shadow-xs hover:border-sky-200 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold badge-gold px-2.5 py-0.5 rounded-full">₹17,000</span>
              <span className="text-sm font-semibold text-slate-700">Full Course Fee</span>
            </div>

            {/* Badge 2 */}
            <div className="glass-card px-4 py-2.5 rounded-xl flex items-center gap-3 border border-slate-200/80 shadow-xs hover:border-emerald-200 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold badge-green px-2.5 py-0.5 rounded-full">₹15k - ₹49k</span>
              <span className="text-sm font-semibold text-slate-700">Monthly Salary</span>
            </div>

            {/* Badge 3 */}
            <div className="glass-card px-4 py-2.5 rounded-xl flex items-center gap-3 border border-slate-200/80 shadow-xs hover:border-sky-200 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-700">
                <HomeIcon className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold badge-blue px-2.5 py-0.5 rounded-full">WFH</span>
              <span className="text-sm font-semibold text-slate-700">Work From Home Available</span>
            </div>
          </div>

          {/* Prominent CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              id="hero-explore-courses-btn"
              onClick={onExploreCourses}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-[#0284C7] hover:bg-sky-700 rounded-full accent-glow transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 group"
            >
              <GraduationCap className="w-4 h-4" />
              Explore Courses
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-view-jobs-btn"
              onClick={onViewJobs}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-[#0F172A] bg-white hover:bg-slate-50 border-2 border-slate-300 hover:border-slate-400 rounded-full shadow-xs transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
            >
              <Briefcase className="w-4 h-4 text-emerald-600" />
              View Job Openings
            </button>
          </div>

          {/* Trust points bar */}
          <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-semibold text-slate-600">
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Practical Live Training</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Min. 12th Pass Eligible</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-amber-600" />
              <span>High Salary Potential</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Users className="w-4 h-4 text-indigo-600" />
              <span>Direct Placement Support</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
