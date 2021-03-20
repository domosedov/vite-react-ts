import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import 'focus-visible'
import './tailwind.css'
import { App } from './components/app'
import { AppProvider } from './components/app-provider'

ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
  document.getElementById('root'),
)
