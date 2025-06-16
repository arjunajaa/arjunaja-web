import React from 'react';

interface ButtonProps {
  text: string;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  download?: string | boolean; // Added download prop
}

const Button: React.FC<ButtonProps> = ({ text, href, target, rel, className, download }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      download={download} // Pass download prop to a tag
      className={`
        inline-block bg-transparent font-semibold 
        py-3 px-8 rounded-full border
        transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-opacity-50
        ${className} // Default classes will be applied, specific text/border/hover colors come from className
      `}
    >
      {text}
    </a>
  );
};

export default Button;
