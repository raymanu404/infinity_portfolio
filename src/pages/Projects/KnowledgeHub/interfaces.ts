import { PropsWithChildren } from 'react';
import {
  ALL_LEARNING_SECTIONS_ELEMENT_ID_ARRAY,
  HOOK_CATEGORY_TYPE,
  SECTION_VARIANTS,
} from './constants';

interface ContentI extends PropsWithChildren {
  title: string;
  subTitle?: string;
  elementId: string;
}

type HookVariantCategoryType = (typeof HOOK_CATEGORY_TYPE)[keyof typeof HOOK_CATEGORY_TYPE];
type SectionVariantType = (typeof SECTION_VARIANTS)[keyof typeof SECTION_VARIANTS];

type LearningSectionsType = (typeof ALL_LEARNING_SECTIONS_ELEMENT_ID_ARRAY)[number];

interface TabContentI extends PropsWithChildren {
  title: string;
  variant: HookVariantCategoryType | SectionVariantType;
}

export type {
  ContentI,
  HookVariantCategoryType,
  LearningSectionsType,
  SectionVariantType,
  TabContentI,
};
