import React, { useMemo } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  skills: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "ResNet Image Classifier on CIFAR-10",
    description: "Exploring the ResNet architecture, image augmentation, and training an image classifier on the CIFAR-10 dataset using PyTorch. Analyzed and compared different model architecture and the impact of data augmentation on model performance.",
    skills: ["Python", "PyTorch", "Convolutional Neural Networks", "Image Classification", "Data Augmentation", "Paper Reading", "Computer Vision", "Deep Learning"],
    link: "https://example.com/project1"
  },
  {
    title: "Another Project",
    description: "Description of another project.",
    skills: ["React", "TypeScript", "TailwindCSS"],
    link: "https://example.com/project2"
  },
  // Add more projects here
];

const SkillsAndProjects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const uniqueSkills = useMemo(() => {
    const skillSet = new Set(projects.flatMap(project => project.skills));
    return Array.from(skillSet);
  }, []);

  return (
    <Parallax speed={5}>
      <section id="skills-and-projects" className="py-20">
        <div className="container mx-auto px-4">
          <div
            ref={ref}
            className={`space-y-20 ${inView ? 'fade-in is-visible' : 'fade-in'}`}
          >
            <div className="skills">
              <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {uniqueSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#22333D] text-[#EAE0D5] px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="projects">
              <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="bg-[#22333D] rounded-lg p-6 flex flex-col">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm mb-4 flex-grow">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Tools & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-[#1D1D1D] text-[#C6AC8E] px-2 py-1 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#C6AC8E] hover:text-[#EAE0D5] transition-colors"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default SkillsAndProjects;