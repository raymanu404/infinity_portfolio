import { sanitizeSectionToURL } from '@/Shared/Utils/Helpers/global-utils';
import { theme } from '@/theme';
import { SxProps, Theme } from '@mui/material';
import { ALL_SECTIONS_ARRAY, HOOK_CATEGORY_TYPE } from './constants';
import { DASH_SPLIT_STRING } from './Contents/Tabs/pages/Hooks/contents';
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

  return {
    borderLeft: `2px ${theme.custom.specialPalette?.variant[500]} solid`,
    borderRight: `2px ${theme.custom.specialPalette?.variant[500]} solid`,
  } as SxProps<Theme>;
};

const getDefaultSubTabSelectedIndex = (currentHash: string): number => {
  if (!currentHash.includes('#')) return 0;
  if (!currentHash.includes(DASH_SPLIT_STRING)) return 0;

  const hash = currentHash.split('#')[1];
  const potentialSectionStarts = hash.split(DASH_SPLIT_STRING)[0];

  const sectionStartsWith = Object.keys(ALL_SECTIONS_ARRAY).find(x =>
    x.includes(potentialSectionStarts),
  );
  const currentArray = ALL_SECTIONS_ARRAY[sectionStartsWith!];

  const subSectionString = hash.split(sectionStartsWith!)[1].slice(1);

  const currentIndex = Object.values(currentArray).findIndex(x => {
    return sanitizeSectionToURL(x.title) === subSectionString;
  });

  return currentIndex;
};

export { getArrayGroupedByVariant, getDefaultSubTabSelectedIndex, idAttributeProps, tabGroupStyle };
