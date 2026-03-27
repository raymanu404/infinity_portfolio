import Notes from '@/Shared/Components/Notes/Notes';
import { IconButton } from '@mui/material';
import { Minus, PlusCircle, RefreshCw, StopCircle } from 'lucide-react';
import React, { startTransition, useEffect, useEffectEvent, useOptimistic, useState } from 'react';

const useInterval = (callback: () => void, delay?: 1000) => {
  const onTick = useEffectEvent(callback);

  useEffect(() => {
    const interval = setInterval(() => {
      onTick();
    }, delay);

    return () => clearInterval(interval);
  }, []);
};

const UsingCustomHookExample: React.FC = () => {
  const [timer, setTimer] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [optimisticIncr, dispatchIncrement] = useOptimistic(increment);

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

  useInterval(() => {
    setTimer(timer + optimisticIncr);
  }, 1000);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <div>
        <h2>UsingCustomHookExample</h2>
        <Notes
          notes={[
            {
              note: 'This counter increments timer by the current increment value every second',
            },
            {
              note: 'In this example, useInterval is a custom Hook that sets up an interval. The callback passed to it is wrapped in an Effect Event, so the interval does not reset even if a new callback is passed in every render',
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

UsingCustomHookExample.displayName = 'UsingCustomHookExample';

export default UsingCustomHookExample;
