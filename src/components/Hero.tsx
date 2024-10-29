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
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <img
          src="Han Creation 2021 Inverted Transparent .png"
          alt="Logo Han Creation"
          className={`w-auto h-12 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      <div className="parallax-content">
        <div
          ref={ref}
          className={`text-center space-y-6 transition-opacity duration-1000 delay-200 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src="11.png"
            alt="Dean Hans Felandio Setiadi Saputra"
            className="w-48 h-48 rounded-full mx-auto transition-opacity duration-1000 delay-400"
          />
          <h1 className="text-5xl md:text-7xl font-bold transition-opacity duration-1000 delay-600">
            Dean Hans Felandio Setiadi Saputra
          </h1>
          <p className="text-xl md:text-2xl text-[#C6AC8E] transition-opacity duration-1000 delay-800">
            Front-End Developer | Machine Learning Enthusiast | Data Enthusiast
          </p>
          <div className="flex justify-center space-x-4 transition-opacity duration-1000 delay-1000">
            <a href="https://github.com/HanCreation" target="_blank" rel="noopener noreferrer" className="text-[#C6AC8E] hover:text-[#EAE0D5] transition-colors" title="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/hans-felandio/" target="_blank" rel="noopener noreferrer" className="text-[#C6AC8E] hover:text-[#EAE0D5] transition-colors" title="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://huggingface.co/LiquAId" target="_blank" rel="noopener noreferrer" className="text-[#C6AC8E] hover:text-[#EAE0D5] transition-colors" title="Hugging Face">
            <span role="img" aria-label="hugging face" style={{ fontSize: '18px' }}>🤗</span>
            </a>
            
            <a href="mailto:hans.dean@yahoo.com" className="text-[#C6AC8E] hover:text-[#EAE0D5] transition-colors" title="Email">
              <Mail size={24} />
            </a>
            
          </div>
          <div>
            <a
              href="/ATS-CV-Dean_Hans.pdf"
              download
              className="bg-[#C6AC8E] text-[#1D1D1D] px-6 py-2 rounded-full font-semibold hover:bg-[#EAE0D5] transition-colors text-center"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Hero;
