import styled from 'styled-components'
import { Cores } from '../../styles'

export const Container = styled.section`
  padding: 80px 0;
  background-color: ${Cores.creme};
`

export const ListaRestaurante = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 48px 80px;
`
