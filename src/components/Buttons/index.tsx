import { Botao, BotaoAdd } from './styles'

type Props = {
  type: 'button' | 'link'
  to?: string
  onClick?: () => void
  children: string
}

const Botoes = ({ type, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <BotaoAdd type="button" onClick={onClick}>
        {children}
      </BotaoAdd>
    )
  }

  return <Botao to={to as string}>{children}</Botao>
}

export default Botoes
