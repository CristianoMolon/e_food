import Cards from '../Cards'
import { Container, ListaRestaurante } from './styles'

const Home = () => (
  <Container>
    <div className="container">
      <ListaRestaurante>
        <li>
          <Cards />
        </li>
        <li>
          <Cards />
        </li>
        <li>
          <Cards />
        </li>
        <li>
          <Cards />
        </li>
      </ListaRestaurante>
    </div>
  </Container>
)

export default Home
