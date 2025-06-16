'use client';

import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SplashScreen from "@/components/SplashScreen";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true); // Initial splash

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handler for when a menu item is clicked and navigation should occur
  const handleMenuNavigation = () => {
    setIsMenuOpen(false); // Close the menu
    setShowSplash(true);   // Show splash screen

    // Hide splash screen after a short delay
    // The actual navigation to the section is handled by the href in Menu.tsx
    // and smooth scroll in Menu.tsx's handleLinkClick
    setTimeout(() => {
      setShowSplash(false);
    }, 700); // Adjust delay as needed (e.g., 700ms)
  };

  // Effect to toggle body scroll based on menu state
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [isMenuOpen]);

  // Effect for the initial splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500); // Initial splash screen visible for 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-black">
      <SplashScreen isVisible={showSplash} />
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      {isMenuOpen && <Menu onClose={handleMenuNavigation} />} {/* Pass the handler here */}
      {/* Wrap sections with IDs for navigation */}
      <div className="w-full">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
    </main>
  );
}
