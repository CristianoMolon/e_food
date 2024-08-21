import Header from './components/Header'
import Home from './components/Home'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
      </div>
      <Home />
    </>
  )
}

export default App
