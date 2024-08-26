import { Link } from 'react-router-dom'
import italiana from '../../assets/images/comidas/italiana.png'
import vetor from '../../assets/images/simbolos/Vector.png'
import logo from '../../assets/images/simbolos/logo.png'
import { Titulo } from '../../styles'
import { Imagem, Tag, Vetor } from './styles'

const Banner = () => (
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
    <Imagem style={{ backgroundImage: `url(${italiana})` }}>
      <div className="container">
        <Tag>Italiana</Tag>
        <Titulo>La Dulce Vita Tattoria</Titulo>
      </div>
    </Imagem>
  </>
)

export default Banner
