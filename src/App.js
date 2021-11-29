import React from 'react'
import logo from './logo.svg'
import { backgroundGrey } from './color'
import './index.css'

function App () {
  return (
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
  )
}

export default App
