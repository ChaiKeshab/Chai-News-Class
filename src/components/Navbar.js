// import React, { useEffect, useState } from 'react';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import menu from '../Images/menu.svg';
import exit from '../Images/exit.svg';
import moon from '../Images/moon.svg';
import sun from '../Images/sun.svg';
import ellipsis from '../Images/ellipsis.svg';
import './Navbar.css'
// impt

// rcc (react-class-component)
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      mode: true,
      theme: 'darkMode',
      blur: '',
      hamBar: false,
    };
  }

  componentDidMount() {
    this.updateBodyClass();
  }

  componentDidUpdate() {
    this.updateBodyClass();
  }

  updateBodyClass = () => {
    const { theme,  } = this.state;
    // document.body.classList.toggle('blur', !!blur);
    document.body.classList.toggle('darkMode', theme === 'darkMode');
    document.body.classList.toggle('lightMode', theme === 'lightMode');
  }

  toggleMode = () => {
    if (this.state.theme === 'darkMode') {
      this.setState({ theme: 'lightMode', mode: false });
    } else if (this.state.theme === 'lightMode') {
      this.setState({ theme: 'darkMode', mode: true });
    }
  }

  toggleHambar = () => {
    if (window.matchMedia('(max-width: 1260px)').matches) {
      if (this.state.hamBar === false) {
        this.setState({ hamBar: true });
      } else if (this.state.hamBar === true) {
        this.setState({ hamBar: false });
      }
    }
  }
  
  closeMenu = () => {
    this.setState({ hamBar: false });
  }


  render() {
    let { hamBar, mode } = this.state
    return (
      <div className="navbar">
        <div className="container-navbar">
          <div className="logo-container">
            <Link to="/" className="logo">{this.props.title}<span>{this.props.spanTitle}</span></Link>
          </div>
          <img id="mobile-cta" className={`mobile-menu ${hamBar ? 'hide' : 'show'}`} src={menu} alt="Open Navigation" onClick={() => this.toggleHambar()} />

          <nav>
            <img id="mobile-exit" className={`mobile-menu-exit ${hamBar ? 'show' : 'hide'}`} src={exit} alt="Close Navigation" onClick={() => this.toggleHambar()} />

            <div className={`nav-div ${hamBar ? 'show' : 'hide'}`}>

              <ul className={`nav-one`}>
                <li><Link to="/" onClick={() => this.closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Home</Link></li>
                <li><Link to="/chai" onClick={() => this.closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Chai</Link></li>
                <li><Link to="/anime" onClick={() => this.closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Anime</Link></li>
              </ul>

              <div className='line-break'>
                <div></div>
              </div>

              <ul className={`nav-two`}>
                <li><Link to="/business" onClick={() => this.closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Business</Link></li>
                <li><Link to="/technology" onClick={() => this.closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Technology</Link></li>
                <li><Link to="/entertainment" onClick={() => this.closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Entertainment</Link></li>
              </ul>

              <ul className={`nav-three`}>
                <li><Link to="/sport " onClick={() => this.closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Sport </Link></li>
                <li><Link to="/gaming" onClick={() => this.closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Gaming</Link></li>
                <li><Link to="/music" onClick={() => this.closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Music</Link></li>
              </ul>

              <ul className={`nav-four`}>
                <li><Link to="/beauty" onClick={() => this.closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Beauty</Link></li>
                <li><Link to="/science" onClick={() => this.closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Science</Link></li>
                <li><Link to="/food" onClick={() => this.closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Food</Link></li>
              </ul>
            </div>

            <div className='ellipsis-container'>
              <img className={`ellipsis ${hamBar ? 'hide' : 'show'}`} src={ellipsis} alt="Open Navigation" onClick={() => this.toggleHambar()} />
            </div>

            <div className='sun-moon'>
              <img className={`sun ${mode ? 'show' : 'hide'}`} onClick={() => this.toggleMode()} src={sun} alt="Dark Mode" />
              <img className={`moon ${mode ? 'hide' : 'show'}`} onClick={() => this.toggleMode()} src={moon} alt="Light Mode" />
            </div>
          </nav>
        </div>
      </div>
    )
  }
}



// export default function Navbar(this.props) {
//   //------------------------------------darkMode------------------------------------
//   const [mode, setMode] = useState('false')
//   const [theme, setTheme] = useState('darkMode')
//   const [blur, setBlur] = useState('')

//   function toggleMode() {
//     if (theme === 'darkMode') {
//       setTheme('lightMode')
//       setMode(false)

//     }
//     if (theme === 'lightMode') {
//       setTheme('darkMode')
//       setMode(true)
//     }
//   }

  // useEffect(() => {
  //   document.body.classList.toggle('blur', !!blur);
  //   document.body.classList.toggle('darkMode', theme === 'darkMode');
  //   document.body.classList.toggle('lightMode', theme === 'lightMode');
  // }, [theme, blur]);

//   //------------------------------------menuToggle------------------------------------
//   const [hamBar, setHamBar] = useState(false)
//   function toggleHambar() {

//     if (window.matchMedia('(max-width: 767px)').matches) {
//       if (blur === '') {
//         setHamBar(true)
//         setBlur('blur')
//       }

//       if (blur === 'blur') {
//         setHamBar(false)
//         setBlur('')
//       }
//     }
//   }

//   return (
//     <div>Navbar</div>
//   )
// }
