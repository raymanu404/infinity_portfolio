import { theme } from '@/theme';
import { Box, Tab, tabClasses, TabProps, Typography } from '@mui/material';
import { forwardRef } from 'react';
import { idAttributeProps } from '../../helpful';
import { HookVariantCategoryType, TabContentI } from '../../interfaces';

interface TabLabelProps extends TabProps {
  variant: HookVariantCategoryType | null;
  tabs: TabContentI[];
}

const TabLabel = forwardRef<HTMLDivElement, TabLabelProps>(function TabLabel(
  { tabs, variant, key, ...rest },
  ref,
) {
  return (
    <div role="tab" key={key}>
      {variant && (
        <Typography
          sx={{
            fontSize: '10px',
            textTransform: 'lowercase',
            letterSpacing: '1px',
            textAlign: 'center',
          }}
        >
          {variant}
        </Typography>
      )}
      {tabs.map(({ title, variant }, index) => {
        const key = `${title}-${variant}-${index}`;
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column' }} key={key}>
            <Tab
              label={title}
              {...idAttributeProps(index)}
              sx={{
                textTransform: 'none',
                letterSpacing: '1px',
                padding: `0 ${theme.spacing(3)}`,
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
      })}
    </div>
  );
});

TabLabel.displayName = 'TabLabel';

export default TabLabel;
