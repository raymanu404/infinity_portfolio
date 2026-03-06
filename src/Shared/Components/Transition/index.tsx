/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import { Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { ReactNode } from 'react';

const Transition: React.FC<{
  ref: React.RefObject<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>;
  props:
    | (TransitionProps & {
        children: ReactNode & React.ReactElement<any, any>;
      })
    | undefined;
}> = ({ ref, props }) => {
  const { children, ...restProps } = props || {};

  return (
    <Slide direction="up" ref={ref} {...restProps}>
      {children as React.ReactElement<any, any>}
    </Slide>
  );
};

Transition.displayName = 'Transition';

export default Transition;
