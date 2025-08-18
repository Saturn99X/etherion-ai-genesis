import { useEffect, useState, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

const TypewriterText = ({ 
  text, 
  className = '', 
  speed = 50, 
  delay = 0,
  onComplete 
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setIsVisible(true);
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout: NodeJS.Timeout;
    let index = 0;

    const startTyping = () => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        index++;
        timeout = setTimeout(startTyping, speed);
      } else if (onComplete) {
        onComplete();
      }
    };

    timeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [isVisible, text, speed, delay, onComplete]);

  return (
    <div ref={elementRef} className={className}>
      {displayText}
      {isVisible && displayText.length < text.length && (
        <span className="animate-blink border-r-2 border-current ml-1"></span>
      )}
    </div>
  );
};

export default TypewriterText;