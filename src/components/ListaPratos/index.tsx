import Pratos from '../../Models/Pratos'
import CardsComidas from '../CardsComidas'
import { Container } from '../ListaRestaurantes/styles'
import { ListadePratos } from './styles'

type Props = {
  pratos: Pratos[]
}

const ListaPratos = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      <ListadePratos>
        {pratos.map((prato) => (
          <CardsComidas
            key={prato.id}
            descricao={prato.descricao}
            titulo={prato.titulo}
            imagem={prato.imagem}
          />
        ))}
      </ListadePratos>
    </div>
  </Container>
)

export default ListaPratos
