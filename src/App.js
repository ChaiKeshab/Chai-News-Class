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
          <Route exact path='/' element={<News getNews="latest_headlines" topic={null} lang="en" key="/ " topText="Latest Headlines"  />} />
          <Route exact path='/chai' element={<News getNews="search" qSearch="tea OR coffee" topic={null} key="tea" topText="Tea/Coffee"  />} />
          <Route exact path='/anime' element={<News getNews="search" qSearch="anime" topic={null} key="anime" topText="Anime"  />} />
          <Route exact path='/business' element={<News getNews="latest_headlines" topic="business" key="business" topText="Business"  />} />
          <Route exact path='/technology' element={<News getNews="latest_headlines" topic="tech" key="tech" topText="Technology"  />} />
          <Route exact path='/entertainment' element={<News getNews="latest_headlines" topic="entertainment" key="entertainment" topText="Entertainment"  />} />
          <Route exact path='/sport' element={<News getNews="latest_headlines" topic="sport" key="sport" topText="Sport"  />} />
          <Route exact path='/gaming' element={<News getNews="latest_headlines" topic="gaming" key="gaming" topText="Gaming"  />} />
          <Route exact path='/music' element={<News getNews="latest_headlines" topic="music" key="music" topText="Music"  />} />
          <Route exact path='/beauty' element={<News getNews="latest_headlines" topic="beauty" key="beauty" topText="Beauty"  />} />
          <Route exact path='/science' element={<News getNews="latest_headlines" topic="science" key="science" topText="Science"  />} />
          <Route exact path='/food' element={<News getNews="latest_headlines" topic="food" key="food" topText="Food"  />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    )
  }
}
//newsdata.io