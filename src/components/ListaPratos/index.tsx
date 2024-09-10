import { Restaurantes } from '../../pages/ListaHome'
import CardsComidas from '../CardsComidas'
import { Container } from '../ListaRestaurantes/styles'
import { ListadePratos } from './styles'

type Props = {
  cardapios: Restaurantes
}

const ListaPratos = ({ cardapios }: Props) => {
  return (
    <Container>
      <div className="container">
        <ListadePratos>
          <li key={cardapios.id}>
            <CardsComidas
              id={cardapios.cardapio.id}
              descricao={cardapios.cardapio.descricao}
              nome={cardapios.cardapio.nome}
              foto={cardapios.cardapio.foto}
              preco={cardapios.cardapio.preco}
              porcao={cardapios.cardapio.porcao}
            />
          </li>
        </ListadePratos>
      </div>
    </Container>
  )
}

export default ListaPratos
