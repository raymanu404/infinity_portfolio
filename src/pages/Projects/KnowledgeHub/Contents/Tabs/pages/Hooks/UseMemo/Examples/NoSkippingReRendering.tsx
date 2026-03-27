import React from 'react';
import ExampleContainer from './ExampleContainer';

const NoSkippingReRendering: React.FC = () => {
  return (
    <ExampleContainer title="No Skipping Re-rendering Example UseMemo" skipReRendering={false} />
  );
};

NoSkippingReRendering.displayName = 'NoSkippingReRendering';

export default NoSkippingReRendering;
