import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//rcc
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar title='CHAI ' spanTitle='NEWS' />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/Inputs' element={<Inputs Username="Your mama's name" />} />
          <Route path='/About' element={<About />} />
          <Route path='/Projects' element={<Projects />} /> */}
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    )
  }
}
