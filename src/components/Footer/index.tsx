import logo from '../../assets/images/simbolos/logo.png'
import instagram from '../../assets/images//simbolos/instagram.png'
import facebook from '../../assets/images//simbolos/facebook.png'
import twitter from '../../assets/images//simbolos/twitter.png'
import { Container, SocialLinks } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <a href="#">
        <img src={logo} alt="efood" />
      </a>
      <SocialLinks>
        <a href="#">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
      </SocialLinks>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </div>
  </Container>
)

export default Footer
