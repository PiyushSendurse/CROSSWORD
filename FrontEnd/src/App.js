import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='home' element={<About/>}/>
            <Route path='about' element={<Home/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<SignUp/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
