import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlobSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M433.5,332Q423,414,354,437Q285,460,229.5,417.5Q174,375,123.5,358.5Q73,342,67.5,274Q62,206,108.5,159.5Q155,113,212.5,103.5Q270,94,334.5,103Q399,112,429.5,178.5Q460,245,433.5,332Z"
      fill="currentColor"
    />
  </svg>
);

const discussionImages = [
  {
    src: "/images/descusion/unnamed.jpg",
    alt: "Discussion client rénovation",
    className: "top-[15%] left-[-5%] w-[28%] sm:w-[30%] z-10 -rotate-12 hover:z-50 hover:scale-110 transition-all duration-500",
  },
  {
    src: "/images/descusion/unnamed (1).jpg",
    alt: "Collaboration équipe projet",
    className: "top-[2%] left-[18%] w-[30%] sm:w-[32%] z-20 -rotate-6 hover:z-50 hover:scale-110 transition-all duration-500",
  },
  {
    src: "/images/descusion/687eb1c9-06c1-4ad8-88ba-380a39065162.png",
    alt: "Signature électronique devis",
    className: "top-[2%] left-[45%] w-[30%] sm:w-[32%] z-30 rotate-6 hover:z-50 hover:scale-110 transition-all duration-500",
  },
  {
    src: "/images/descusion/af5a2f8b-c75e-433e-9cab-61b0bcb7e712.png",
    alt: "Validation fin de chantier",
    className: "top-[15%] left-[70%] w-[28%] sm:w-[30%] z-40 rotate-12 hover:z-50 hover:scale-110 transition-all duration-500",
  },
];

const MobileAppShowcase = () => {
  return (
    <section className="relative z-20 bg-slate-50 dark:bg-slate-900 py-12 lg:py-16 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 text-center mb-16">
        <span className="text-cyan-600 dark:text-cyan-400 text-base font-medium uppercase tracking-wider">
          Discussion & Échange
        </span>
        <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Contactez-nous
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          Une question sur votre projet ? Besoin d'un conseil technique ? Notre équipe est à votre écoute pour échanger et vous accompagner dans toutes vos démarches de rénovation.
        </p>

        <div className="mt-8">
          <Link
            href="https://linktr.ee/FlashServices78"
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-600/30"
          >
            Nous contacter
          </Link>
        </div>
      </div>

      <div className="relative w-full max-w-[1200px] h-[400px] sm:h-[500px] md:h-[600px] mx-auto perspective-1000">
        {/* Background Blob - Solid and positioned behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0">
          <BlobSvg className="w-full h-full text-cyan-100/50 dark:text-[#0e4c5e] dark:opacity-60 animate-pulse-slow transition-colors duration-300" />
        </div>

        {discussionImages.map((img, i) => (
          <div
            key={i}
            className={`absolute ${img.className} drop-shadow-xl dark:drop-shadow-2xl`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={750}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileAppShowcase;