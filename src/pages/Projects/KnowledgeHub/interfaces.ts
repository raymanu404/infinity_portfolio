import { PropsWithChildren } from 'react';
import { HOOK_CATEGORY_TYPE, SECTION_VARIANTS } from './constants';

interface ContentI extends PropsWithChildren {
  title: string;
  subTitle?: string;
  elementId: string;
}

type HookVariantCategoryType = (typeof HOOK_CATEGORY_TYPE)[keyof typeof HOOK_CATEGORY_TYPE];
type SectionVariantType = (typeof SECTION_VARIANTS)[keyof typeof SECTION_VARIANTS];

interface TabContentI extends PropsWithChildren {
  title: string;
  variant: HookVariantCategoryType | SectionVariantType;
}

export type { ContentI, HookVariantCategoryType, TabContentI };
