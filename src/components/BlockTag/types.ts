import { HTMLAttributes } from 'react'

export type BlockTagProps = HTMLAttributes<HTMLElement> & {
  title: string
  content: string
}
