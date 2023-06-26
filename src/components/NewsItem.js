import React, { Component } from 'react'
import './NewsItem.css'

export default class NewsItem extends Component {

    render() {
        let { title, link, media, summary, postDate } = this.props
        return (
            <article className='article-newsItem'>
                <div className='c-one'>
                    <div className='c-two'>
                        <a className='link-cta' href={link} target='_blank' rel='noreferrer'>
                            <div className='c-three'>
                                <img className='thumbnail' src={media} alt='getBetterInternet' />
                                <h1>{title}</h1>
                                <p className='para'>{summary}</p>
                            </div>
                        </a>
                    </div>
                </div>
                <p className='postDate'>{postDate}</p>
            </article >
        )
    }
}
