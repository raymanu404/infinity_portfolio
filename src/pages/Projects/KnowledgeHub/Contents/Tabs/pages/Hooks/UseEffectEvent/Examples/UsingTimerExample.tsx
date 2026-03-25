import Notes from '@/Shared/Components/Notes/Notes';
import { IconButton } from '@mui/material';
import { Minus, PlusCircle, RefreshCw, StopCircle } from 'lucide-react';
import React, { startTransition, useEffect, useEffectEvent, useOptimistic, useState } from 'react';

const UsingTimerExample: React.FC = () => {
  const [timer, setTimer] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [optimisticIncr, dispatchIncrement] = useOptimistic(increment);

  const onTick = useEffectEvent(() => {
    setTimer(timer + optimisticIncr);
  });

  const changeIncrementHandler = (value: number) => {
    startTransition(() => {
      dispatchIncrement(prev => prev + value);

      setIncrement(prev => prev + value);
    });
  };

  const onStopTimerHandler = () => {
    setTimer(0);
    setIncrement(0);
  };

  const onResetTimerHandler = () => {
    setTimer(0);
    setIncrement(1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      onTick();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <div>
        <h2>UsingTimerExample</h2>
        <Notes
          notes={[
            {
              note: 'This counter increments timer by the current increment value every second',
            },
          ]}
        />
      </div>
      <div>
        <span>Timer: {timer}</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '200px',
        }}
      >
        <IconButton onClick={() => changeIncrementHandler(-1)}>
          <Minus />
        </IconButton>
        <span
          style={{
            fontSize: '20px',
          }}
        >
          {optimisticIncr}
        </span>
        <IconButton onClick={() => changeIncrementHandler(1)}>
          <PlusCircle />
        </IconButton>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            alignItems: 'center',
          }}
        >
          <IconButton onClick={onStopTimerHandler}>
            <StopCircle />
          </IconButton>
          <IconButton onClick={onResetTimerHandler}>
            <RefreshCw />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

UsingTimerExample.displayName = 'UsingTimerExample';

export default UsingTimerExample;
