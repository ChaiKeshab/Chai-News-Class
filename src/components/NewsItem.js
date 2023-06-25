import React, { Component } from 'react'
import './NewsItem.css'

export default class NewsItem extends Component {

    render() {
        let { title, link, image, description, postDate } = this.props
        return (
            <article className='article-newsItem'>
                <div className='c-one'>
                    <div className='c-two'>
                        <a className='link-cta' href={link} target='_blank' rel='noreferrer'>
                            <div className='c-three'>
                                <img className='thumbnail' src={image} alt='getBetterInternet' />
                                <h1>{title}</h1>
                                <p className='para'>{description}</p>
                            </div>
                        </a>
                    </div>
                </div>
                <p className='postDate'>{postDate}</p>
            </article >
        )
    }
}
