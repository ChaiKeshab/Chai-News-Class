import './App.css';
import Navbar from './components/Navbar';
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
          <Route exact path='/' element={<News getNews="latest_headlines" topic={null} lang="en" key="/ " />} />
          <Route exact path='/chai' element={<News getNews="search" qSearch="tea OR coffee" topic={null} key="tea" />} />
          <Route exact path='/anime' element={<News getNews="search" qSearch="anime" topic={null} key="anime" />} />
          <Route exact path='/business' element={<News getNews="latest_headlines" topic="business" key="business" />} />
          <Route exact path='/technology' element={<News getNews="latest_headlines" topic="tech" key="tech" />} />
          <Route exact path='/entertainment' element={<News getNews="latest_headlines" topic="entertainment" key="entertainment" />} />
          <Route exact path='/sport' element={<News getNews="latest_headlines" topic="sport" key="sport" />} />
          <Route exact path='/gaming' element={<News getNews="latest_headlines" topic="gaming" key="gaming" />} />
          <Route exact path='/music' element={<News getNews="latest_headlines" topic="music" key="music" />} />
          <Route exact path='/beauty' element={<News getNews="latest_headlines" topic="beauty" key="beauty" />} />
          <Route exact path='/science' element={<News getNews="latest_headlines" topic="science" key="science" />} />
          <Route exact path='/food' element={<News getNews="latest_headlines" topic="food" key="food" />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    )
  }
}
//newsdata.io