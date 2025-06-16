import React from 'react';
import Button from './Button'; // Import the Button component

const Projects = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col justify-center items-center py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-center">
      <p className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight sm:leading-tight font-inter-tight">
        Check Out My{' '}
        <a href="https://github.com/arjunajaa" className="underline hover:text-gray-300">
          Digital Playground
        </a>
        .
      </p>
      <p className="text-l sm:text-xl font-normal text-white mb-4 leading-tight sm:leading-tight font-inter-tight">
        Got a great idea?
      </p>
      <p className="text-4xl sm:text-5xl font-bold text-white leading-tight sm:leading-tight font-inter-tight">
        Let&apos;s cook!
      </p>
      <div className="mt-8">
        <Button 
          text="Collaborate"
          href="https://wa.me/6282111555860" 
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </section>
  );
};

export default Projects;
