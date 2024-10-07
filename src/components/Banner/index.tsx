import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import vetor from '../../assets/images/simbolos/Vector.png'
import logo from '../../assets/images/simbolos/logo.png'
import { Titulo } from '../../styles'
import { Imagem, Tag, Vetor } from './styles'
import { Restaurantes } from '../../pages/ListaHome'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type Props = {
  cardapios: Restaurantes
}

const Banner = ({ cardapios }: Props) => {
  const dispatch = useDispatch()

  const openCarrinho = () => {
    dispatch(open())
  }

  const { itens } = useSelector((state: RootReducer) => state.cart)

  return (
    <>
      <Vetor style={{ backgroundImage: `url(${vetor})` }}>
        <div className="container">
          <Link to="/">
            <Titulo>Restaurantes</Titulo>
          </Link>
          <img src={logo} alt="Efood" />
          <a href="#" onClick={openCarrinho}>
            <Titulo>{itens.length} Produtos(s) no carrinho</Titulo>
          </a>
        </div>
      </Vetor>

      <Imagem
        key={cardapios.id}
        style={{ backgroundImage: `url(${cardapios.capa})` }}
      >
        <div className="container">
          <Tag>{cardapios.tipo}</Tag>
          <Titulo>{cardapios.titulo}</Titulo>
        </div>
      </Imagem>
    </>
  )
}

export default Banner
