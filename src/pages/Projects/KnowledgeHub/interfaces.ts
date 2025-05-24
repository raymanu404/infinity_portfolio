import { PropsWithChildren } from 'react';
import { HOOKS_SUB_SECTION, HOOK_CATEGORY_TYPE } from './constants';

interface ContentI extends PropsWithChildren {
  title: string;
  subTitle?: string;
  elementId: string;
}

type HookVariantCategoryType = (typeof HOOK_CATEGORY_TYPE)[keyof typeof HOOK_CATEGORY_TYPE];
type HookVariantSubCategoryType = (typeof HOOKS_SUB_SECTION)[keyof typeof HOOKS_SUB_SECTION];

interface TabContentI extends PropsWithChildren {
  title: string;
  variant: HookVariantCategoryType;
}

export type { ContentI, HookVariantCategoryType, HookVariantSubCategoryType, TabContentI };
