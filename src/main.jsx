import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Cartprovider } from './stores/context/Cartcontext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <Cartprovider>
      <App />
    </Cartprovider>
  </StrictMode>,
  </BrowserRouter>
)
