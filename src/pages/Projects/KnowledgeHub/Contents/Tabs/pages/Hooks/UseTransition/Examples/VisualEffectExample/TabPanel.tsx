import { theme } from '@/theme';
import { Button } from '@mui/material';
import React, { PropsWithChildren, useTransition } from 'react';

interface TabPanelProps extends PropsWithChildren {
  isActive: boolean;
  action: () => void;
}

const TabPanel: React.FC<TabPanelProps> = ({ isActive, action, children }) => {
  const [isPending, startTransition] = useTransition();

  if (isActive) {
    return (
      <div
        style={{
          backgroundColor: theme.custom.specialPalette?.variant[400],
          fontSize: '18px',
          padding: '6px 16px',
          borderRadius: '5px',
          color: theme.custom.specialPalette?.variantMain,
        }}
      >
        {children}
      </div>
    );
  }

  if (isPending) {
    return (
      <div
        style={{
          backgroundColor: theme.custom.specialPalette?.variant[300],
          fontSize: '18px',
          padding: '6px 16px',
          borderRadius: '5px',
          color: theme.custom.specialPalette?.variantMainDark,
        }}
      >
        {children}
      </div>
    );
  }

  const handleClick = () => {
    startTransition(() => {
      action();
    });
  };

  return (
    <div>
      <Button onClick={handleClick} variant="contained">
        {children}
      </Button>
    </div>
  );
};

TabPanel.displayName = 'TabPanel';

export default TabPanel;
