import { Card, Descricao, Infos, Tag, Titulo } from './styles'
import estrela from '../../assets/images/estrela.png'
import { Botao } from '../../styles'

const Cards = () => (
  <Card>
    <img src="//placehold.it/472x217" />
    <Infos>
      <Tag>tag</Tag>
      <Tag>promo</Tag>
    </Infos>
    <div className="align">
      <Titulo>Titulo</Titulo>
      <Titulo>
        5.0 <img src={estrela} />
      </Titulo>
    </div>
    <Descricao>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis,
      exercitationem ad illum autem minima sequi asperiores? Modi quod rem iure
      dignissimos, quas voluptate maxime, doloribus voluptatem consectetur,
      porro aliquid aliquam.
    </Descricao>
    <Botao>butao</Botao>
  </Card>
)

export default Cards
