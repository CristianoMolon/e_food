import styled from 'styled-components'
import { Cores, Titulo } from '../../styles'
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
