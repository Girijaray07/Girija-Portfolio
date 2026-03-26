import React, { useState, useEffect } from 'react';
import './ConsoleTypewriter.css';

const ConsoleTypewriter = ({
  words = ['World', 'Coders', 'Folks', 'Developers', 'Friends'],
  prefix = '// Hello, ',
  speed = 60,
  deleteSpeed = 30,
  delayBetweenWords = 1800,
  className = ''
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      // Typing
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      }
    } else {
      // Deleting
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex, words, speed, deleteSpeed, delayBetweenWords]);

  return (
    <span className={`console-typewriter ${className}`}>
      <span className="console-prompt">{'>'}</span>
      <span className="console-text">{prefix}{displayedText}</span>
      <span className="console-cursor">_</span>
    </span>
  );
};

export default ConsoleTypewriter;