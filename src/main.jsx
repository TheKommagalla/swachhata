import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* Add Leaflet's CSS */

import 'leaflet/dist/leaflet.css';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
// import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
