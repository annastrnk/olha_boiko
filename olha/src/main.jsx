import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./style/index.scss"
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode> 
  </BrowserRouter>
)
