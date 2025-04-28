import { PropsWithChildren } from 'react';

interface ContentI extends PropsWithChildren {
  title: string;
  subTitle?: string;
  elementId: string;
}

type HookVariantCategory =
  | 'STATE HOOKS'
  | 'EFFECT'
  | 'CONTEXT'
  | 'REF'
  | 'PERFORMANCE'
  | 'TRANSITION'
  | 'REACT 19 HOOKS'
  | 'CUSTOM HOOKS';
interface TabContentI extends PropsWithChildren {
  title: string;
  variant: HookVariantCategory;
}

export type { ContentI, HookVariantCategory, TabContentI };
