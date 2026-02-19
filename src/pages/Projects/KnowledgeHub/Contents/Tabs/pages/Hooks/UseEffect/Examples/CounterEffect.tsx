import React, { useEffect, useState } from 'react';

const CounterEffect: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count >= 60) {
        clearInterval(intervalId);
        setCount(0); // Reset count to 0 when it reaches 60
        return;
      }

      setCount(c => c + 1); // ✅ Pass a state updater
    }, 1000);
    return () => clearInterval(intervalId);
  }, [count]); // ✅ Now count is not a dependency

  return (
    <>
      <p>Updating state based on previous state from an Effect</p>
      <p>{`Instead of reactive state of counter, we can use prev state to update based on it such as: c => c + 1 state updater to setCount`}</p>
      <h1>{count}</h1>
    </>
  );
};

CounterEffect.displayName = 'CounterEffect';

export default CounterEffect;
