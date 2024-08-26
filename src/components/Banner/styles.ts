import styled from 'styled-components'
import { Cores, Titulo } from '../../styles'

export const Vetor = styled.header`
  width: 100%;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  font-weight: bold;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 82px 0 82px;
  }
`

export const Imagem = styled.div`
  display: flex;
  width: 100%;
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 32px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 0 35px;
  }

  ${Titulo} {
    color: ${Cores.branco};
    font-size: 32px;
  }
`

export const Tag = styled.h3`
  font-weight: 100;
  color: ${Cores.branco};
`
