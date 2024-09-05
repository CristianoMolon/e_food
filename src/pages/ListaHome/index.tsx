import { useEffect, useState } from 'react'

import ListaRestaurantes from '../../components/ListaRestaurantes'
import Header from '../../components/Header'

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurante, setRestaurante] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])

  return (
    <>
      <div>
        <Header />
      </div>
      <ListaRestaurantes restaurantes={restaurante} />
    </>
  )
}
export default Home
