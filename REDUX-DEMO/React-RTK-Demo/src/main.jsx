import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './components/store.jsx';
import formStore from './FormComponents/FormStore';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={formStore}>
    <App />
    </Provider>
  </React.StrictMode>,
)
