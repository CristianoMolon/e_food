import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'

import { GlobalCss } from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div>
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
