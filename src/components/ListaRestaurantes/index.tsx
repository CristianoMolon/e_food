import Cards from '../Cards'
import Loader from '../Loader'

import { Container, ListaRestaurante } from './styles'

type Props = {
  restaurantes: Restaurantes[]
  isLoading: boolean
}

const Home = ({ restaurantes, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <Container>
      <div className="container">
        <ListaRestaurante>
          {restaurantes &&
            restaurantes.map((restaurante) => (
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
}

export default Home
