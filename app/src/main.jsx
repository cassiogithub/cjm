import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContextProvider } from './context/toast/toast.context'
import { UserGlobalProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserGlobalProvider>
    <ToastContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToastContextProvider>
  </UserGlobalProvider>
)
