import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';

const SkillsAndTools: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillsData = [
    {
      name: 'Front-End Web Development',
      skills: [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
      ],
    },
    {
      name: 'Machine Learning & Deep Learning',
      skills: [
        { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'Scikit-Learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', style: { backgroundColor: '#FFFFFF' } },
        { name: 'Tensorflow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
      ],
    },
    {
      name: 'Data Science',
      skills: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', style: { backgroundColor: '#FFFFFF' } },
        { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'Matplotlib', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
        { name: 'Seaborn', icon: 'https://seaborn.pydata.org/_static/logo-wide-lightbg.svg', style: { backgroundColor: '#FFFFFF' } },
      ],
    },
  ];

  return (
    <Parallax speed={5}>
      <section id="skills-and-tools" className="py-20 bg-[#1D1D1D]">
        <div className="container mx-auto px-4">
          <div
            ref={ref}
            className={`space-y-12 ${inView ? 'fade-in is-visible' : 'fade-in'}`}
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-[#EAE0D5]">Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillsData.map((category) => (
                <div key={category.name} className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#C6AC8E] text-center">{category.name}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center">
                        <img src={skill.icon} alt={skill.name} className="w-16 h-16" style={skill.style ? skill.style : {}} />
                        <span className="mt-2 text-sm text-center text-[#EAE0D5]">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default SkillsAndTools;
