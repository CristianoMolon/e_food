import vetorImg from '../../assets/images/simbolos/Vector.png'
import logo from '../../assets/images/simbolos/logo.png'
import { Logo, TextoHeader, Vetor } from './styles'

const Header = () => (
  <Vetor style={{ backgroundImage: `url(${vetorImg})` }}>
    <Logo>
      <img src={logo} alt="Efood" />
      <TextoHeader>
        Viva experiências gastronômicas no conforto da sua casa
      </TextoHeader>
    </Logo>
  </Vetor>
)

export default Header
