import Notes from '@/Shared/Components/Notes/Notes';
import React from 'react';
import { TooltipExample } from './TooltipExample';

const UseLayoutEffectBasic: React.FC = () => {
  return (
    <div>
      <h1>UseLayoutEffectBasic</h1>
      <Notes
        notes={[
          {
            note: 'Measuring layout before the browser repaints the screen',
            subNotes: [
              {
                note: 'Call useLayoutEffect to perform the layout measurements before the browser repaints the screen',
              },
            ],
          },
          {
            note: 'React guarantees that the code inside useLayoutEffect and any state updates scheduled inside it will be processed before the browser repaints the screen',
          },
          {
            note: 'Rendering in two passes and blocking the browser hurts performance. Try to avoid this when you can.',
          },
        ]}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '20px 0' }}>
        <TooltipExample />
        <TooltipExample useEffectExample />
      </div>
    </div>
  );
};

UseLayoutEffectBasic.displayName = 'UseLayoutEffectBasic';

export default UseLayoutEffectBasic;
