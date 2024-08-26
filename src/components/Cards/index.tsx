import { Card, Descricao, Infos, Tag } from './styles'
import estrela from '../../assets/images//simbolos/estrela.png'
import { Titulo } from '../../styles'
import Botoes from '../Buttons'

type Props = {
  infos: string[]
  descricao: string
  titulo: string
  imagem: string
  nota: string
}

const Cards = ({ titulo, descricao, infos, imagem, nota }: Props) => (
  <Card>
    <img src={imagem} alt={titulo} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <div className="align">
      <Titulo>{titulo}</Titulo>
      <Titulo>
        {nota} <img src={estrela} />
      </Titulo>
    </div>
    <Descricao>{descricao}</Descricao>
    <Botoes type="link" to="/cardapio">
      Saiba mais
    </Botoes>
  </Card>
)

export default Cards
