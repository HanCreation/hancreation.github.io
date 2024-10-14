import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'education-experience', name: 'Education & Experience' },
        { id: 'skills-and-projects', name: 'Skills & Projects' },
        { id: 'certifications', name: 'Certificates, Courses, and Webinar Attended' },
      ];

      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      setActiveSection(currentSection ? currentSection.name : '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'Education & Experience',
    'Skills & Projects',
    'Certificates, Courses, and Webinar Attended'
  ];

  const getNavItemClass = (item: string) => {
    return `hover:text-[#C6AC8E] transition-colors pb-1 ${
      activeSection === item ? 'border-b-2 border-[#C6AC8E]' : ''
    }`;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      ref={ref}
      className={`sticky top-0 z-50 bg-[#22333D] py-4 ${inView ? 'fade-in is-visible' : 'fade-in'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            <img src="/path-to-your-logo.png" alt="DHS" className="h-8" />
          </a>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/ & /g, '-').replace(/, /g, '-'))}
                className={getNavItemClass(item)}
              >
                {item}
              </button>
            ))}
            <button className="bg-[#C6AC8E] text-[#1D1D1D] px-6 py-2 rounded-full font-semibold hover:bg-[#EAE0D5] transition-colors">
              Download CV
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#22333D] py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/ & /g, '-').replace(/, /g, '-'))}
                className="hover:text-[#C6AC8E] transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="bg-[#C6AC8E] text-[#1D1D1D] px-6 py-2 rounded-full font-semibold hover:bg-[#EAE0D5] transition-colors">
              Download CV
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;