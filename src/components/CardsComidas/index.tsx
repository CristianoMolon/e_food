import Botoes from '../Buttons'
import { Comidas, DescricDoPrato, NomeDoPrato } from './styles'

type Props = {
  descricao: string
  titulo: string
  imagem: string
}

const CardsComidas = ({ titulo, descricao, imagem }: Props) => (
  <Comidas>
    <img src={imagem} alt={titulo} />
    <div className="align">
      <NomeDoPrato>{titulo}</NomeDoPrato>
    </div>
    <DescricDoPrato>{descricao}</DescricDoPrato>
    <Botoes type="button">Adicionar ao carrinho</Botoes>
  </Comidas>
)

export default CardsComidas
