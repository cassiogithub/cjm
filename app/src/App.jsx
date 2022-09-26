import './App.css'
import { CadastroScreen, Home, LoginScreen, NovoEvento, PrivateRoute } from './ui/screens'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/cadastro" element={<CadastroScreen />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/novo-evento"
          element={
            <PrivateRoute>
              <NovoEvento />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<LoginScreen />} />
      </Routes>
    </div>
  )
}

export default App
