import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route}  from "react-router-dom";
import Home from './component/Home';
import Math from './component/Math';
import French from './component/French';
import Science from './component/Science';
import Agriculture from './component/Agriculture';


function App(){
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/maths' element={<Math/>}/>
      <Route path='/french' element={<French/>}/>
      <Route path='/science' element ={<Science/>}/>
      <Route path='/agriculture' element ={<Agriculture/>}/>
    </Routes>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter><App /></BrowserRouter> 
  </React.StrictMode>
);
