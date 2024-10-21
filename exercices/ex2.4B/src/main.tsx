import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './assets/components/APP/index.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
