import React from 'react';

interface GradientTextProps {
  text: string;
  className?: string;
}

const AnimatedGradientText: React.FC<GradientTextProps> = ({ text, className = "" }) => {
  return (
    <span className="relative inline-block">
      <span className={`
        animate-gradient-x 
        bg-gradient-to-r from-brand-strong via-brand to-brand-strong
        bg-[length:200%_auto] 
        bg-clip-text 
        text-transparent 
        font-bold
      ${className}`}>
        {text}
      </span>
    </span>
  );
};

export default AnimatedGradientText;