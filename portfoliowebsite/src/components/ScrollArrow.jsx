import React, { useRef, useEffect } from 'react';

const ScrollArrow = ({ targetRef }) => {
  const arrowRef = useRef(null);

  useEffect(() => {
    const checkScroll = () => {
      const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
      const maxScroll = scrollHeight - clientHeight;

      arrowRef.current.style.opacity = 1 - scrollTop / maxScroll;
    };

    window.addEventListener('scroll', checkScroll);

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleClick = () => targetRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <div ref={arrowRef} className="scroll-arrow" onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default ScrollArrow;