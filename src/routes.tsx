import { Routes, Route } from 'react-router-dom'

import Home from './pages/ListaHome'
import CardapioRes from './pages/Cardapio'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<CardapioRes />} />
  </Routes>
)

export default Rotas
