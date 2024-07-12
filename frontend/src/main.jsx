import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index.js';
import { SocketContextProvider } from './store/SocketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <SocketContextProvider> */}
          <App />
        {/* </SocketContextProvider> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
