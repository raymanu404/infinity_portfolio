import { theme } from '@/theme';
import { Box, Switch, Typography } from '@mui/material';
import React, { useState } from 'react';

interface SwitcherProps {
  label: string;
  isClosed?: boolean;
}

const Switcher: React.FC<Props> = ({ isSwitched, label, setIsSwitched }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSwitched(event.target.checked);
  };

  return (
    <Box
      sx={{
        display: 'inline-flex',
        gap: theme.spacing(2),
      }}
    >
      <Typography variant="h6" sx={{ color: theme.custom.specialPalette?.variantSecondaryDark }}>
        {label}
      </Typography>
      <Switch checked={isSwitched} onChange={handleChange} />
    </Box>
  );
};

Switcher.displayName = 'Switcher';

const useSwitcher = ({ label, isClosed = true }: SwitcherProps) => {
  const [isSwitched, setIsSwitched] = useState(isClosed);

  const SwitcherComponent = (
    <Switcher isSwitched={isSwitched} setIsSwitched={setIsSwitched} label={label} />
  );

  return { isSwitched, SwitcherComponent };
};

interface Props extends SwitcherProps {
  isSwitched: boolean;
  setIsSwitched: React.Dispatch<React.SetStateAction<boolean>>;
}

export { useSwitcher };
