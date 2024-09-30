import ListaRestaurantes from '../../components/ListaRestaurantes'
import Header from '../../components/Header'
import { useGetRestaurantQuery } from '../../services/api'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

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
