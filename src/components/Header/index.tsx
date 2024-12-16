import vetorImg from '../../assets/images/simbolos/Vector.png'
import logo from '../../assets/images/simbolos/logo.png'

import * as S from './styles'

const Header = () => (
  <S.Vetor style={{ backgroundImage: `url(${vetorImg})` }}>
    <S.Logo>
      <img src={logo} alt="Efood" />
      <S.TextoHeader>
        Viva experiências gastronômicas no conforto da sua casa
      </S.TextoHeader>
    </S.Logo>
  </S.Vetor>
)

export default Header
