import { PropsWithChildren } from 'react';

interface PageContentI extends PropsWithChildren {
  elementId: string;
  title: string;
  defaultOpen?: boolean;
}

export type { PageContentI };
