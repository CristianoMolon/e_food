import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import ListaPratos from '../../components/ListaPratos'
import { useGetCardapiosQuery } from '../../services/api'
import Carrinho from '../../components/Carrinho'
import Loader from '../../components/Loader'

type PratosParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as PratosParams

  const { data: cardapio, isLoading } = useGetCardapiosQuery(id)

  if (!cardapio) {
    return <Loader />
  }

  return (
    <>
      <Banner cardapios={cardapio} />
      <ListaPratos cardapios={cardapio.cardapio} isLoading={isLoading} />
      <Carrinho />
    </>
  )
}

export default Perfil
