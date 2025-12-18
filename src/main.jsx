import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./styles/variables.css";
import "./styles/normalize.css";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/Navbar.css";
import "./styles/Hero.css";
import "./styles/Services.css";
import "./styles/ContactForm.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
