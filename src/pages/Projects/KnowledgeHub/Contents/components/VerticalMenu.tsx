import { theme } from '@/theme';
import { Box, Tabs, tabsClasses } from '@mui/material';
import React from 'react';
import { HOOKS_TABS_LABELS, HOOKS_TABS_PAGES } from '../../constants';
import TabLabel from './TabLabel';
import TabPanelPage from './TabPanelPage';

const VerticalMenu: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', height: 420, gap: `${theme.spacing(2)}` }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderColor: 'divider',
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
          borderRadius: theme.custom.borderRadiusContainer?.main,
          boxShadow: theme.custom.boxShadows?.secondary,
        }}
      >
        {HOOKS_TABS_LABELS.map((tab, index) => {
          const { label, variant } = tab;
          const key = `${label}-${variant}-${index}`;
          return <TabLabel index={index} label={label} variant={variant} key={key} />;
        })}
      </Tabs>
      {HOOKS_TABS_PAGES.map((page, index) => {
        const { children, title } = page;
        const key = `${title}-${index}`;

        return (
          <TabPanelPage index={index} isHidden={value !== index} key={key}>
            {children}
          </TabPanelPage>
        );
      })}
    </Box>
  );
};

VerticalMenu.displayName = 'VerticalMenu';

export default VerticalMenu;
