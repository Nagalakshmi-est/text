import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from "../src/components/ui/provider"
import './App.css'
import App from './App.jsx'

import HomePage from './assets/components/HomePage/HomePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>

  </StrictMode>
)
