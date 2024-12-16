import { ClockLoader } from 'react-spinners'
import { Cores } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <ClockLoader color={Cores.vermelho} />
  </Container>
)

export default Loader
