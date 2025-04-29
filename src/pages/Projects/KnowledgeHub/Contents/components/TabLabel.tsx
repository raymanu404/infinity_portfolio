import { theme } from '@/theme';
import { Tab, tabClasses, TabProps, Typography } from '@mui/material';
import { forwardRef } from 'react';
import { idAttributeProps } from '../../helpful';
import { HookVariantCategory } from '../../interfaces';

interface TabLabelProps extends TabProps {
  variant: HookVariantCategory | null;
  index: number;
}

const TabLabel = forwardRef<HTMLDivElement, TabLabelProps>(function TabLabel(
  { index, label, variant, key, ...rest },
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
              width: '100%',
            },
          },
          borderBottomWidth: '2px',
        }}
        ref={ref}
        disableRipple
        {...rest}
      />
    </div>
  );
});

TabLabel.displayName = 'TabLabel';

export default TabLabel;
