import React from 'react';

interface MenuProps {
  onClose: (sectionIdToScrollTo: string) => void; // Function to close the menu and trigger splash/scroll
}

const Menu: React.FC<MenuProps> = ({ onClose }) => {
  const handleLinkClick = (sectionId: string) => {
    onClose(sectionId); // Call the passed onClose function with the sectionId
    // Smooth scroll will be triggered after splash screen in page.tsx
  };

  const socialLinks = [
    { name: 'INSTAGRAM', url: 'https://instagram.com/arjunaja_' },
    { name: 'WHATSAPP', url: 'https://wa.me/6282111555860' },
    { name: 'GITHUB', url: 'https://github.com/arjunajaa' },
    { name: 'EMAIL', url: 'mailto:aarjunaja@gmail.com' },
  ];

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
      <div className="mt-auto pt-10">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm text-gray-400 mb-2">Follow me.</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" // Open in new tab
                  rel="noopener noreferrer" // Security measure for target="_blank"
                  className="text-sm hover:underline flex items-center"
                >
                  {social.name}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
