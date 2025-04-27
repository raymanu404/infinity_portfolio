import { Box, Tab, Tabs, tabsClasses, Typography } from '@mui/material';
import React from 'react';
import { idAttributeProps } from '../../helpful';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const VerticalMenu: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, display: 'flex', height: 420 }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          <Tab label="Item One" {...idAttributeProps(0)} />
          <Tab label="Item Two" {...idAttributeProps(1)} />
          <Tab label="Item Three" {...idAttributeProps(2)} />
          <Tab label="Item Four" {...idAttributeProps(3)} />
          <Tab label="Item Five" {...idAttributeProps(4)} />
          <Tab label="Item Six" {...idAttributeProps(5)} />
          <Tab label="Item Seven" {...idAttributeProps(6)} />
          <Tab label="Item Seven" {...idAttributeProps(6)} />
          <Tab label="Item Seven" {...idAttributeProps(7)} />
          <Tab label="Item Seven" {...idAttributeProps(6)} />
          <Tab label="Item Seven" {...idAttributeProps(6)} />
          <Tab label="Item Seven" {...idAttributeProps(6)} />
          <Tab label="Item Seven" {...idAttributeProps(6)} />
          <Tab label="Item Seven" {...idAttributeProps(6)} />
          <Tab label="Item Seven" {...idAttributeProps(6)} />

          <Tab label="Item Seven" {...idAttributeProps(6)} />
          <Tab label="Item Seven" {...idAttributeProps(6)} />
          <Tab label="Item Seven" {...idAttributeProps(6)} />
          <Tab label="Item Seven" {...idAttributeProps(6)} />
          <Tab label="Item Seven" {...idAttributeProps(6)} />
          <Tab label="Item Seven" {...idAttributeProps(6)} />
          <Tab label="Item Seven" {...idAttributeProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
        <TabPanel value={value} index={7}>
          Item Seven
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>
    </div>
  );
};

VerticalMenu.displayName = 'VerticalMenu';

export default VerticalMenu;
