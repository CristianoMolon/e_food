import Restaurante from '../../Models/Restaurantes'
import Cards from '../Cards'
import { Container, ListaRestaurante } from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const Home = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <ListaRestaurante>
        {restaurantes.map((restaurante) => (
          <Cards
            key={restaurante.id}
            infos={restaurante.infos}
            descricao={restaurante.descricao}
            titulo={restaurante.titulo}
            imagem={restaurante.imagem}
            nota={restaurante.nota}
          />
        ))}
      </ListaRestaurante>
    </div>
  </Container>
)

export default Home
