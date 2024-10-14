import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Smile } from 'lucide-react';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Parallax speed={-10}>
      <div className="parallax-content">
        <div
          ref={ref}
          className={`text-center space-y-6 ${inView ? 'fade-in is-visible' : 'fade-in'}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            Dean Hans Felandio Setiadi Saputra
          </h1>
          <p className="text-xl md:text-2xl text-[#C6AC8E]">
            Front-End Developer | Machine Learning Enthusiast | Data Enthusiast
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-[#C6AC8E] hover:text-[#EAE0D5] transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-[#C6AC8E] hover:text-[#EAE0D5] transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-[#C6AC8E] hover:text-[#EAE0D5] transition-colors">
              <Smile size={24} />
            </a>
            <a href="#" className="text-[#C6AC8E] hover:text-[#EAE0D5] transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Hero;