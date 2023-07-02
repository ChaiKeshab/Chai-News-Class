import React, { Component } from 'react'
import './NewsItem.css'
import zoro from '../Images/zoro.png'

export default class NewsItem extends Component {

    render() {
        let { title, link, media, summary, postDate, rights } = this.props
        return (
            <article className='article-newsItem'>
                <div className='c-one'>
                    <div className='c-two'>
                        <a className='link-cta' href={link} target='_blank' rel='noreferrer'>
                            <div className='c-three'>
                                <img className='thumbnail' src={media} onError={(e) => e.target.src = zoro} alt="Couldn't load" />
                                <h1>{title}</h1>
                                <p className='para'>{summary}</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='source-info'>
                    <p className='postDate'>{postDate}</p>
                    <a className='rights' href={rights}>{rights}</a>
                </div>
            </article >
        )
    }
}
