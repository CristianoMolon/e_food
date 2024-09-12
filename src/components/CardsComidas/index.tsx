import { useState } from 'react'
import Botoes from '../Buttons'
import { BotaoAdd } from '../Buttons/styles'
import {
  Comidas,
  DescricDoPrato,
  Modal,
  ModalCard,
  ModalContent,
  NomeDoPrato
} from './styles'

import fechar from '../../assets/images/simbolos/fechar.png'
import { Titulo } from '../../styles'
import { Descricao } from '../Cards/styles'

type Props = {
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

const CardsComidas = ({ nome, descricao, foto, preco, porcao }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-Br', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 250) + '...'
    }
    return descricao
  }

  return (
    <>
      <Comidas>
        <img src={foto} alt={nome} />
        <div className="align">
          <NomeDoPrato>{nome}</NomeDoPrato>
        </div>
        <DescricDoPrato>{getDescricao(descricao)}</DescricDoPrato>
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
      </Comidas>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalCard>
          <header>
            <img src={fechar} onClick={() => closeModal()} />
          </header>
          <ModalContent className="container">
            <img src={foto} />
            <div>
              <Titulo>{nome}</Titulo>
              <Descricao>{descricao}</Descricao>
              <Descricao>Serve: {porcao}</Descricao>
              <BotaoAdd type="button">
                Adicionar ao carrinho - {formataPreco(preco)}
              </BotaoAdd>
            </div>
          </ModalContent>
        </ModalCard>
        <div onClick={() => closeModal()} className="overlay"></div>
      </Modal>
    </>
  )
}

export default CardsComidas
