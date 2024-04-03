import { TextGradient } from '@aleph-front/core'
import styled from 'styled-components'

export const StyledH2 = styled(TextGradient).attrs((props) => {
  return {
    ...props,
    forwardedAs: 'h2',
    type: props.type || 'h5',
    color: props.color || 'main0',
  }
})``
