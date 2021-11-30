import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import logo from './assets/logo.png'
import { backgroundGrey } from './color'
import { Dashboard } from './Dashboard'

ReactDOM.render(
  <React.StrictMode>
    <div
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
          height: '10vmin',
          pointerEvents: 'none',
          marginTop: '2vmin',
        }}
        alt='logo'
      />
      <Dashboard />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
)
