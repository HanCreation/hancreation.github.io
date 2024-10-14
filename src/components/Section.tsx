import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import { X, ExternalLink } from "lucide-react";

interface Certificate {
  title: string;
  provider: string;
  imageUrl: string;
  websiteUrl: string;
}

const certificates: Certificate[] = [
  {
    title: 'Belajar Data Science',
    provider: "Dicoding Indonesia",
    imageUrl:
      "BelajarDataScience.jpg",
    websiteUrl: "https://www.dicoding.com/certificates/JLX14G7EJX72",
  },
  {
    title: "Introduction to Machine Learning US",
    provider: "Great Learning",
    imageUrl:
      "https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/3876642/original/Dean_Hans_Felandio_Setiadi_Saputra20231226-71-mixrcg.jpg",
    websiteUrl: "https://www.mygreatlearning.com/certificate/YEAAYDUN",
  },
  {
    title: "What is Generative AI?",
    provider: "LinkedIn Learning",
    imageUrl: 'WhatIsGenAI.png',
    websiteUrl:"https://www.linkedin.com/learning/certificates/02e96d009bbedb5e5cde71636db7ee00169e523fc3b7b7e10ce332ff410cedc5"
  },
  {
    title: "Introduction to Generative AI",
    provider: "Coursera - Google Cloud",
    imageUrl:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~3XC45U8DPQSS/CERTIFICATE_LANDING_PAGE~3XC45U8DPQSS.jpeg",
    websiteUrl: "https://www.coursera.org/account/accomplishments/verify/3XC45U8DPQSS",
  },
  {
    title: "Implementasi Data Science dalam Dunia Sepak Bola",
    provider: "Shift Academy",
    imageUrl: 'ImplementasiDataScience.png',
    websiteUrl: 'ImplementasiDataScience.png',
  }
];

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = ({ title }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  const handleCardClick = (e: React.MouseEvent, certificate: Certificate) => {
    if (!(e.target as HTMLElement).closest("a")) {
      openModal(certificate);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("backdrop")) {
      closeModal();
    }
  };

  return (
    <Parallax speed={5}>
      <section id="cert" className="py-20">
        <div className="container mx-auto px-4">
          <div
            ref={ref}
            className={`text-center ${
              inView ? "fade-in is-visible" : "fade-in"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-[#22333D] rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={(e) => handleCardClick(e, cert)}
                >
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-[#C6AC8E] mb-2">{cert.provider}</p>
                    <a
                      href={cert.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#EAE0D5] hover:text-white transition-colors text-lg"
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
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop"
          onClick={handleBackdropClick}
        >
          <div className="bg-[#22333D] p-4 rounded-lg max-w-3xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">
                {selectedCertificate.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-[#C6AC8E] hover:text-[#EAE0D5]"
              >
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
