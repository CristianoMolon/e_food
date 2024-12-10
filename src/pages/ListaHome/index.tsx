import ListaRestaurantes from '../../components/ListaRestaurantes'
import Header from '../../components/Header'
import { useGetRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes } = useGetRestaurantQuery()

  if (restaurantes) {
    return (
      <>
        <div>
          <Header />
        </div>
        <ListaRestaurantes restaurantes={restaurantes} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
