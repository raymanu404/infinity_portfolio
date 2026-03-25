import { Checkbox } from '@mui/material';
import React, { useEffect, useEffectEvent, useRef, useState } from 'react';

const EventListenerExample: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);
  const divRef = useRef<HTMLDivElement>(null);

  const onMove = useEffectEvent((e: PointerEvent) => {
    if (canMove) {
      if (!divRef.current) return;

      if (e) {
        const parentRect = divRef.current.getBoundingClientRect();

        //position of parentRect on page
        const x = e.clientX - parentRect.left;
        const y = e.clientY - parentRect.top;
        // Constrain to parent boundaries
        const constrainedX = Math.max(0, Math.min(x, parentRect.width));
        const constrainedY = Math.max(0, Math.min(y, parentRect.height));

        setPosition({ x: constrainedX, y: constrainedY });
      }
    }
  });

  useEffect(() => {
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div
      style={{ position: 'relative', width: '100%', height: '300px', cursor: 'pointer' }}
      ref={divRef}
    >
      <label style={{ textAlign: 'center' }}>
        <Checkbox checked={canMove} onChange={e => setCanMove(e.target.checked)} />
        The dot is allowed to move
      </label>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'pink',
          borderRadius: '50%',
          opacity: 0.8,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      />
    </div>
  );
};

EventListenerExample.displayName = 'EventListenerExample';

export default EventListenerExample;
