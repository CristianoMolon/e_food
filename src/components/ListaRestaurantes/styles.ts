import styled from 'styled-components'
import { breakpoints, Cores } from '../../styles'

export const Container = styled.section`
  padding: 80px 0;
  background-color: ${Cores.creme};
`

export const ListaRestaurante = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 48px 80px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: grid;
    margin: 0 12px;
    padding-bottom: 24px;
    grid-template-columns: 1fr;
  }
`
