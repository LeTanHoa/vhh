import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Knowledge from './components/Knowledge';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import QuickContactWidget from './components/QuickContactWidget';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [initialConsultationService, setInitialConsultationService] = useState('');

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenConsultation = (serviceName = '') => {
    setInitialConsultationService(serviceName);
    setConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F7F3] text-[#19241F] flex flex-col selection:bg-[#7BAE82]/30 selection:text-[#174C3C]">
      
      {/* Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <div id="home">
          <Hero
            onExploreServices={() => handleNavigate('services')}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        </div>

        {/* About Section */}
        <About
          onOpenConsultation={() => handleOpenConsultation('Tư vấn tổng quan giải pháp OCOP')}
        />

        {/* Services Section */}
        <Services
          onOpenConsultation={(srv) => handleOpenConsultation(srv)}
        />

        {/* Projects / Portfolio Section */}
        <Projects
          onOpenConsultation={(srv) => handleOpenConsultation(srv)}
        />

        {/* 5-Step Process Section */}
        <Process
          onOpenConsultation={() => handleOpenConsultation('Khởi động dự án')}
        />

        {/* Why Choose Us */}
        <WhyChooseUs
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Knowledge & Articles Section */}
        <Knowledge
          onOpenConsultation={(srv) => handleOpenConsultation(srv)}
        />

        {/* FAQ Section */}
        <FAQSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Contact & Consultation Form Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Global Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialService={initialConsultationService}
      />

      {/* Floating Quick Contact Widget (Hotline, Zalo, ScrollTop) */}
      <QuickContactWidget
        onOpenConsultation={() => handleOpenConsultation()}
      />

    </div>
  );
}
