'use client';

import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .say-hello-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        /* Skills section animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .skill-circle {
          transition: all 0.3s ease;
        }
        
        .skill-circle:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .award-card:hover Card {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        /* Testimonial section styles */
        .testimonials-section Card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .testimonials-section Card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .skill-circles {
            gap: 1rem;
          }
          
          .skill-circle {
            width: 110px !important;
            height: 110px !important;
          }
        }
        
        @media (max-width: 480px) {
          .skill-circle {
            width: 100px !important;
            height: 100px !important;
          }
        }
      `}} />
    </main>
  );
}
