import { theme } from '@/theme';
import { Sword } from 'lucide-react';
import React, { useRef, useState } from 'react';

const SwordCursor: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const onPointerMoveHandler = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    if (e) {
      const parentRect = divRef.current.getBoundingClientRect();
      const x = e.clientX - parentRect.left;
      const y = e.clientY - parentRect.top;
      // Constrain to parent boundaries
      const constrainedX = Math.max(0, Math.min(x, parentRect.width - 20)); // 50 is child width
      const constrainedY = Math.max(0, Math.min(y, parentRect.height - 20)); // 50 is child height

      setPosition({ x: constrainedX, y: constrainedY });
    }
  };

  return (
    <div
      ref={divRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        cursor: 'none',
        minHeight: '500px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: theme.custom.specialPalette?.variant[300],
      }}
      onPointerMove={onPointerMoveHandler}
    >
      <div
        style={{
          position: 'absolute',
          transform: `translate(${position.x}px, ${position.y}px)`,
          userSelect: 'none', // Prevents text selection during drag
          touchAction: 'none', // Important for touch devices
        }}
      >
        <Sword />
      </div>
    </div>
  );
};

SwordCursor.displayName = 'SwordCursor';

export default SwordCursor;
