import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { X, ExternalLink } from 'lucide-react';

interface Certificate {
  title: string;
  provider: string;
  imageUrl: string;
  websiteUrl: string;
}

const certificates: Certificate[] = [
  {
    title: "Generative AI Introduction",
    provider: "Google Cloud AI",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    websiteUrl: "https://cloud.google.com/ai-platform"
  },
  {
    title: "Generative AI Introduction",
    provider: "Google Cloud AI",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    websiteUrl: "https://cloud.google.com/ai-platform"
  },
  {
    title: "Generative AI Introduction",
    provider: "Google Cloud AI",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    websiteUrl: "https://cloud.google.com/ai-platform"
  },
];

interface SectionProps {
  id: string;
  title: string;
}

const Section: React.FC<SectionProps> = ({ id, title }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  const handleCardClick = (e: React.MouseEvent, certificate: Certificate) => {
    if (!(e.target as HTMLElement).closest('a')) {
      openModal(certificate);
    }
  };

  return (
    <Parallax speed={5}>
      <section id={id} className="py-20">
        <div className="container mx-auto px-4">
          <div
            ref={ref}
            className={`text-center ${inView ? 'fade-in is-visible' : 'fade-in'}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-[#22333D] rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={(e) => handleCardClick(e, cert)}
                >
                  <img src={cert.imageUrl} alt={cert.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-[#C6AC8E] mb-2">{cert.provider}</p>
                    <a
                      href={cert.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#C6AC8E] hover:text-[#EAE0D5] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit Website <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#22333D] p-4 rounded-lg max-w-3xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{selectedCertificate.title}</h3>
              <button onClick={closeModal} className="text-[#C6AC8E] hover:text-[#EAE0D5]">
                <X size={24} />
              </button>
            </div>
            <img 
              src={selectedCertificate.imageUrl} 
              alt={selectedCertificate.title} 
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 flex justify-between items-center">
              <p className="text-[#C6AC8E]">{selectedCertificate.provider}</p>
              <a
                href={selectedCertificate.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#C6AC8E] hover:text-[#EAE0D5] transition-colors"
              >
                Visit Website <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      )}
    </Parallax>
  );
};

export default Section;