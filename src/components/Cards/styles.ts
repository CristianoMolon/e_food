import styled from 'styled-components'
import { Cores } from '../../styles'

export const Card = styled.div`
  background-color: ${Cores.branco};
  border: 1px solid ${Cores.vermelho};
  position: relative;

  .align {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Tag = styled.span`
  padding: 6px 4px;
  margin-left: 12px;
  background-color: ${Cores.vermelho};
  color: ${Cores.bege};
  font-size: 12px;
  font-weight: bold;
  align-items: center;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${Cores.vermelho};
  line-height: 21px;
  margin: 8px 7px;
`

export const Descricao = styled.p`
  font-size: 14px;
  color: ${Cores.vermelho};
  padding: 8px 8px;
`
