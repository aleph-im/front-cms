import { TypoKind } from '@aleph-front/core'
import { HTMLAttributes, ReactNode } from 'react'

export type H2Props = HTMLAttributes<HTMLHeadingElement> & {
  color?: string
  type?: TypoKind
  children: ReactNode
}
