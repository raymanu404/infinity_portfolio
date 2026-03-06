import { theme } from '@/theme';
import { Box, Tab, tabClasses, TabProps, Typography } from '@mui/material';
import { idAttributeProps, tabGroupStyle } from '../../../helpful';
import { TabContentI } from '../../../interfaces';

interface TabLabelProps extends TabProps {
  tab: TabContentI;
  showHeader: boolean;
  showBottom: boolean;
  index: number;
  parentRef?: React.ForwardedRef<HTMLDivElement>;
}

const TabLabel = function TabLabel({
  ref,
  index,
  tab,
  showHeader,
  showBottom,
  ...rest
}: TabLabelProps) {
  const { title, variant } = tab;
  return (
    <Box
      role="tab"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ...tabGroupStyle(showHeader, showBottom),
      }}
    >
      {showHeader && (
        <Typography
          sx={{
            fontSize: '12px',
            textTransform: 'lowercase',
            letterSpacing: '1px',
            color: theme.custom.specialPalette?.variant[500],
            textAlign: 'center',
            borderBottom: `1px ${theme.custom.specialPalette?.variant[400]} solid`,
          }}
        >
          {`${variant}-HOOKS`}
        </Typography>
      )}

      <Tab
        label={title}
        {...idAttributeProps(index)}
        sx={{
          textTransform: 'none',
          letterSpacing: '1px',
          padding: `0 ${theme.spacing(3)}`,
          width: '100%',
          [`&.${tabClasses.root}`]: {
            [`&.${tabClasses.selected}`]: {
              backgroundColor: theme.custom.specialPalette?.variant[500],
              color: theme.custom.specialPalette?.variantMain,
              width: '100%',
            },
          },
          borderBottomWidth: '2px',
        }}
        ref={ref}
        disableRipple
        {...rest}
      />
    </Box>
  );
};

TabLabel.displayName = 'TabLabel';

export default TabLabel;
