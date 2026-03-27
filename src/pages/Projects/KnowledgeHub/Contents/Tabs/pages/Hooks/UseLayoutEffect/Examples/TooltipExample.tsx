import { Button } from '@mui/material';
import React, { PropsWithChildren, Ref, useEffect, useLayoutEffect, useRef, useState } from 'react';
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
  useEffectExample?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  targetRect,
  parentElem,
  useEffectExample,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);
  const [tooltipWidth, setTooltipWidth] = useState(0);

  useLayoutEffect(() => {
    if (!useEffectExample) {
      const { height, width } = ref.current!.getBoundingClientRect();
      setTooltipHeight(height);
      setTooltipWidth(width);
      console.log('Measured tooltip useLayoutEffect: ' + height);
    }
  }, []);

  //------------------------JUST FOR ARTIFICIALLY DELAY, ALSO FOR USE_EFFECT EXAMPLE
  useEffect(() => {
    if (useEffectExample) {
      const { height, width } = ref.current!.getBoundingClientRect();
      setTooltipHeight(height);
      setTooltipWidth(width);
      console.log('Measured tooltip useEffect: ' + height);
    }
  }, []);

  const now = performance.now();
  while (performance.now() - now < 100 && useEffectExample) {
    // Do nothing for a bit...
  }

  let tooltipX = 0;
  let tooltipY = 0;
  tooltipX = targetRect!.left - tooltipWidth;
  tooltipY = targetRect!.top - tooltipHeight - parentElem!.clientHeight - 50;
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

const TooltipExample: React.FC<{ useEffectExample?: boolean }> = ({ useEffectExample }) => {
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
      style={{ position: 'relative', height: '200px', width: '100%', cursor: 'pointer' }}
    >
      <Button
        variant="contained"
        ref={targetRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {useEffectExample ? 'Use Effect example ' : 'Normal Example'}
      </Button>

      {showTooltip && (
        <Tooltip
          targetRect={targetRect}
          parentElem={targetRef.current}
          useEffectExample={useEffectExample}
        >
          I am a tooltip!
        </Tooltip>
      )}
    </div>
  );
};

TooltipExample.displayName = 'TooltipExample';

export { Tooltip, TooltipContainer, TooltipExample };
