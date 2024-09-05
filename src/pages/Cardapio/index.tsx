import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Restaurantes } from '../ListaHome'
import Banner from '../../components/Banner'
import ListaPratos from '../../components/ListaPratos'

const Cardapio = () => {
  const { id } = useParams()

  const [prato, setPrato] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPrato(res))
  }, [id])

  return (
    <>
      <Banner />
      <ListaPratos pratos={prato} />
    </>
  )
}

export default Cardapio
