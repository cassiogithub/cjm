import './App.css'
import { CadastroScreen, Home, LoginScreen } from './ui/screens'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/cadastro" element={<CadastroScreen />} />
        <Route path="*" element={<LoginScreen />} />
      </Routes>
    </div>
  )
}

export default App
