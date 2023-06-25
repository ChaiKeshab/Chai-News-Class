import React, { Component } from 'react'
import './NewsItem.css'

export default class NewsItem extends Component {

    render() {
        let { title, link, image, date, description, author } = this.props
        return (
            <article className='article-newsItem'>
                <div className='c-one'>
                    <div className='c-two'>
                        <a className='link-cta' href={link} target='_blank' rel='noreferrer'>
                            <div className='c-three'>
                                {title}
                                <img className='thumbnail' src={image} alt='getBetterInternet' />
                            </div>
                        </a>
                    </div>
                </div>
            </article >
        )
    }
}
