import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//rcc
import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar title='CHAI ' spanTitle='News' />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/' element={<News />} />
          {/* <Route path='/Inputs' element={<Inputs Username="Your mama's name" />} />
          <Route path='/About' element={<About />} />
          <Route path='/Projects' element={<Projects />} /> */}
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    )
  }
}
