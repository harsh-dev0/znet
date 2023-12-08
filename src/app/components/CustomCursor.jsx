'use client'

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY, target } = e;
      setCursorPosition({ x: clientX, y: clientY });
      setIsPointer(
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer' ||
        target.classList.contains('clickable-link')
      );
      setIsMoving(true);

      setTimeout(() => {
        setIsMoving(false);
      }, 300);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorStyle = {
    left: `${cursorPosition.x}px`,
    top: `${cursorPosition.y}px`,
    transition: 'opacity 0.3s ease-in-out',
    opacity: isPointer ? 0 : 1,
  };

  const outlineStyle = {
    left: `${cursorPosition.x}px`,
    top: `${cursorPosition.y}px`,
    transform: `translate(-50%, -50%) scale(${isPointer ? 2 : 1.5})`,
    transition: `left ${isMoving ? '0.1s' : '0.3s'} cubic-bezier(0.25, 0.8, 0.25, 1), top ${
      isMoving ? '0.1s' : '0.3s'
    } cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.15s ease-in-out`,
    opacity: isPointer ? 0 : 1,
  };

  return (
    <>
      <div
        className="cursor-dot transition-transform duration-300 ease-in-out pointer-events-none"
        style={{ ...cursorStyle }}
      ></div>
      <div
        className="cursor-outline ease-in-out pointer-events-none"
        style={{ ...outlineStyle }}
      ></div>
    </>
  );
};

export default CustomCursor;
