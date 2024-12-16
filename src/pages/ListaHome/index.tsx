import ListaRestaurantes from '../../components/ListaRestaurantes'
import Header from '../../components/Header'
import { useGetRestaurantQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Home = () => {
  const { data: restaurantes, isLoading: isLoadingHome } =
    useGetRestaurantQuery()

  if (restaurantes) {
    return (
      <>
        <div>
          <Header />
        </div>
        <ListaRestaurantes
          restaurantes={restaurantes}
          isLoading={isLoadingHome}
        />
      </>
    )
  }
  return <Loader />
}

export default Home
