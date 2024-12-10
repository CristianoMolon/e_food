import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Titulo } from '../../styles'
import Botoes from '../../components/Buttons'
import { Overlay, Sidebar } from '../../components/Carrinho/styles'
import { DeliveryContainer, InputGroup, Row } from './styles'
import { usePurchaseMutation } from '../../services/api'
import { open } from '../../store/reducers/cart'
import { formataPreco, getTotalPrice } from '../../utils'
import { RootReducer } from '../../store'

const Checkout = ({ onClose }: { onClose: () => void }) => {
  const { itens, isOpen } = useSelector((state: RootReducer) => state.cart)
  const [pagamento, setPagamento] = useState(false)
  const [abreCarrinho, setAbreCarrinho] = useState(false)
  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      id: 1,
      preco: 0,
      nomeEntrega: '',
      endereco: '',
      cidade: '',
      CEP: '',
      numero: '',
      complemento: '',
      nomeCartao: '',
      numeroCartao: '',
      cvv: 0,
      mesValidade: '',
      anoValidade: ''
    },
    validationSchema: Yup.object({
      //entrega
      nomeEntrega: Yup.string()
        .min(3, 'O nome precisa ter no mínimo 3 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string()
        .min(10, 'O endereço precisa ter no mínimo 10 caracteres')
        .required('O campo é obrigatório'),
      cidade: Yup.string().required('O campo é obrigatório'),
      CEP: Yup.string()
        .min(8, 'O campo precisa ter 8 caracteres')
        .max(8, 'O campo precisa ter 8 caracteres')
        .required('O campo é obrigatório'),
      numero: Yup.string().required('O campo é obrigatório'),
      complemento: Yup.string().min(
        3,
        'O nome precisa ter no mínimo 3 caracteres'
      ),
      nomeCartao: Yup.string().when((values, schema) =>
        pagamento ? schema.required('O campo é obrigatório') : schema
      ),
      numeroCartao: Yup.string().when((values, schema) =>
        pagamento ? schema.required('O campo é obrigatório') : schema
      ),
      cvv: Yup.string().when((values, schema) =>
        pagamento ? schema.required('O campo é obrigatório') : schema
      ),
      mesValidade: Yup.string().when((values, schema) =>
        pagamento ? schema.required('O campo é obrigatório') : schema
      ),
      anoValidade: Yup.string().when((values, schema) =>
        pagamento ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 0
          }
        ],
        delivery: {
          receiver: values.nomeEntrega,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: String(values.cvv),
            number: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomeCartao,
            number: values.numero,
            code: Number(values.CEP),
            expires: {
              month: Number(values.mesValidade),
              year: Number(values.anoValidade)
            }
          }
        }
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const Dispatch = useDispatch()

  const voltaCarrinho = () => {
    setAbreCarrinho(true)
    onClose()
    Dispatch(open())
  }

  return (
    <DeliveryContainer className={isOpen ? 'is-open' : ''}>
      <Overlay />
      <Sidebar>
        {isSuccess && data ? (
          <>
            <Row>
              <Titulo>Pedido Realizado - {data.orderId}</Titulo>
              <p className="margin-top">
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p className="margin-top">
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p className="margin-top">
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p className="margin-top">
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </Row>
            <Botoes type="button">Concluir</Botoes>
          </>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {pagamento ? (
              <>
                <Titulo>
                  Pagamento - Valor a pagar {formataPreco(getTotalPrice(itens))}
                </Titulo>
                <Row>
                  <InputGroup>
                    <label htmlFor="nomeCartao">Nome no cartão</label>
                    <input
                      id="nomeCartao"
                      type="text"
                      name="nomeCartao"
                      value={form.values.nomeCartao}
                      onChange={form.handleChange}
                    />
                    <small>
                      {getErrorMessage('nomeCartao', form.errors.nomeCartao)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="numeroCartao">Número do cartão</label>
                    <input
                      id="numeroCartao"
                      type="text"
                      name="numeroCartao"
                      value={form.values.numeroCartao}
                      onChange={form.handleChange}
                    />
                    <small>
                      {getErrorMessage(
                        'numeroCartao',
                        form.errors.numeroCartao
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="87px">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      id="cvv"
                      type="text"
                      name="cvv"
                      value={form.values.cvv}
                      onChange={form.handleChange}
                    />
                    <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
                  </InputGroup>
                  <InputGroup maxWidth="155px">
                    <label htmlFor="mesValidade">Mês de vencimento</label>
                    <input
                      id="mesValidade"
                      type="text"
                      name="mesValidade"
                      value={form.values.mesValidade}
                      onChange={form.handleChange}
                    />
                    <small>
                      {getErrorMessage('mesValidade', form.errors.mesValidade)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="155px">
                    <label htmlFor="anoValidade">Ano de vencimento</label>
                    <input
                      id="anoValidade"
                      type="text"
                      name="anoValidade"
                      value={form.values.anoValidade}
                      onChange={form.handleChange}
                    />
                    <small>
                      {getErrorMessage('manoValidade', form.errors.anoValidade)}
                    </small>
                  </InputGroup>
                </Row>
                <Botoes type="submit" onClick={form.handleSubmit}>
                  Finalizar Compra
                </Botoes>
                <Botoes type="button" onClick={() => setPagamento(false)}>
                  Voltar para a entrega
                </Botoes>
              </>
            ) : (
              <>
                <Titulo>Entrega</Titulo>
                <Row>
                  <InputGroup>
                    <label htmlFor="nomeEntrega">Quem ira receber</label>
                    <input
                      id="nomeEntrega"
                      type="text"
                      name="nomeEntrega"
                      value={form.values.nomeEntrega}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('nomeEntrega', form.errors.nomeEntrega)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="endereco">Endereço</label>
                    <input
                      id="endereco"
                      type="text"
                      name="endereco"
                      value={form.values.endereco}
                      onChange={form.handleChange}
                    />
                    <small>
                      {getErrorMessage('endereco', form.errors.endereco)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cidade">Cidade</label>
                    <input
                      id="cidade"
                      type="text"
                      name="cidade"
                      value={form.values.cidade}
                      onChange={form.handleChange}
                    />
                    <small>
                      {getErrorMessage('cidade', form.errors.cidade)}
                    </small>
                  </InputGroup>
                  <div className="inputDisplay">
                    <InputGroup maxWidth="155px">
                      <label htmlFor="CEP">CEP</label>
                      <input
                        id="CEP"
                        type="text"
                        name="CEP"
                        value={form.values.CEP}
                        onChange={form.handleChange}
                      />
                      <small>{getErrorMessage('CEP', form.errors.CEP)}</small>
                    </InputGroup>
                    <InputGroup maxWidth="155px">
                      <label htmlFor="numero">Número</label>
                      <input
                        id="numero"
                        type="text"
                        name="numero"
                        value={form.values.numero}
                        onChange={form.handleChange}
                      />
                      <small>
                        {getErrorMessage('numero', form.errors.numero)}
                      </small>
                    </InputGroup>
                  </div>
                  <InputGroup>
                    <label htmlFor="complemento">Complemento(opcional)</label>
                    <input
                      id="complemento"
                      type="text"
                      name="complemento"
                      value={form.values.complemento}
                      onChange={form.handleChange}
                    />
                  </InputGroup>
                </Row>
                <Botoes type="button" onClick={() => setPagamento(true)}>
                  Continuar para o pagamento
                </Botoes>
                <Botoes type="button" onClick={voltaCarrinho}>
                  Voltar para o carrinho
                </Botoes>
              </>
            )}
          </form>
        )}
      </Sidebar>
    </DeliveryContainer>
  )
}

export default Checkout
