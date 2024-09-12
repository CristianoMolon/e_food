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
              descricao={restaurante.descricao}
              titulo={restaurante.titulo}
              capa={restaurante.capa}
              avaliacao={restaurante.avaliacao}
              destacado={[
                restaurante.destacado ? 'Destaque da Semana' : '',
                restaurante.tipo
              ]}
            />
          </li>
        ))}
      </ListaRestaurante>
    </div>
  </Container>
)

export default Home
