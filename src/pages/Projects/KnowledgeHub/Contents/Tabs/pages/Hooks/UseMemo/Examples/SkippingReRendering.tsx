import React from 'react';
import ExampleContainer from './ExampleContainer';

const SkippingReRendering: React.FC = () => {
  return <ExampleContainer title="Skipping Re-rendering Example UseMemo" skipReRendering={true} />;
};

SkippingReRendering.displayName = 'SkippingReRendering';

export default SkippingReRendering;
