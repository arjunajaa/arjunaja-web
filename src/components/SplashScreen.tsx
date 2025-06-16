import React from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  isVisible: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isVisible }) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ease-in-out ${ 
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative w-48 h-48 md:w-64 md:h-64 animate-pulse filter grayscale">
        <Image
          src="/hero/profile.png"
          alt="Loading profile"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default SplashScreen;
