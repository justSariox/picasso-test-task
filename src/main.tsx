import { StrictMode } from 'react'

import './shared/styles/index.scss'
import { createRoot } from 'react-dom/client'

import App from './app/app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
