import { useState, useEffect, memo } from 'react';
import './TypeWriter.css';

interface TypeWriterProps {
  text: string;
  highlightText?: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const TypeWriter = memo(({ 
  text, 
  highlightText = '', 
  speed = 10, 
  delay = 250,
  className = '' 
}: TypeWriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const fullText = highlightText ? `${text} ${highlightText}` : text;

  useEffect(() => {
    // Delay before starting
    const startTimeout = setTimeout(() => {
      if (currentIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + fullText[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else if (currentIndex === fullText.length && !isComplete) {
        setIsComplete(true);
      }
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [currentIndex, fullText, speed, delay, isComplete]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const renderText = () => {
    if (!highlightText) {
      return displayedText;
    }

    const textLength = text.length;
    const displayedLength = displayedText.length;

    if (displayedLength <= textLength) {
      return displayedText;
    }

    const beforeHighlight = text;
    const highlightPart = displayedText.slice(textLength + 1);

    return (
      <>
        {beforeHighlight} <span className="highlight">{highlightPart}</span>
      </>
    );
  };

  return (
    <h1 className={`typewriter ${className}`}>
      {renderText()}
      <span className={`typewriter-cursor ${showCursor ? 'visible' : ''}`}>|</span>
    </h1>
  );
});

TypeWriter.displayName = 'TypeWriter';

export default TypeWriter;
