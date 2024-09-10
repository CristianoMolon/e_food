import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Restaurantes } from '../ListaHome'
import Banner from '../../components/Banner'
import ListaPratos from '../../components/ListaPratos'

const Cardapio = () => {
  const { id } = useParams()

  const [cardapio, setCardapio] = useState<Restaurantes>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [id])

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Banner cardapios={cardapio} />
      <ListaPratos cardapios={cardapio} />
    </>
  )
}

export default Cardapio
