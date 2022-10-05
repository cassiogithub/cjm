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
import { ConviteScreen } from './ui/screens/convite/convite.screen'

function App() {
  return (
    <div className="App overflow-hidden">
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/cadastro" element={<CadastroScreen />} />
        <Route path="/convite/:hashEvento" element={<ConviteScreen />} />
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
