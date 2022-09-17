import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './routes/Home'
import About from './routes/About'
import Services from './routes/Services'
import Contact from './routes/Contact'
import reportWebVitals from './reportWebVitals'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App /> }>
          <Route path="" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)

reportWebVitals();
