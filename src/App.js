import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom"
import AddUser from './components/AddUser'
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import Userdetail from './components/Userdetail';
function App() {

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/add' element={<AddUser />} exact />
          <Route path='/users' element={<Users />} exact />
          <Route path='/about' element={<About />} exact />
          <Route path='/users/:id' element={<Userdetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
