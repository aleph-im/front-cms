import { TextGradient } from '@aleph-front/core'
import styled from 'styled-components'

export const StyledH1 = styled(TextGradient).attrs((props) => {
  return {
    ...props,
    forwardedAs: 'h1',
    type: props.type || 'h5',
    color: props.color || 'main1',
  }
})``
