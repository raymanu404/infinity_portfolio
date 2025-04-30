import { theme } from '@/theme';
import { SxProps, Theme } from '@mui/material';
import { HOOK_CATEGORY_TYPE } from './constants';
import { HookVariantCategoryType, TabContentI } from './interfaces';

const idAttributeProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
};

const getArrayGroupedByVariant = (tabs: TabContentI[]) => {
  //get all variants grouped
  const result: { key: HookVariantCategoryType; array: TabContentI[] }[] = [];
  const hooksCategoryTypeValues = Object.values(HOOK_CATEGORY_TYPE);

  hooksCategoryTypeValues.forEach(item => {
    if (tabs.find(x => x.variant === item)) {
      result.push({ key: item, array: tabs.filter(x => x.variant === item) });
    }
  });

  return result;
};

const tabGroupStyle = (showHeader: boolean, showBottom: boolean) => {
  if (showHeader && showBottom) {
    return {
      borderTop: `2px ${theme.custom.specialPalette?.variant[500]} solid`,
      borderBottom: `2px ${theme.custom.specialPalette?.variant[500]} solid`,
      borderLeft: `2px ${theme.custom.specialPalette?.variant[500]} solid`,
      borderRight: `2px ${theme.custom.specialPalette?.variant[500]} solid`,
      marginBottom: `${theme.spacing(3)}`,
    } as SxProps<Theme>;
  }

  if (showHeader) {
    return {
      borderTop: `2px ${theme.custom.specialPalette?.variant[500]} solid`,
      borderLeft: `2px ${theme.custom.specialPalette?.variant[500]} solid`,
      borderRight: `2px ${theme.custom.specialPalette?.variant[500]} solid`,
    } as SxProps<Theme>;
  }

  if (showBottom) {
    return {
      borderBottom: `2px ${theme.custom.specialPalette?.variant[500]} solid`,
      borderLeft: `2px ${theme.custom.specialPalette?.variant[500]} solid`,
      borderRight: `2px ${theme.custom.specialPalette?.variant[500]} solid`,
      marginBottom: `${theme.spacing(3)}`,
    } as SxProps<Theme>;
  }
};

export { getArrayGroupedByVariant, idAttributeProps, tabGroupStyle };
