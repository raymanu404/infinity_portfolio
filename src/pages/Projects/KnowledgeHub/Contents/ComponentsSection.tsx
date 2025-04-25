import React, { useState } from 'react';

const ComponentsSection: React.FC = () => {
  const [messageCount, setMessageCount] = useState(0);

  console.log(messageCount);

  return (
    <div>
      <h1>{messageCount > 0 && `Message Count ${messageCount}`}</h1>
      <button
        onClick={() => {
          setMessageCount(prev => prev + 1);
        }}
      >
        Increse Counter
      </button>
    </div>
  );
};

ComponentsSection.displayName = 'ComponentsSection';

export default ComponentsSection;
