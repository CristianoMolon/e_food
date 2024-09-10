import { Routes, Route } from 'react-router-dom'

import Home from './pages/ListaHome'
import Cardapio from './pages/Cardapio'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<Cardapio />} />
  </Routes>
)

export default Rotas