import styled from 'styled-components'
import { Cores } from '../../styles'

export const Vetor = styled.header`
  width: 100%;
  height: 384px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  font-weight: bold;
`
export const Logo = styled.div`
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 125px;
    margin-bottom: 140px;
  }
`

export const TextoHeader = styled.h2`
  font-size: 36px;
  width: 38%;
  text-align: center;
  color: ${Cores.vermelho};
`
