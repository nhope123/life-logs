import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import './scss/index.scss'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import {ModalProvider} from 'styled-react-modal'

/** Background element for the modal */
const ModalBackground = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  opacity: 1.0;
  background-color: #2196f3;
`
ReactDOM.render(
  <React.StrictMode>
    <ModalProvider backgroundComponent={ModalBackground} >
      <App />
    </ModalProvider >
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
