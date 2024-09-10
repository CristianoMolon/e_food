import { Link } from 'react-router-dom'

import vetor from '../../assets/images/simbolos/Vector.png'
import logo from '../../assets/images/simbolos/logo.png'
import { Titulo } from '../../styles'
import { Imagem, Tag, Vetor } from './styles'
import { Restaurantes } from '../../pages/ListaHome'

type Props = {
  cardapios: Restaurantes
}

const Banner = ({ cardapios }: Props) => {
  return (
    <>
      <Vetor style={{ backgroundImage: `url(${vetor})` }}>
        <div className="container">
          <Link to="/">
            <Titulo>Restaurantes</Titulo>
          </Link>
          <img src={logo} alt="Efood" />
          <a href="#">
            <Titulo>0 Produtos(s) no carrinho</Titulo>
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
