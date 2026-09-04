import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Target, 
  Zap, 
  Laptop, 
  Camera, 
  Briefcase, 
  Globe2 
} from 'lucide-react';

export const AboutUs: React.FC = () => {
  const pillars = [
    {
      icon: <Laptop className="w-6 h-6 text-sky-600" />,
      title: '100% Practical Pedagogy',
      desc: 'No dry theoretical slides. Every student works directly on live client accounts, active ad dashboards, and real web deployments.',
    },
    {
      icon: <Camera className="w-6 h-6 text-indigo-600" />,
      title: 'Pioneers in 360° Virtual Tours',
      desc: 'We train candidates on Insta360 hardware and Google Street View Studio, opening high-ticket commercial photography opportunities.',
    },
    {
      icon: <Briefcase className="w-6 h-6 text-emerald-600" />,
      title: 'Work-From-Home Career Drive',
      desc: 'Flexible remote jobs paying ₹15,000 to ₹49,000/month, allowing candidates from any city or town to earn while maintaining life balance.',
    },
    {
      icon: <Globe2 className="w-6 h-6 text-amber-600" />,
      title: 'Local to Global Impact',
      desc: 'Helping small businesses, salons, showrooms, and hotels across India build professional online visibility and drive real walk-ins.',
    },
  ];

  return (
    <section id="about-section" className="py-16 md:py-24 bg-white relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Mission */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0284C7] bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200/80 inline-block">
              About Smart View Labs
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Bridging the Gap Between <br className="hidden sm:inline" />
              <span className="text-[#0284C7]">Practical Education</span> &{' '}
              <span className="text-emerald-600">Real Income</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              <strong className="font-semibold text-slate-800">Smart View Labs</strong> was founded with a singular objective: to equip aspiring professionals, 12th pass students, and freshers with practical digital skills that businesses actually pay for.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              Instead of rote learning, our curriculum focuses on commercial tools—from 360-degree Google Virtual Tours using Insta360 cameras to high-ROI Meta & Google lead generation and responsive website building.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  Direct job placement support with starting salary up to ₹49,000/Month.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  Complete 4-module skill development course bundle at only ₹17,000/-.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  Dedicated mentorship and 1-on-1 feedback on live assignments.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Feature Bento Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                id={`about-pillar-card-${idx}`}
                className="p-6 rounded-2xl glass-card border border-slate-200/80 hover:border-sky-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
