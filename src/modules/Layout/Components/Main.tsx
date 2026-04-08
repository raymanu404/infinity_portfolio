import { PropsWithChildren } from 'react';

const Main = ({ children }: PropsWithChildren) => {
  return <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>{children}</main>;
};

Main.displayName = 'Main';

export default Main;
