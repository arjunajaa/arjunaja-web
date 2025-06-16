import React from 'react';

interface NavbarProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleMenu, isMenuOpen }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end p-6 bg-transparent text-white">
      <div className="flex items-center">
        <button
          onClick={toggleMenu}
          className="p-2 border border-gray-700 rounded-full bg-black hover:bg-gray-800 transition-colors"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
