import { PropsWithChildren } from 'react';

interface PageContentI extends PropsWithChildren {
  elementId: string;
  title: string;
}

export type { PageContentI };
