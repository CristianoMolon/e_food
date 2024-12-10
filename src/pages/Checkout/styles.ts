import styled from 'styled-components'
import { Cores, Titulo } from '../../styles'
import { Sidebar } from '../../components/Carrinho/styles'
import { BotaoAdd } from '../../components/Buttons/styles'

type InputGroupProps = {
  maxWidth?: string
}

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  align-items: flex-end;
  margin-bottom: 24px;

  .inputDisplay {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .margin-top {
    font-size: 14px;
    color: ${Cores.bege};
    margin-top: 24px;
  }
`
export const DeliveryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  ${BotaoAdd} {
    margin: 8px 0;
  }

  ${Sidebar} {
    padding: 32px 8px;
  }

  ${Titulo} {
    color: ${Cores.bege};
  }

  .is-open {
    display: flex;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-weight: bold;
    width: 100%;
    font-size: 16px;
    color: ${Cores.bege};
    display: block;
    padding: 8px 0;
  }

  input {
    height: 32px;
    width: 100%;
    padding: 0 8px;
    border: none;
  }
`
