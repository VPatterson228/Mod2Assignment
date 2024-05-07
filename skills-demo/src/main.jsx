import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Institution from './Institution.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Institution
        name="Virgina Commonwealth University"
        dates=" Aug 2006 - May 2010"
        details="Graduated with BS in Psychology" />

      <Institution
        name="Olympic College"
        dates=" Jan 2024 - current"
        details=" AAST IT: Software Development" />
    </div>
    <Institution />
  </React.StrictMode>,
)
