import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';

const EducationExperience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Parallax speed={5}>
      <section id="edu" className="py-20">
        <div className="container mx-auto px-4">
          <div
            ref={ref}
            className={`grid md:grid-cols-2 gap-12 ${inView ? 'fade-in is-visible' : 'fade-in'}`}
          >
            <div className="education">
              <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
              <div className="bg-[#22333D] rounded-lg p-5 text-center">
                <h3 className="text-2xl font-bold mb-2">Binus University</h3>
                <p className="text-[#C6AC8E] mb-4 text-xl">2022 - Present</p>
                <h4 className="text-3xl font-bold mb-2">COMPUTER SCIENCE</h4>
                
              </div>
            </div>
            <div className="experience">
              <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
              <div className="space-y-6">
                <div className="bg-[#22333D] rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">Scholarship Student Mentor</h3>
                  <p className="text-[#C6AC8E] mb-2">2024 - Present</p>
                  <p className="text-sm">SASC Binus University Alam Sutera, Tangerang</p>
                  {/* <p></p> */}
                </div>
                <div className="bg-[#22333D] rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">Creative & Design Activist</h3>
                  <p className="text-[#C6AC8E] mb-2">2023 - Present</p>
                  <p className="text-sm">Himpunan Mahasiswa Teknik Informatika (HIMTI) - BINUS UNIVERSITY</p>
                </div>
                <div className="bg-[#22333D] rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">Design & Documentation Division</h3>
                  <p className="text-[#C6AC8E] mb-2">2023</p>
                  <p className="text-sm">TECHNO ARCADE HIMTI BINUS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default EducationExperience;