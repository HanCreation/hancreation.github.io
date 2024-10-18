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
      title: "Makemore Character Level Language Model (GPT)",
      description: "Created a simple GPT implementation inspired by Karpathy's Makemore to explore what powers ChatGPT. Built a bigram language model, then a Neural Network Model, using character look-up dictionaries, an embedding matrix, and one-hot encoding on learning the basics. Implemented neural network operations from scratch with PyTorch, avoiding torch.nn to understand the underlying math. Addressed challenges like vanishing gradients with He initialization and batch normalization. Finally, implemented simple GPT and trained the character-level GPT on an Indonesian Twitter poem dataset.",
      skills: ["Python", "PyTorch", "Neural Network Implementation", "Paper Reading", "Natural Language Processing", "Deep Learning"],  
      link: "https://github.com/HanCreation/makemore"
    },
    {
      title:"Narrative Nest - Team Project",
      description: "Narrative Nest is an AI Image Generator powered storyboard creator web-app for filmmakers. Designed to make process of creating storyboards easier and faster. Users can prompt an AI to generate storyboard frames using SDXL Lightning API, making storyboard creation quick and efficient. I was responsible for the UI/UX design, front-end development, and integration with the AI model using Gradio API.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Gradio", "UI/UX Design", "Front-End Development", "Teamwork", "Communication"],
      link: "https://hancreation.github.io/NarrativeNest-Demo/"
  
    },
    {
      title: "Monelytics - Team Project",
      description: "Monelytics is an AI prototype deployed on Streamlit as a web-based Python application designed for stock prediction. It can predict the closing prices of the big four banks in Indonesia. The accuracy of the predictions is measured using two main error metrics: RMSE (Root Mean Square Error) and MAE (Mean Absolute Error). The application uses various Machine Learning models, including Linear Regression, Support Vector Regression, Random Forest Regression, ARIMA, and Decision Tree Regression. It also employs several Deep Learning models, such as Convolutional Neural Networks (CNN), Artificial Neural Networks (ANN), Long Short-Term Memory (LSTM), and Prophet Time Series. I was responsible for data exploration, data pre-processing and feature engineering, linear regression fitting, LSTM training.",
      skills: ["Python", "SciKit Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit", "Machine Learning", "Deep Learning", "Stock Prediction", "Data Visualization", "Teamwork", "Communication"],
      link: "https://github.com/verrenangelinasaputra/Monelytics-Stock-Prediction"
    },
    {
      title: "NeuroCraft: Craft your own Neural Network, no code",
      description: "NeuroCraft is a web application that is suited for deep learning beginners to explore the fundamental of neural network and craft their own neural networks architechture without writing any code. This web-app is suited for deep learning beginners to explore the fundamental of neural network such as linear/dense layer, batch-normalization layer, activation function, drop out layer, train accuracy and test accuracy. Datasets provided are basic datasets which are Digit MNIST and Fashion-MNIST dataset.",
      skills: ["React", "TypeScript", "Python", "PyTorch", "TailwindCSS", "Flask", "Neural Network", "Deep Learning"],
      link: "https://github.com/HanCreation/NeuroCraft",
    },
    {
      title: "ResNet Image Classifier on CIFAR-10",
      description: "Exploring the ResNet architecture, image augmentation, and training an image classifier on the CIFAR-10 dataset using  PyTorch. Analyzed and compared different model architecture and the impact of data augmentation on model performance.",
      skills: ["Python", "PyTorch", "Convolutional Neural Networks", "Image Classification", "Data Augmentation", "Paper Reading", "Computer Vision", "Deep Learning"],
      link: "https://github.com/HanCreation/ResNet-PyTorch"
    },
    {
      title: 'Rebuilding Micrograd library from scratch',
      description: 'Rebuilding the Micrograd library from scratch to understand the underlying math and operations of a simple deep learning library. Implemented forward and backward propagation, gradient descent, and backpropagation using only Python Syntax.',
      skills: ['Python'],
      link: 'https://github.com/HanCreation/micrograd'
    },
    {
      title:"MNIST Digit Classifier: Building a Neural Network from Scratch",
      description: "Building a neural network from scratch to classify handwritten digits from the MNIST dataset. Implemented forward and backward propagation, gradient descent, and backpropagation using only Numpy and basic mathematical operations.",
      skills: ["Python", "NumPy", "Neural Network Implementation", "Paper Reading", "Deep Learning"],
      link: "https://github.com/HanCreation/ScratchNN_DigitMNIST"
    },
    {
      title: "Fine-Tuning Whisper-Tiny for Improving Speech Recognition Performance in France & Germany",
      description:"Experiment with fine-tuning the Whisper-Tiny model to improve speech recognition performance in France and Germany. There are 2 variant of models which were  fine-tuned on the French and German subsets. The model was evaluated on the test set and compared with the original model and the performance is improved.",
      skills: ["Python", "Hugging Face", "Speech Recognition", "Fine-Tuning", "Deep Learning", "Natural Language Processing"],
      link: "https://huggingface.co/collections/LiquAId/whisper-tiny-finetuning-experiment-6703a7d6c04fc0fe267ff5be"
    }
  
  ]

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
      <section id="skill" className="py-20">
        <div className="container mx-auto px-4">
          <div
            ref={ref}
            className={`space-y-20 ${inView ? 'fade-in is-visible' : 'fade-in'}`}
          >
            <div className="skills">
              <h2 className="text-4xl font-bold mb-8 text-center">Skills Gained from Projects</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {uniqueSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#0F0F0F] text-[#EAE0D5] px-4 py-2 rounded-full text-sm font-semibold"
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
                            className="bg-black text-[#C6AC8E] px-2 py-1 rounded text-xs"
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
                      className="inline-flex items-center text-[#EAE0D5] hover:text-white transition-colors text-xl"
                    >
                      View Project     <ExternalLink size={20} className="ml-2" />
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