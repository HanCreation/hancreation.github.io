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
        { id: 'edu', name: 'Education & Experience' },
        { id: 'skill', name: 'Skills & Projects' },
        { id: 'cert', name: 'Certificates, Courses, and Webinar Attended' },
      ];

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });

      setActiveSection(currentSection ? currentSection.name : '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'edu', name: 'Education & Experience' },
    { id: 'skill', name: 'Skills & Projects' },
    { id: 'cert', name: 'Certificates, Courses, and Webinar Attended' },
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
        behavior: 'smooth',
      });
      setActiveSection(navItems.find(item => item.id === sectionId)?.name || '');
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
            <img src="/Han Creation Logo 2021 transparent.png" alt="DHS" className="h-8 w-auto mr-10" />
          </a>
          <div className="hidden md:flex items-center w-full justify-between">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={getNavItemClass(item.name)}
                >
                  {item.name}
                </button>
              ))}
            </div>
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
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-[#C6AC8E] transition-colors"
              >
                {item.name}
              </button>
            ))}
            <a
              href="CV - Dean Hans-1.pdf"
              download
              className="bg-[#C6AC8E] text-[#1D1D1D] px-6 py-2 rounded-full font-semibold hover:bg-[#EAE0D5] transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
