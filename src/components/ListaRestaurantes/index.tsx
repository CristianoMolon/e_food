import { Restaurantes } from '../../pages/ListaHome'
import Cards from '../Cards'
import { Container, ListaRestaurante } from './styles'

type Props = {
  restaurantes: Restaurantes[]
}

const Home = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <ListaRestaurante>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <Cards
              id={restaurante.id}
              tipo={restaurante.tipo}
              descricao={restaurante.descricao}
              titulo={restaurante.titulo}
              capa={restaurante.capa}
              avaliacao={restaurante.avaliacao}
              destacado={restaurante.destacado}
            />
          </li>
        ))}
      </ListaRestaurante>
    </div>
  </Container>
)

export default Home
