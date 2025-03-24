'use client'

// components/CustomCursor.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);

  useEffect(() => {
    interface MouseEventWithPage extends MouseEvent {
      pageX: number;
      pageY: number;
    }

    const handleMouseMove = (e: MouseEventWithPage) => {
      gsap.to(bigBallRef.current, {
      duration: 0.4,
      x: e.pageX - 15,
      y: e.pageY - window.scrollY - 15,
      });
      gsap.to(smallBallRef.current, {
      duration: 0.1,
      x: e.pageX - 5,
      y: e.pageY - window.scrollY - 7,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(bigBallRef.current, { duration: 0.3, scale: 4 });
    };

    const handleMouseLeave = () => {
      gsap.to(bigBallRef.current, { duration: 0.3, scale: 1 });
    };

    document.addEventListener('mousemove', handleMouseMove);
    const hoverables = document.querySelectorAll('.hoverable');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="pointer-events-none">
      {/* Big ball */}
      <div
        ref={bigBallRef}
        className="fixed top-0 left-0 mix-blend-difference z-[1000]"
      >
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0" fill="#f7f8fa" />
        </svg>
      </div>
      {/* Small ball */}
      <div
        ref={smallBallRef}
        className="fixed top-0 left-0 mix-blend-difference z-[1000]"
      >
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0" fill="#f7f8fa" />
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;