import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Botoes from '../Buttons'
import { BotaoAdd } from '../Buttons/styles'
import * as S from './styles'
import { Descricao } from '../Cards/styles'
import { Titulo } from '../../styles'

import fechar from '../../assets/images/simbolos/fechar.png'

import { add, open } from '../../store/reducers/cart'
import { formataPreco } from '../../utils'

type Props = {
  prato: Cardapio
  descricao: string
  nome: string
  foto: string
  preco: number
  id: number
  porcao: string
}

interface ModalState {
  isVisible: boolean
}

const CardsComidas = ({
  prato,
  nome,
  descricao,
  foto,
  preco,
  porcao
}: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 250) + '...'
    }
    return descricao
  }

  const dispatch = useDispatch()

  const addCarrinho = () => {
    dispatch(add(prato))
    dispatch(open())
  }

  return (
    <>
      <S.Comidas>
        <img src={foto} alt={nome} />
        <div className="align">
          <S.NomeDoPrato>{nome}</S.NomeDoPrato>
        </div>
        <S.DescricDoPrato>{getDescricao(descricao)}</S.DescricDoPrato>
        <Botoes
          onClick={() => {
            setModal({
              isVisible: true
            })
          }}
          type="button"
        >
          Adicionar ao carrinho
        </Botoes>
      </S.Comidas>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalCard>
          <header>
            <img src={fechar} onClick={() => closeModal()} />
          </header>
          <S.ModalContent className="container">
            <img src={foto} />
            <div>
              <Titulo>{nome}</Titulo>
              <Descricao>{descricao}</Descricao>
              <Descricao>Serve: {porcao}</Descricao>
              <BotaoAdd onClick={addCarrinho} type="button">
                Adicionar ao carrinho - {formataPreco(preco)}
              </BotaoAdd>
            </div>
          </S.ModalContent>
        </S.ModalCard>
        <div onClick={() => closeModal()} className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default CardsComidas
