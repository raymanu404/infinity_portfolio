import React from 'react';

const ChildComponent: React.FC<{ parentRef: React.RefObject<HTMLDivElement | null> }> = ({
  parentRef,
}) => {
  return (
    <div ref={parentRef}>
      <h2>Child Component</h2>
    </div>
  );
};

const ParentRef: React.FC = () => {
  const parentRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (parentRef.current) {
      parentRef.current.style.backgroundColor = '#f0f0f0';
    }
  };

  return (
    <div>
      <h1>ParentRef</h1>
      <button onClick={handleClick}>Change Child Background by exposing Parent Ref</button>
      <ChildComponent parentRef={parentRef} />
    </div>
  );
};

ParentRef.displayName = 'ParentRef';

export default ParentRef;
