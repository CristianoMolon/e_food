import { Routes, Route } from 'react-router-dom'

import Home from './pages/ListaHome'
import Perfil from './pages/Perfil'
import Checkout from './pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<Perfil />} />
    <Route
      path="/checkout"
      element={
        <Checkout
          onClose={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      }
    />
  </Routes>
)

export default Rotas
