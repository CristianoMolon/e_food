import styled from 'styled-components'

import { Cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Botao = styled(Link)`
  display: inline-block;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${Cores.vermelho};
  color: ${Cores.bege};
  border: none;
  margin: 8px;
`

export const BotaoAdd = styled.button`
  width: 95%;
  text-align: center;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${Cores.bege};
  color: ${Cores.vermelho};
  border: none;
  margin: 8px;

  &:hover {
    cursor: pointer;
  }
`
