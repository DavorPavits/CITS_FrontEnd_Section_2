import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Search2 from './Search2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search1 from './Search2';
import Search3 from './Search3';
import ResultDetailPerson from './ResultDetailPerson';
import ResultDetailTitle from './ResultDetailTitle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="1" element={<Search1 />} />
        <Route path="2" element={<Search2 />} />
        <Route path="3" element={<Search3 />} />

        <Route path="result/:name" element={<ResultDetailPerson />} />
        <Route path="resultTitle/:primaryTitle" element={<ResultDetailTitle />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
