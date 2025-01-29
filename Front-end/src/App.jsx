import React from 'react';
import {BrowserRouter , Routes , Route  } from 'react-router-dom';
import { CreateProduct, LoginPage } from './routes/Routes';
import { SignupPage } from './routes/Routes';
import { HomePage } from './routes/Routes';
import  "./App.css"

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage/>} />
    <Route path = "/create-Product" element = {<CreateProduct/>} /> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;