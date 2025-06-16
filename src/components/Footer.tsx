import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm font-inter-tight mb-4 md:mb-0">
          &copy; {currentYear} Arju Naja. All rights reserved.
        </p>
        {/* You can add more links or information here if needed */}
        {/* <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400 transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-300">Terms of Service</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
