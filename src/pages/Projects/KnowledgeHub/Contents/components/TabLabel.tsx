import { theme } from '@/theme';
import { Tab, tabClasses, TabProps, Typography } from '@mui/material';
import { forwardRef } from 'react';
import { idAttributeProps } from '../../helpful';
import { TabContentI } from '../../interfaces';

interface TabLabelProps extends TabProps {
  tab: TabContentI;
  showHeader?: boolean;
  showBottom?: boolean;
  index: number;
  parentRef?: React.ForwardedRef<HTMLDivElement>;
}

const TabLabel = forwardRef<HTMLDivElement, TabLabelProps>(function TabLabel(
  { index, tab, showHeader, showBottom, parentRef, ...rest },
  ref,
) {
  const { title, variant } = tab;
  console.log(parentRef);
  return (
    <div
      role="tab"
      style={{
        borderTop: '2px #FFFFFF solid',
        borderLeft: '2px #FFFFFF solid',
        borderRight: '2px #FFFFFF solid',
      }}
    >
      {showHeader && (
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
        ref={parentRef ?? ref}
        disableRipple
        {...rest}
      />
    </div>
  );
});

TabLabel.displayName = 'TabLabel';

export default TabLabel;
