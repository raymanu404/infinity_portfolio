import { theme } from '@/theme';
import { Tab, tabClasses, TabProps } from '@mui/material';
import { forwardRef } from 'react';
import { idAttributeProps } from '../../helpful';
import { HookVariantCategory } from '../../interfaces';

interface TabLabelProps extends TabProps {
  variant: HookVariantCategory;
  index: number;
}

const TabLabel = forwardRef<HTMLDivElement, TabLabelProps>(function TabLabel(
  { index, label, variant, key, ...rest },
  ref,
) {
  return (
    <Tab
      label={label}
      {...idAttributeProps(index)}
      sx={{
        textTransform: 'none',
        letterSpacing: '1px',
        padding: `0 ${theme.spacing(3)}`,
        [`&.${tabClasses.root}`]: {
          [`&.${tabClasses.selected}`]: {
            backgroundColor: theme.custom.specialPalette?.variant[500],
            color: theme.custom.specialPalette?.variantMain,
          },
        },
      }}
      ref={ref}
      {...rest}
    />
  );
});

TabLabel.displayName = 'TabLabel';

export default TabLabel;
