import { useDispatch, useSelector } from 'react-redux'

import { CartContainer, Item, Overlay, Sidebar } from './styles'
import { BotaoAdd } from '../Buttons/styles'
import { Descricao } from '../Cards/styles'
import { RootReducer } from '../../store'
import { remove, close } from '../../store/reducers/cart'
import { Titulo } from '../../styles'
import { formataPreco } from '../CardsComidas'

const Carrinho = () => {
  const { isOpen, itens } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const fechaCarrinho = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return itens.reduce((precoTotal, precoAtual) => {
      return (precoTotal += precoAtual.preco!)
    }, 0)
  }

  const removerItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={fechaCarrinho} />
      <Sidebar>
        <ul>
          {itens.map((item) => (
            <Item key={item.id}>
              <img src={item.foto}></img>
              <div>
                <Titulo>{item.nome}</Titulo>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <button
                onClick={() => removerItem(item.id)}
                type="button"
              ></button>
            </Item>
          ))}
        </ul>
        <div>
          <Descricao>Valor total:</Descricao>
          <Descricao>{formataPreco(getTotalPrice())}</Descricao>
        </div>
        <BotaoAdd type="button">Continuar com a entrega</BotaoAdd>
      </Sidebar>
    </CartContainer>
  )
}

export default Carrinho
