import React, { useEffect, useRef, useState } from 'react';

const Basic: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMove(e: PointerEvent) {
      if (!divRef.current) return;

      if (e) {
        const parentRect = divRef.current.getBoundingClientRect();
        const x = e.clientX - parentRect.left;
        const y = e.clientY - parentRect.top;
        // Constrain to parent boundaries
        const constrainedX = Math.max(0, Math.min(x, parentRect.width - 20));
        const constrainedY = Math.max(0, Math.min(y, parentRect.height - 20));

        setPosition({ x: constrainedX, y: constrainedY });
      }
    }
    window.addEventListener('pointermove', handleMove);
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, []);

  return (
    <div
      style={{ position: 'relative', width: '100%', height: '300px', cursor: 'none' }}
      ref={divRef}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'pink',
          borderRadius: '50%',
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: 'none',
          left: 0,
          top: 0,
          width: 40,
          height: 40,
        }}
      />
    </div>
  );
};

Basic.displayName = 'Basic';

export default Basic;
