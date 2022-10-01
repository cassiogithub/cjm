import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {
  UserGlobalProvider,
  ToastContextProvider,
  LoaderProvider,
} from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserGlobalProvider>
    <ToastContextProvider>
      <LoaderProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LoaderProvider>
    </ToastContextProvider>
  </UserGlobalProvider>
)
