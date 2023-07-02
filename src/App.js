import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
// import SearchBar from './components/SearchBar';

//rcc
export default class App extends Component {
  constructor() {
    super();
    this.linkRef = React.createRef();
    this.state = {
      userSearch: '',
      userSearchData: '',
    }
  }

  handleInputChange = (event) => {
    this.setState({ userSearch: event.target.value });
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.setState({ userSearchData: this.state.userSearch }, () => { // for avoiding double Enter
        this.linkRef.current.click();
      });
    }
  };

  render() {
    const { userSearch, userSearchData } = this.state
    // console.log(userSearchData)

    return (
      <BrowserRouter>
        <Navbar title='CHAI ' spanTitle='News' />

        <Routes>

          <Route exact path='/' element={<News getNews="latest_headlines" topic={null} lang="en" key="/ " topText="Latest Headlines" />} />
          <Route exact path='/chai' element={<News getNews="search" qSearch="tea OR coffee" topic={null} key="tea" topText="Tea/Coffee" />} />
          <Route exact path='/anime' element={<News getNews="search" qSearch="anime" topic={null} key="anime" topText="Anime" />} />
          <Route exact path='/business' element={<News getNews="latest_headlines" topic="business" key="business" topText="Business" />} />
          <Route exact path='/technology' element={<News getNews="latest_headlines" topic="tech" key="tech" topText="Technology" />} />
          <Route exact path='/entertainment' element={<News getNews="latest_headlines" topic="entertainment" key="entertainment" topText="Entertainment" />} />
          <Route exact path='/sport' element={<News getNews="latest_headlines" topic="sport" key="sport" topText="Sport" />} />
          <Route exact path='/gaming' element={<News getNews="latest_headlines" topic="gaming" key="gaming" topText="Gaming" />} />
          <Route exact path='/music' element={<News getNews="latest_headlines" topic="music" key="music" topText="Music" />} />
          <Route exact path='/beauty' element={<News getNews="latest_headlines" topic="beauty" key="beauty" topText="Beauty" />} />
          <Route exact path='/science' element={<News getNews="latest_headlines" topic="science" key="science" topText="Science" />} />
          <Route exact path='/food' element={<News getNews="latest_headlines" topic="food" key="food" topText="Food" />} />

          {userSearchData && (
            <Route exact path={`/${userSearchData}`} element={<News getNews="search" qSearch={`${userSearchData}`} topic={null} key={`${userSearchData}`} topText={`Results for: ${userSearchData}`} />} />
          )}
        </Routes>

        <div className='search-input'>
          <input type="text" value={userSearch} onChange={this.handleInputChange} onKeyDown={this.handleKeyPress} />
          <Link to={`/${userSearchData}`} ref={this.linkRef} className={``}>Search</Link>
          {/* How to pass props in reverse way 
              Error: in search mode, first result is shown but second result causes error
          */}
        </div>
      </BrowserRouter>
    )
  }
}