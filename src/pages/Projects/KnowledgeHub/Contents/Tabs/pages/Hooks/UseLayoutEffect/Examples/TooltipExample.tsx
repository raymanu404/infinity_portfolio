import React, { PropsWithChildren, Ref, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface TooltipContainerProps extends PropsWithChildren {
  x: number;
  y: number;
  contentRef: Ref<HTMLDivElement>;
}

const TooltipContainer: React.FC<TooltipContainerProps> = ({ contentRef, x, y, children }) => {
  return (
    <div
      ref={contentRef}
      style={{
        position: 'absolute',
        backgroundColor: '#333',
        color: '#fff',
        transform: `translate(${x}px, ${y}px)`,
        pointerEvents: 'none',
        minWidth: 200,
        minHeight: 50,
        padding: 8,
        borderRadius: 4,
      }}
    >
      {children}
    </div>
  );
};

interface TooltipProps extends PropsWithChildren {
  targetRect: DOMRect | null;
  parentElem: Element | null;
}

const Tooltip: React.FC<TooltipProps> = ({ children, targetRect, parentElem }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);
  const [tooltipWidth, setTooltipWidth] = useState(0);

  useLayoutEffect(() => {
    const { height, width } = ref.current!.getBoundingClientRect();
    setTooltipHeight(height);
    setTooltipWidth(width);
    console.log('Measured tooltip height: ' + height);
  }, []);

  let tooltipX = 0;
  let tooltipY = 0;
  tooltipX = targetRect!.left - tooltipWidth;
  tooltipY = targetRect!.top - tooltipHeight;
  if (tooltipY < 0) {
    // It doesn't fit above, so place below.
    tooltipY = targetRect!.bottom;
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    parentElem!,
  );
};

const TooltipExample: React.FC = () => {
  const targetRef = useRef<HTMLButtonElement | null>(null);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    if (targetRef.current) {
      setTargetRect(targetRef.current.getBoundingClientRect()); // 👈 captures position
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      id="parent"
      style={{ position: 'relative', width: '100%', height: '300px', cursor: 'pointer' }}
    >
      <h1>TooltipExample</h1>
      <button ref={targetRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Hover me
      </button>

      {showTooltip && (
        <Tooltip targetRect={targetRect} parentElem={targetRef.current}>
          I am a tooltip!
        </Tooltip>
      )}
    </div>
  );
};

TooltipExample.displayName = 'TooltipExample';

export default TooltipExample;
