import { TypoKind } from '@aleph-front/core'
import { HTMLAttributes, ReactNode } from 'react'

export type H1Props = HTMLAttributes<HTMLHeadingElement> & {
  color?: string
  type?: TypoKind
  children: ReactNode
}
