import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import logo from './assets/logo.svg'
import { backgroundGrey } from './color'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <header
        style={{
          backgroundColor: backgroundGrey,
          display: 'flex',
          height: '100vh',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={logo}
          style={{
            height: '40vmin',
            pointerEvents: 'none',
            animation: 'App-logo-spin infinite 20s linear',
          }}
          alt='logo'
        />
      </header>
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals(console.log)
