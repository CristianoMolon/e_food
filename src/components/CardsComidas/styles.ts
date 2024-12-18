import styled from 'styled-components'
import { breakpoints, Cores, Titulo } from '../../styles'
import { Descricao } from '../Cards/styles'

export const Comidas = styled.div`
  background-color: ${Cores.vermelho};

  img {
    padding: 8px;
    width: 100%;
    height: 170px;
  }
`

export const NomeDoPrato = styled(Titulo)`
  color: ${Cores.bege};
`

export const DescricDoPrato = styled(Descricao)`
  color: ${Cores.bege};
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;
  display: none;

  &.visible {
    display: flex;
  }

  ModalCard {
    background-color: ${Cores.vermelho};
    z-index: 1;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  header {
    display: flex;
    justify-content: end;
    padding: 8px;
  }
`
export const ModalCard = styled.div`
  background-color: ${Cores.vermelho};
  z-index: 1;
`

export const ModalContent = styled.div`
  max-width: 960px;
  display: flex;
  align-items: center;
  padding: 32px;
  padding-top: 0;
  z-index: 1;

  > img {
    height: 280px;
    width: 280px;
    margin-right: 24px;
  }

  div {
    justify-content: space-between;
  }

  ${Titulo} {
    color: ${Cores.branco};
  }

  ${Descricao} {
    color: ${Cores.branco};
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
  }
`
