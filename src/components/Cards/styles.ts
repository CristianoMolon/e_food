import styled from 'styled-components'
import { Cores } from '../../styles'

export const Card = styled.div`
  background-color: ${Cores.branco};
  border: 1px solid ${Cores.vermelho};
  position: relative;

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

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
  display: inline;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Descricao = styled.p`
  font-size: 14px;
  color: ${Cores.vermelho};
  padding: 8px 8px;
`
