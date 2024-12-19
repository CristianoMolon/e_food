import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useNavigate } from 'react-router-dom'

import { Titulo } from '../../styles'
import { Overlay, Sidebar } from '../../components/Carrinho/styles'
import * as S from './styles'

import { usePurchaseMutation } from '../../services/api'
import { open, clear } from '../../store/reducers/cart'
import { formataPreco, getTotalPrice } from '../../utils'
import { RootReducer } from '../../store'
import Botoes from '../../components/Buttons'

const Checkout = ({ onClose }: { onClose: () => void }) => {
  const { itens } = useSelector((state: RootReducer) => state.cart)
  const [pagamento, setPagamento] = useState(false)
  const [abreCarrinho, setAbreCarrinho] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
      cvv: '',
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
        .min(9, 'O campo precisa ter 8 caracteres')
        .max(9, 'O campo precisa ter 8 caracteres')
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

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [dispatch, isSuccess])

  const finalizaCompra = () => {
    if (itens.length === 0) {
      return navigate('/')
    }
  }

  const getErrorMessage = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const voltaCarrinho = () => {
    setAbreCarrinho(true)
    onClose()
    dispatch(open())
  }

  const validaEntrega = () => {
    const isEntrgaValida =
      !form.errors.nomeEntrega &&
      !form.errors.endereco &&
      !form.errors.cidade &&
      !form.errors.numero &&
      !form.errors.CEP

    if (isEntrgaValida) {
      setPagamento(true)
    }
  }

  return (
    <S.DeliveryContainer>
      <Overlay />
      <Sidebar>
        {isSuccess && data ? (
          <>
            <S.Row>
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
            </S.Row>
            <Botoes type="button" onClick={() => finalizaCompra()}>
              Concluir
            </Botoes>
          </>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {pagamento ? (
              <>
                <Titulo>
                  Pagamento - Valor a pagar {formataPreco(getTotalPrice(itens))}
                </Titulo>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="nomeCartao">Nome no cartão</label>
                    <input
                      id="nomeCartao"
                      type="text"
                      name="nomeCartao"
                      value={form.values.nomeCartao}
                      onChange={form.handleChange}
                      className={getErrorMessage('nomeCartao') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="numeroCartao">Número do cartão</label>
                    <InputMask
                      id="numeroCartao"
                      type="text"
                      name="numeroCartao"
                      value={form.values.numeroCartao}
                      onChange={form.handleChange}
                      className={getErrorMessage('numeroCartao') ? 'error' : ''}
                      mask="9999 9999 9999 9999"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="87px">
                    <label htmlFor="cvv">CVV</label>
                    <InputMask
                      id="cvv"
                      type="text"
                      name="cvv"
                      value={form.values.cvv}
                      onChange={form.handleChange}
                      className={getErrorMessage('cvv') ? 'error' : ''}
                      mask="999"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="mesValidade">Mês de vencimento</label>
                    <InputMask
                      id="mesValidade"
                      type="text"
                      name="mesValidade"
                      value={form.values.mesValidade}
                      onChange={form.handleChange}
                      className={getErrorMessage('mesValidade') ? 'error' : ''}
                      mask="99"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="anoValidade">Ano de vencimento</label>
                    <InputMask
                      id="anoValidade"
                      type="text"
                      name="anoValidade"
                      value={form.values.anoValidade}
                      onChange={form.handleChange}
                      className={getErrorMessage('anoValidade') ? 'error' : ''}
                      mask="99"
                    />
                  </S.InputGroup>
                </S.Row>
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
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="nomeEntrega">Quem ira receber</label>
                    <input
                      id="nomeEntrega"
                      type="text"
                      name="nomeEntrega"
                      value={form.values.nomeEntrega}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getErrorMessage('nomeEntrega') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="endereco">Endereço</label>
                    <input
                      id="endereco"
                      type="text"
                      name="endereco"
                      value={form.values.endereco}
                      onChange={form.handleChange}
                      className={getErrorMessage('endereco') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cidade">Cidade</label>
                    <input
                      id="cidade"
                      type="text"
                      name="cidade"
                      value={form.values.cidade}
                      onChange={form.handleChange}
                      className={getErrorMessage('cidade') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <div className="inputDisplay">
                    <S.InputGroup maxWidth="155px">
                      <label htmlFor="CEP">CEP</label>
                      <InputMask
                        id="CEP"
                        type="text"
                        name="CEP"
                        value={form.values.CEP}
                        onChange={form.handleChange}
                        className={getErrorMessage('CEP') ? 'error' : ''}
                        mask="99999-999"
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="155px">
                      <label htmlFor="numero">Número</label>
                      <input
                        id="numero"
                        type="text"
                        name="numero"
                        value={form.values.numero}
                        onChange={form.handleChange}
                        className={getErrorMessage('numero') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </div>
                  <S.InputGroup>
                    <label htmlFor="complemento">Complemento(opcional)</label>
                    <input
                      id="complemento"
                      type="text"
                      name="complemento"
                      value={form.values.complemento}
                      onChange={form.handleChange}
                    />
                  </S.InputGroup>
                </S.Row>
                <Botoes type="button" onClick={validaEntrega}>
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
    </S.DeliveryContainer>
  )
}

export default Checkout
