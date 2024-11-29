<<<<<<< Updated upstream
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
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./App2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
>>>>>>> Stashed changes
