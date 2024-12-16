import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import vetor from '../../assets/images/simbolos/Vector.png'
import logo from '../../assets/images/simbolos/logo.png'

import { Titulo } from '../../styles'
import * as S from './styles'

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
      <S.Vetor style={{ backgroundImage: `url(${vetor})` }}>
        <div className="container">
          <Link to="/">
            <Titulo>Restaurantes</Titulo>
          </Link>
          <img src={logo} alt="Efood" />
          <a href="#" onClick={openCarrinho}>
            <Titulo>{itens.length} Produtos(s) no carrinho</Titulo>
          </a>
        </div>
      </S.Vetor>

      <S.Imagem
        key={cardapios.id}
        style={{ backgroundImage: `url(${cardapios.capa})` }}
      >
        <div className="container">
          <S.Tag>{cardapios.tipo}</S.Tag>
          <Titulo>{cardapios.titulo}</Titulo>
        </div>
      </S.Imagem>
    </>
  )
}

export default Banner
