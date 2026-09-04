import React, { useState } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  TrendingUp, 
  Layout, 
  MapPin, 
  Camera, 
  PhoneCall, 
  Video, 
  Code, 
  Share2, 
  Headphones, 
  Check, 
  ArrowRight, 
  Sparkles,
  Info,
  Calendar,
  Clock,
  Building,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { COURSES_DATA, JOBS_DATA } from '../data/coursesAndJobs';
import { CourseItem, JobOpening } from '../types';

interface DualPillarProps {
  onEnrollCourse: (courseTitle?: string) => void;
  onApplyJob: (jobTitle?: string) => void;
}

export const DualPillar: React.FC<DualPillarProps> = ({ onEnrollCourse, onApplyJob }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'learn' | 'earn'>('both');
  const [selectedCourseDetail, setSelectedCourseDetail] = useState<CourseItem | null>(null);
  const [selectedJobDetail, setSelectedJobDetail] = useState<JobOpening | null>(null);

  // Helper to get course icon
  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-sky-600" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-blue-600" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-indigo-600" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-cyan-600" />;
      default:
        return <GraduationCap className="w-5 h-5 text-sky-600" />;
    }
  };

  // Helper to get job icon
  const getJobIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall':
        return <PhoneCall className="w-4 h-4 text-emerald-600" />;
      case 'Briefcase':
        return <Briefcase className="w-4 h-4 text-emerald-600" />;
      case 'Video':
        return <Video className="w-4 h-4 text-emerald-600" />;
      case 'Code':
        return <Code className="w-4 h-4 text-emerald-600" />;
      case 'Share2':
        return <Share2 className="w-4 h-4 text-emerald-600" />;
      case 'Headphones':
        return <Headphones className="w-4 h-4 text-emerald-600" />;
      default:
        return <Briefcase className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <section id="dual-pillar-section" className="py-16 md:py-24 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200 inline-block mb-3">
            Two Pathways to Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Learn Skills & Earn with Smart View Labs
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Whether you want to upgrade your skillset with practical certifications or jump straight into high-paying remote job roles, we have got you covered.
          </p>

          {/* View Filter Switcher */}
          <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-xs mt-6">
            <button
              id="filter-both-btn"
              onClick={() => setActiveTab('both')}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === 'both'
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Side-by-Side View
            </button>
            <button
              id="filter-learn-btn"
              onClick={() => setActiveTab('learn')}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'learn'
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              LEARN | सीखें
            </button>
            <button
              id="filter-earn-btn"
              onClick={() => setActiveTab('earn')}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'earn'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              EARN | कमाएं
            </button>
          </div>
        </div>

        {/* Dual Pillar Comparative Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* BOX 1: LEARN | सीखें */}
          {(activeTab === 'both' || activeTab === 'learn') && (
            <div 
              id="learn-section" 
              className={`glass-card rounded-2xl p-6 sm:p-8 border-t-4 border-t-[#0284C7] flex flex-col justify-between relative transition-all duration-300 hover:shadow-lg ${
                activeTab === 'learn' ? 'lg:col-span-2 max-w-4xl mx-auto w-full' : ''
              }`}
            >
              {/* Box Top Header */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/80">
                    Pillar 01 : Skill Development
                  </span>
                  
                  {/* Price Badge */}
                  <span className="text-xs font-bold badge-gold px-3 py-1 rounded-full">
                    Complete Course @ ₹17,000/-
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    LEARN <span className="text-slate-400 font-light font-editorial-serif italic">| सीखें</span>
                  </h3>
                  <p className="text-slate-600 text-sm mt-1 font-light">
                    Industry-curated live curriculum with 100% practical assignments, personal mentorship, and portfolio building.
                  </p>
                </div>

                {/* Course Items List */}
                <div className="space-y-4 mb-8">
                  {COURSES_DATA.map((course) => (
                    <div
                      key={course.id}
                      id={`course-card-${course.id}`}
                      className="p-4 rounded-xl bg-white/80 border border-slate-200/70 hover:bg-white hover:border-sky-300 hover:shadow-xs transition-all duration-200 group"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-[#0284C7]">
                          {getCourseIcon(course.iconName)}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-base font-bold text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
                              {course.title}
                            </h4>
                            <button
                              id={`course-info-btn-${course.id}`}
                              onClick={() => setSelectedCourseDetail(course)}
                              className="text-xs font-semibold text-slate-400 hover:text-sky-600 flex items-center gap-0.5 p-1 rounded hover:bg-sky-50"
                              title="View Syllabus & Highlights"
                            >
                              <Info className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Details</span>
                            </button>
                          </div>
                          
                          <p className="text-xs font-semibold text-sky-700 mb-1">
                            {course.subtitle}
                          </p>
                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-2">
                            {course.description}
                          </p>

                          {/* Highlights pills */}
                          <div className="flex flex-wrap gap-1.5">
                            {course.highlights.slice(0, 2).map((item, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/60"
                              >
                                <Check className="w-3 h-3 text-emerald-500" />
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* What's included note */}
                <div className="p-3.5 rounded-xl bg-sky-50/60 border border-sky-200/60 mb-6 text-xs text-sky-900 flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>
                    <strong>Includes:</strong> Live Training, Real Client Projects, Certified Course Completion Certificate, and Guaranteed Placement Assistance.
                  </span>
                </div>
              </div>

              {/* Box 1 CTA Button */}
              <div className="pt-2 border-t border-slate-100">
                <button
                  id="enroll-in-course-primary-btn"
                  onClick={() => onEnrollCourse('Full Course Bundle (@ ₹17,000/-)')}
                  className="w-full py-3.5 px-6 text-center font-semibold text-white bg-[#0284C7] hover:bg-sky-700 rounded-full accent-glow transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 group text-sm sm:text-base"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Enroll in Course @ ₹17,000/-</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {/* BOX 2: EARN | कमाएं */}
          {(activeTab === 'both' || activeTab === 'earn') && (
            <div 
              id="earn-section" 
              className={`glass-card rounded-2xl p-6 sm:p-8 border-t-4 border-t-emerald-500 flex flex-col justify-between relative transition-all duration-300 hover:shadow-lg ${
                activeTab === 'earn' ? 'lg:col-span-2 max-w-4xl mx-auto w-full' : ''
              }`}
            >
              {/* Box Top Header */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
                    Pillar 02 : Career & Hiring Drive
                  </span>

                  {/* Salary Badge */}
                  <span className="text-xs font-bold badge-green px-3 py-1 rounded-full">
                    Up to ₹49,000/Month (WFH)
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    EARN <span className="text-slate-400 font-light font-editorial-serif italic">| कमाएं</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Eligibility: Min. 12th Class Pass Required
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                      Freshers & Experienced Welcome
                    </span>
                  </div>
                </div>

                {/* Open Positions Grid Cards (6 Open Positions) */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Open Positions (Click to view role requirements)
                    </span>
                    <span className="text-xs font-semibold text-emerald-700">
                      35+ Immediate Seats
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {JOBS_DATA.map((job) => (
                      <div
                        key={job.id}
                        id={`job-card-${job.id}`}
                        onClick={() => setSelectedJobDetail(job)}
                        className="p-3.5 rounded-xl bg-white/80 border border-slate-200/70 hover:bg-white hover:border-emerald-300 hover:shadow-xs transition-all duration-200 cursor-pointer group flex flex-col justify-between"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            {getJobIcon(job.iconName)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-bold text-[#0F172A] group-hover:text-emerald-700 transition-colors truncate">
                                {job.title}
                              </h4>
                              <span className="text-[10px] bg-emerald-100/70 text-emerald-800 font-bold px-1.5 py-0.5 rounded shrink-0">
                                {job.openings} Open
                              </span>
                            </div>
                            <p className="text-xs font-bold text-emerald-700 mt-0.5">
                              {job.salaryRange.split('+')[0]}
                            </p>
                            <p className="text-[11px] text-slate-500 mt-0.5">
                              {job.workMode}
                            </p>
                          </div>
                        </div>

                        <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-600">
                          <span>View Duties</span>
                          <span className="text-emerald-600 font-bold group-hover:translate-x-0.5 transition-transform">
                            Details &rarr;
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Candidate note */}
                <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/60 mb-6 text-xs text-emerald-900 flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Hiring Guarantee:</strong> Fast interview schedule within 24 hours of form submission. Paid training provided for selected candidates.
                  </span>
                </div>
              </div>

              {/* Box 2 CTA Button */}
              <div className="pt-2 border-t border-slate-100">
                <button
                  id="apply-now-primary-btn"
                  onClick={() => onApplyJob('Work From Home Job Drive')}
                  className="w-full py-3.5 px-6 text-center font-semibold text-emerald-700 hover:text-white bg-white hover:bg-emerald-600 border-2 border-emerald-600 rounded-full transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 group text-sm sm:text-base shadow-xs"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Apply Now for Open Positions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Modal for Course Details */}
      {selectedCourseDetail && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div 
            id="course-details-modal"
            className="glass-card rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200/80 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                  Course Module
                </span>
                <h3 className="text-xl font-bold text-[#0F172A] mt-1">
                  {selectedCourseDetail.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  {selectedCourseDetail.subtitle}
                </p>
              </div>
              <button
                id="close-course-modal-btn"
                onClick={() => setSelectedCourseDetail(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                &times;
              </button>
            </div>

            <p className="text-sm text-slate-600 mb-4 leading-relaxed font-light">
              {selectedCourseDetail.description}
            </p>

            <div className="mb-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                What You Will Learn
              </h5>
              <div className="space-y-2">
                {selectedCourseDetail.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Tools & Platforms Mastered
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {selectedCourseDetail.tools.map((tool, idx) => (
                  <span key={idx} className="text-xs bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 bg-sky-50/80 rounded-xl mb-6 text-xs text-sky-900 flex justify-between items-center border border-sky-200/60">
              <span>Full Package Price: <strong>₹17,000/-</strong></span>
              <span>Duration: <strong>{selectedCourseDetail.duration}</strong></span>
            </div>

            <div className="flex gap-3">
              <button
                id="modal-enroll-course-btn"
                onClick={() => {
                  const title = selectedCourseDetail.title;
                  setSelectedCourseDetail(null);
                  onEnrollCourse(title);
                }}
                className="flex-1 py-3 bg-[#0284C7] hover:bg-sky-700 text-white font-semibold rounded-full text-sm accent-glow"
              >
                Enroll in {selectedCourseDetail.title}
              </button>
              <button
                id="modal-cancel-course-btn"
                onClick={() => setSelectedCourseDetail(null)}
                className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-full text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Job Details */}
      {selectedJobDetail && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div 
            id="job-details-modal"
            className="glass-card rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200/80 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {selectedJobDetail.workMode}
                </span>
                <h3 className="text-xl font-bold text-[#0F172A] mt-1">
                  {selectedJobDetail.title}
                </h3>
                <p className="text-sm font-bold text-emerald-600">
                  {selectedJobDetail.salaryRange}
                </p>
              </div>
              <button
                id="close-job-modal-btn"
                onClick={() => setSelectedJobDetail(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 text-lg font-bold"
              >
                &times;
              </button>
            </div>

            <div className="p-3 bg-slate-50/80 rounded-xl mb-4 text-xs space-y-1 border border-slate-200/60">
              <p className="text-slate-700">
                <strong>Eligibility:</strong> {selectedJobDetail.eligibility}
              </p>
              <p className="text-slate-700">
                <strong>Current Openings:</strong> {selectedJobDetail.openings} positions
              </p>
            </div>

            <div className="mb-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Key Responsibilities
              </h5>
              <div className="space-y-2">
                {selectedJobDetail.keyDuties.map((duty, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{duty}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Desired Skills
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {selectedJobDetail.skillsRequired.map((skill, idx) => (
                  <span key={idx} className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-md font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                id="modal-apply-job-btn"
                onClick={() => {
                  const title = selectedJobDetail.title;
                  setSelectedJobDetail(null);
                  onApplyJob(title);
                }}
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full text-sm shadow-md"
              >
                Apply for {selectedJobDetail.title}
              </button>
              <button
                id="modal-cancel-job-btn"
                onClick={() => setSelectedJobDetail(null)}
                className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-full text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
