import { Restaurantes } from '../../pages/ListaHome'
import CardsComidas from '../CardsComidas'
import { Container } from '../ListaRestaurantes/styles'
import { ListadePratos } from './styles'

type Props = {
  cardapios: Restaurantes[]
}

const ListaPratos = ({ cardapios }: Props) => {
  return (
    <Container>
      <div className="container">
        <ListadePratos>
          {cardapios.map((prato) => (
            <li key={prato.cardapio.id}>
              <CardsComidas
                descricao={prato.cardapio.descricao}
                nome={prato.cardapio.nome}
                foto={prato.cardapio.foto}
              />
            </li>
          ))}
        </ListadePratos>
      </div>
    </Container>
  )
}

export default ListaPratos
