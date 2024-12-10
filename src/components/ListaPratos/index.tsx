import CardsComidas from '../CardsComidas'
import { Container } from '../ListaRestaurantes/styles'
import { ListadePratos } from './styles'

type Props = {
  cardapios: Cardapio[]
}

const ListaPratos = ({ cardapios }: Props) => {
  return (
    <Container>
      <div className="container">
        <ListadePratos>
          {cardapios.map((cardapio) => (
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
