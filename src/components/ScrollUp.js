import React, { Component } from 'react'
import scrollTop from '../Images/scrollToTop.svg'
import './ScrollUp.css'

export default class ScrollUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        //https://plainenglish.io/blog/hiding-dom-elements-in-react-based-on-scrolling-d9a9ef1f1f5
        const { isVisible } = this.state;
        let heightToHideFrom = 700;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
            isVisible &&      // to limit setting state only the first time
                this.setState({ isVisible: false });
        } else {
            this.setState({ isVisible: true });
        }
    };

    render() {
        const { isVisible } = this.state
        return (
            <div className={`top ${isVisible ? 'hide' : 'show'}`} onClick={this.props.scrollToTop}>
                <img src={scrollTop} className='to-top' alt='To Top' />

                {/* <div id="container">
                    <div id="height">
                        <div>height: {height} - {isVisible ? "show" : "hide"}</div>
                    </div>
                    {
                        isVisible
                        &&
                        <div id="hide">
                            Content hidden when scrolled beyond  200px
                        </div>
                    }
                </div> */}

            </div>
        )
    }
}
