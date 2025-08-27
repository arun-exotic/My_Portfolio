import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalTypingProps {
  texts: string[];
  className?: string;
}

const TerminalTyping: React.FC<TerminalTypingProps> = ({ texts, className = "" }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      // If word is complete
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`font-mono ${className}`}>
      <span className="glow-text text-4xl md:text-6xl lg:text-7xl font-bold">
        {currentText}
      </span>
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        className="text-primary text-4xl md:text-6xl lg:text-7xl"
      >
        |
      </motion.span>
    </div>
  );
};

export default TerminalTyping;