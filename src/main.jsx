import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Routes from './hooks/Routes.jsx'
import { Toaster } from "react-hot-toast"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <Routes>
      <App />
    </Routes>
  </React.StrictMode>,
)
