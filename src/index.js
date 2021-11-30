import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import logo from './assets/logo.png'
import { Chart } from './Chart/Chart'
import { backgroundGrey } from './color'
import reportWebVitals from './reportWebVitals'

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
      <div
        style={{
          display: 'flex',
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Chart layout={{ width: 800, height: 500 }} />
        <Chart layout={{ width: 800, height: 500 }} />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals(console.log)
