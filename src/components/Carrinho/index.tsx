import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import * as S from './styles'
import { BotaoAdd } from '../Buttons/styles'
import { Descricao } from '../Cards/styles'
import { Titulo } from '../../styles'

import { RootReducer } from '../../store'
import { remove, close } from '../../store/reducers/cart'
import { formataPreco, getTotalPrice } from '../../utils'
import Checkout from '../../pages/Checkout'

const Carrinho = () => {
  const { isOpen, itens } = useSelector((state: RootReducer) => state.cart)

  const [showCheckout, setShowCheckout] = useState(false)

  const dispatch = useDispatch()

  const fechaCarrinho = () => {
    dispatch(close())
  }

  const removerItem = (id: number) => {
    dispatch(remove(id))
  }

  const abreCheckout = () => {
    if (itens.length > 0) {
      setShowCheckout(true)
      dispatch(close())
    }
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={fechaCarrinho} />
        <S.Sidebar>
          {itens.length > 0 ? (
            <>
              <ul>
                {itens.map((item) => (
                  <S.Item key={item.id}>
                    <img src={item.foto}></img>
                    <div>
                      <Titulo>{item.nome}</Titulo>
                      <p>{formataPreco(item.preco)}</p>
                    </div>
                    <button
                      onClick={() => removerItem(item.id)}
                      type="button"
                    ></button>
                  </S.Item>
                ))}
              </ul>
              <div>
                <Descricao>Valor total:</Descricao>
                <Descricao>{formataPreco(getTotalPrice(itens))}</Descricao>
              </div>
              <BotaoAdd type="button" onClick={abreCheckout}>
                Continuar com a entrega
              </BotaoAdd>
            </>
          ) : (
            <Descricao className="emptyCart">O carrinho está vazio!</Descricao>
          )}
        </S.Sidebar>
      </S.CartContainer>
      {showCheckout && <Checkout onClose={() => setShowCheckout(false)} />}
    </>
  )
}

export default Carrinho
