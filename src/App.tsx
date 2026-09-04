import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DualPillar } from './components/DualPillar';
import { LeadCaptureForm } from './components/LeadCaptureForm';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { IntentType } from './types';

export default function App() {
  const [formIntent, setFormIntent] = useState<IntentType>('learn');
  const [selectedItem, setSelectedItem] = useState<string>('Full Course Package (@ ₹17,000/-)');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectIntent = (intent: IntentType) => {
    setFormIntent(intent);
    if (intent === 'learn') {
      setSelectedItem('Full Course Package (@ ₹17,000/-)');
    } else {
      setSelectedItem('Work From Home Job Drive');
    }
    scrollToSection('lead-form-section');
  };

  const handleEnrollCourse = (courseTitle?: string) => {
    setFormIntent('learn');
    if (courseTitle) {
      setSelectedItem(courseTitle);
    }
    scrollToSection('lead-form-section');
  };

  const handleApplyJob = (jobTitle?: string) => {
    setFormIntent('earn');
    if (jobTitle) {
      setSelectedItem(jobTitle);
    }
    scrollToSection('lead-form-section');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col selection:bg-sky-100 selection:text-sky-900">
      {/* Navigation Bar */}
      <Navbar onSelectIntent={handleSelectIntent} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreCourses={() => scrollToSection('learn-section')}
          onViewJobs={() => scrollToSection('earn-section')}
        />

        {/* Dual Pillar: LEARN & EARN */}
        <DualPillar
          onEnrollCourse={handleEnrollCourse}
          onApplyJob={handleApplyJob}
        />

        {/* Interactive Lead Capture / Application Form */}
        <LeadCaptureForm
          initialIntent={formIntent}
          initialSelection={selectedItem}
        />

        {/* About Us Section */}
        <AboutUs />

        {/* Contact Information & Help Desk */}
        <ContactSection />
      </main>

      {/* Footer Section */}
      <Footer
        onNavigate={scrollToSection}
        onOpenEnrollment={() => handleEnrollCourse('Full Course Package (@ ₹17,000/-)')}
        onOpenJobApply={() => handleApplyJob('Work From Home Job Drive')}
      />

      {/* Floating Call & Action Bar */}
      <FloatingActions
        onQuickApply={() => scrollToSection('lead-form-section')}
      />
    </div>
  );
}
