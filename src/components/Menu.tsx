import React from 'react';

interface MenuProps {
  onClose: (sectionIdToScrollTo: string) => void; // Function to close the menu and trigger splash/scroll
}

const Menu: React.FC<MenuProps> = ({ onClose }) => {
  const handleLinkClick = (sectionId: string) => {
    onClose(sectionId); // Call the passed onClose function with the sectionId
    // Smooth scroll will be triggered after splash screen in page.tsx
  };



  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col justify-between p-6 text-white pt-20 md:pt-24">
      <div className="flex justify-end">
        {/* Close button can be added here if needed */}
      </div>
      <nav className="flex flex-col space-y-4">
        {[
          { name: 'Home.', id: '01', sectionId: 'home' }, // Changed to match typical id format
          { name: 'About.', id: '02', sectionId: 'about' },
          { name: 'Projects.', id: '03', sectionId: 'projects' },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.sectionId}`} // Use sectionId for href
            onClick={() => handleLinkClick(item.sectionId)} // Pass sectionId to handler
            className="group flex items-center justify-between py-4 border-b border-gray-700 hover:border-gray-500 transition-colors"
          >
            <span className="text-5xl font-bold group-hover:text-gray-300 transition-colors">
              {item.name} <span className="text-lg text-gray-500">({item.id})</span>
            </span>
            <span className="p-2 border border-gray-700 rounded-full group-hover:bg-gray-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>
        ))}
      </nav>

    </div>
  );
};

export default Menu;
