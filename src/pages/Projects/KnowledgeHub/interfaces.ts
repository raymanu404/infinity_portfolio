import { PropsWithChildren } from 'react';
import { HOOK_CATEGORY_TYPE } from './constants';

interface ContentI extends PropsWithChildren {
  title: string;
  subTitle?: string;
  elementId: string;
}

type HookVariantCategoryType = (typeof HOOK_CATEGORY_TYPE)[keyof typeof HOOK_CATEGORY_TYPE];

interface TabContentI extends PropsWithChildren {
  title: string;
  variant: HookVariantCategoryType;
}

export type { ContentI, HookVariantCategoryType, TabContentI };
