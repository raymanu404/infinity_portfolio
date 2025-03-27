import { PropsWithChildren } from 'react'

interface ContentI extends PropsWithChildren {
  title: string
  subTitle?: string
  elementId: string
}

export type { ContentI }
