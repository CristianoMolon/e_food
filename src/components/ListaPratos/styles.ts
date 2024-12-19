import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ListadePratos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    margin: 0 12px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
