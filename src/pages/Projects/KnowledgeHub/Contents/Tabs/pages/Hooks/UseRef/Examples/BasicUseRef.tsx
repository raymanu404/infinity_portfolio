import React from 'react';

const BasicUseRef: React.FC = () => {
  const counterRef = React.useRef(0);

  const handleClick = () => {
    counterRef.current += 1;
    alert(`Counter value: ${counterRef.current}`);
  };

  return (
    <div>
      <h1>Counter on Click</h1>
      <button onClick={handleClick}>Increment Counter</button>
    </div>
  );
};

BasicUseRef.displayName = 'BasicUseRef';

export default BasicUseRef;
