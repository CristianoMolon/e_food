import * as S from './styles'
import estrela from '../../assets/images//simbolos/estrela.png'
import { Titulo } from '../../styles'
import Botoes from '../Buttons'

export type Props = {
  destacado: string[]
  descricao: string
  titulo: string
  capa: string
  avaliacao: string
  id: number
}

const Cards = ({
  titulo,
  descricao,
  capa,
  avaliacao,
  id,
  destacado
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 300) {
      return descricao.slice(0, 275) + '...'
    }
    return descricao
  }

  return (
    <S.Card>
      <img src={capa} alt={titulo} />
      <S.Infos>
        {destacado.map((info) => {
          if (info) {
            return <S.Tag key={info}>{info}</S.Tag>
          }
        })}
      </S.Infos>
      <div className="align">
        <Titulo>{titulo}</Titulo>
        <Titulo>
          {avaliacao} <img src={estrela} />
        </Titulo>
      </div>
      <S.Descricao>{getDescricao(descricao)}</S.Descricao>
      <Botoes type="link" to={`/restaurantes/${id}`}>
        Saiba mais
      </Botoes>
    </S.Card>
  )
}

export default Cards
