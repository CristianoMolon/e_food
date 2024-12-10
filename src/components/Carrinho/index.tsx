import { useDispatch, useSelector } from 'react-redux'

import { CartContainer, Item, Overlay, Sidebar } from './styles'
import { BotaoAdd } from '../Buttons/styles'
import { Descricao } from '../Cards/styles'
import { RootReducer } from '../../store'
import { remove, close } from '../../store/reducers/cart'
import { Titulo } from '../../styles'
import { formataPreco, getTotalPrice } from '../../utils'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Checkout from '../../pages/Checkout'

const Carrinho = () => {
  const { isOpen, itens } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const [showCheckout, setShowCheckout] = useState(false)

  const dispatch = useDispatch()

  const fechaCarrinho = () => {
    dispatch(close())
  }

  const removerItem = (id: number) => {
    dispatch(remove(id))
  }

  const abreCheckout = () => {
    setShowCheckout(true)
    dispatch(close())
  }

  return (
    <>
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
            <Descricao>{formataPreco(getTotalPrice(itens))}</Descricao>
          </div>
          <BotaoAdd type="button" onClick={abreCheckout}>
            Continuar com a entrega
          </BotaoAdd>
        </Sidebar>
      </CartContainer>
      {showCheckout && <Checkout onClose={() => setShowCheckout(false)} />}
    </>
  )
}

export default Carrinho
