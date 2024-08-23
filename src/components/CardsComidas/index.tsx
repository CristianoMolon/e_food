import { BotaoAdd, Comidas, DescricDoPrato, NomeDoPrato } from './styles'

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
    <BotaoAdd>Adicionar ao carrinho</BotaoAdd>
  </Comidas>
)

export default CardsComidas
