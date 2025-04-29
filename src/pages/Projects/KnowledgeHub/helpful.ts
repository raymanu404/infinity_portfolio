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

export { getArrayGroupedByVariant, idAttributeProps };
