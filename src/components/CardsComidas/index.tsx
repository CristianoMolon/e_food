import { useState } from 'react'
import Botoes from '../Buttons'
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
}

interface ModalState {
  isVisible: boolean
}

const CardsComidas = ({ nome, descricao, foto }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <>
      <Comidas>
        <img src={foto} alt={nome} />
        <div className="align">
          <NomeDoPrato>{nome}</NomeDoPrato>
        </div>
        <DescricDoPrato>{descricao}</DescricDoPrato>
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
              <Descricao>Serve:</Descricao>
              <Botoes type="button">Adicionar ao carrinho</Botoes>
            </div>
          </ModalContent>
        </ModalCard>
        <div onClick={() => closeModal()} className="overlay"></div>
      </Modal>
    </>
  )
}

export default CardsComidas
