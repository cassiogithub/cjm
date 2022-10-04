import './App.css'
import {
  BuscarEventoScreen,
  CadastroScreen,
  Home,
  LoginScreen,
  NovoEvento,
  PrivateRoute,
} from './ui/screens'
import { Routes, Route } from 'react-router-dom'
import { Loader } from './ui/components'

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
        <Route
          path="/buscar-evento"
          element={
            <PrivateRoute>
              <BuscarEventoScreen />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<LoginScreen />} />
      </Routes>
      <Loader />
    </div>
  )
}

export default App
