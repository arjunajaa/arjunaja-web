'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from './Button'; // Import the Button component

const Hero = () => {
  const [isInitialPhotoView, setIsInitialPhotoView] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialPhotoView(false); // Transition from photo to text view on mobile/tablet
    }, 1500); // Duration of initial photo view (1.5 seconds)
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">

      {/* Mobile & Tablet Initial Photo View Layer */}
      <div
        className={`xl:hidden absolute inset-0 z-30 flex items-center justify-center bg-black
                    transition-opacity duration-500 ease-in-out
                    ${isInitialPhotoView ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="relative w-[70vw] h-[70vh] max-w-[300px] max-h-[450px] sm:max-w-[400px] sm:max-h-[600px] md:max-w-[500px] md:max-h-[750px]">
          <Image
            src="/hero/profile.png"
            alt="Profile Photo Mobile"
            fill
            className="object-contain filter grayscale contrast-125"
            priority
          />
        </div>
      </div>

      {/* Text Content Layer (White background part) */}
      <div
        id="hero-text-layer" // Added ID for specific styling
        className={`absolute inset-0 z-20 bg-white text-black flex flex-col justify-center items-start 
                    p-8 sm:p-16 lg:p-20 xl:p-24
                    transition-opacity duration-700 ease-in-out xl:transition-none
                    ${isInitialPhotoView ? 'opacity-0 xl:opacity-100' : 'opacity-100'}
                  `}
      >
        {/* Content inside the white layer */}
        <div className="max-w-3xl">
          <p className="text-lg font-medium md:text-xl text-black mb-3 font-inter-tight leading-snug">Hello! I&apos;m Arju Naja.</p>
          <h1 className="text-[3.375rem] sm:text-5xl md:text-6xl xl:text-[3.375rem] font-bold leading-tight text-black mb-8 font-inter-tight">
            Full-stack Developer<br />
            weaving logic<br />
            and artistry<br />
            into
            <span className="font-extrabold text-gray-600"> digital experiences.</span>
          </h1>
          <div className="mt-8 flex flex-col space-y-4"> {/* Changed to flex-col and added space-y-4 for vertical spacing */}
            <div className="flex items-center space-x-4"> {/* This div now only contains social icons */}
              <a href="https://wa.me/6282111555860" target="_blank" rel="noopener noreferrer" className="group">
                <Image src="/hero/whatsapp-icon.png" alt="WhatsApp" width={28} height={28} className="group-hover:opacity-75 group-hover:scale-110 transform transition-all duration-300" />
              </a>
              <a href="https://instagram.com/arjunaja_" target="_blank" rel="noopener noreferrer" className="group">
                <Image src="/hero/instagram-icon.png" alt="Instagram" width={28} height={28} className="group-hover:opacity-75 group-hover:scale-110 transform transition-all duration-300" />
              </a>
              <a href="https://github.com/arjunajaa" target="_blank" rel="noopener noreferrer" className="group">
                <Image src="/hero/github-icon.png" alt="GitHub" width={28} height={28} className="group-hover:opacity-75 group-hover:scale-110 transform transition-all duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/arju-naja" target="_blank" rel="noopener noreferrer" className="group">
                <span className="inline-block align-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="group-hover:opacity-75 group-hover:scale-110 transform transition-all duration-300">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
                  </svg>
                </span>
              </a>
            </div>
            <div> {/* New div for the button */}
              <Button
                text="Download CV"
                href="/CV.pdf"
                download="Arju_Naja_CV.pdf"
                className="text-black border-black hover:bg-black hover:text-white text-sm py-2 px-4 mt-4" // Added mt-4 for spacing
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Photo (positioned in the black area revealed by clip-path) */}
      <div className="hidden xl:flex absolute inset-0 z-10 items-end justify-end pr-[5%] 2xl:pr-[10%] pt-24 pointer-events-none">
        <div className="w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/3 xl:w-1/4 pointer-events-auto">
          <Image
            src="/hero/profile.png"
            alt="arjunaja"
            width={420}
            height={630}
            className="object-contain w-full h-auto filter grayscale contrast-125"
            priority
          />
        </div>
      </div>

      {/* CSS for desktop clip-path. This targets the #hero-text-layer */}
      <style jsx global>{`
        @media (min-width: 1280px) { /* Tailwind 'xl' breakpoint */
          #hero-text-layer {
            clip-path: polygon(0% 0%, 65% 0%, 50% 100%, 0% 100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
