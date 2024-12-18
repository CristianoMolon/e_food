import CardsComidas from '../CardsComidas'

import Loader from '../Loader'

import { Container } from '../ListaRestaurantes/styles'
import { ListadePratos } from './styles'

type Props = {
  cardapios?: Cardapio[]
  isLoading: boolean
  id?: string
}

const ListaPratos = ({ cardapios, isLoading, id }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <Container id={id}>
      <div className="container">
        <ListadePratos>
          {cardapios &&
            cardapios.map((cardapio) => (
              <li key={cardapio.id}>
                <CardsComidas
                  id={cardapio.id}
                  descricao={cardapio.descricao}
                  nome={cardapio.nome}
                  foto={cardapio.foto}
                  preco={cardapio.preco}
                  porcao={cardapio.porcao}
                  prato={cardapio}
                />
              </li>
            ))}
        </ListadePratos>
      </div>
    </Container>
  )
}

export default ListaPratos
