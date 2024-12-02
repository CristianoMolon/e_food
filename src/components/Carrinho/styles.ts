import styled from 'styled-components'
import { Cores } from '../../styles'
import lixeira from '../../assets/images/simbolos/lixeira.png'
import { Descricao } from '../Cards/styles'
import { BotaoAdd } from '../Buttons/styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.8;
`

export const Sidebar = styled.aside`
  position: relative;
  width: 360px;

  background-color: ${Cores.vermelho};

  ul {
    padding: 32px 8px 0 8px;
  }

  ${Descricao} {
    color: ${Cores.creme};
    font-weight: bold;
  }

  ${BotaoAdd} {
    max-width: 344px;
  }

  > div {
    display: flex;
    margin-top: 38px;
    justify-content: space-between;
  }
`

export const Item = styled.div`
  display: flex;
  position: relative;
  padding: 8px 0 12px 8px;
  margin-bottom: 12px;
  background-color: ${Cores.bege};

  img {
    width: 80px;
    height: 80px;
  }

  div {
    display: flex;
    flex-direction: column;
    height: 60px;
    margin-left: 8px;
    justify-content: space-between;
    color: ${Cores.vermelho};
  }

  button {
    background-image: url(${lixeira});
    border: none;
    background-color: transparent;
    width: 16px;
    height: 16px;
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
`
