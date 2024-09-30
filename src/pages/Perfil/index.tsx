import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import ListaPratos from '../../components/ListaPratos'
import { useGetCardapiosQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: cardapio } = useGetCardapiosQuery(id!)

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Banner cardapios={cardapio} />
      <ListaPratos cardapios={cardapio.cardapio} />
    </>
  )
}

export default Perfil
