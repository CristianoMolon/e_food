import styled from 'styled-components'
import { Botao, Cores, Titulo } from '../../styles'
import { Descricao } from '../Cards/styles'

export const Comidas = styled.div`
  background-color: ${Cores.vermelho};

  img {
    padding: 8px;
  }
`

export const NomeDoPrato = styled(Titulo)`
  color: ${Cores.bege};
`

export const DescricDoPrato = styled(Descricao)`
  color: ${Cores.bege};
`
export const BotaoAdd = styled(Botao)`
  max-width: 304px;
  width: 100%;
  text-align: center;
  background-color: ${Cores.bege};
  color: ${Cores.vermelho};
`
