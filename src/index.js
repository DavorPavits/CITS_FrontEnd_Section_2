import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Routing from './Routing';
import {BrowserRouter,Route, Routes} from "react-router"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Routing />}/>
      <Route path='about' element={<p>By me</p>}/>
     </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

