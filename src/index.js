import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <Routes>
      <Route path='/' element={<App/>}  />
      <Route path='/contact' element={<Contact/>}  />
      <Route path='/about' element={<About/>}  />
    </Routes>
  </Router>

  

);

