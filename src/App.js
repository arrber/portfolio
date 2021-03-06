import React, { Component } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css';

//Components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home/Home';
import Templates from './pages/Templates/Templates';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container-fluid">
        <Navbar/>
        <Routes>
          <Route path="/templates" exact element={<Templates/>} />
          <Route path="/" exact element={<Home/>} />
        </Routes>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;