import { Restaurantes } from '../../pages/ListaHome'
import CardsComidas from '../CardsComidas'
import { Container } from '../ListaRestaurantes/styles'
import { ListadePratos } from './styles'

export type Props = {
  pratos: Restaurantes[]
}

const ListaPratos = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      <ListadePratos>
        {pratos.map((restaurante) => (
          <li key={restaurante.cardapio.id}>
            <CardsComidas
              descricao={restaurante.cardapio.descricao}
              nome={restaurante.cardapio.nome}
              foto={restaurante.cardapio.foto}
            />
          </li>
        ))}
      </ListadePratos>
    </div>
  </Container>
)

export default ListaPratos
