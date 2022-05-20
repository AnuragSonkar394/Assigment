import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
       <BrowserRouter>
      <Routes>
  <Route exact path="/" element={<App />}/>
  <Route exact path="Home" element={<Home />}/>
    
 


      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);
