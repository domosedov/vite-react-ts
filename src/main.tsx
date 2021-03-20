import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import 'focus-visible'
import './tailwind.css'
import { App } from './components/app'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
