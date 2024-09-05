import { Card, Descricao, Infos, Tag } from './styles'
import estrela from '../../assets/images//simbolos/estrela.png'
import { Titulo } from '../../styles'
import Botoes from '../Buttons'

type Props = {
  tipo: string
  destacado: boolean
  descricao: string
  titulo: string
  capa: string
  avaliacao: string
  id: number
}

const Cards = ({
  titulo,
  descricao,
  tipo,
  capa,
  avaliacao,
  id,
  destacado
}: Props) => {
  const getDestacado = (destacado: boolean) => {
    if (destacado === true) {
      return 'Destaque da semana'
    }
  }

  return (
    <Card>
      <img src={capa} alt={titulo} />
      <Infos>
        <Tag>{getDestacado(destacado)}</Tag>
        <Tag>{tipo}</Tag>
      </Infos>
      <div className="align">
        <Titulo>{titulo}</Titulo>
        <Titulo>
          {avaliacao} <img src={estrela} />
        </Titulo>
      </div>
      <Descricao>{descricao}</Descricao>
      <Botoes type="link" to="/cardapio">
        Saiba mais
      </Botoes>
    </Card>
  )
}

export default Cards
