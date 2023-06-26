import React, { Component } from 'react'
import NewsItem from './NewsItem'
import zoro from '../Images/zoro.png'
import './News.css'
import axios from 'axios'

export default class News extends Component {

    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
        }
    }

    // async componentDidMount() {
    //     let url = 'https://newsdata.io/api/1/news?apikey=pub_2515470b16cfdec621e376956c036e6a8dbc4&q=anime'
    //     let data = await fetch(url)
    //     let parsedData = await data.json()
    //     this.setState({ articles: parsedData.articles })
    // }
    async componentDidMount() {
        const options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/search',
            params: { q: 'anime', lang: 'en', sort_by: 'relevancy', page: '1' },
            headers: {
                'x-api-key': 'yuWR60YZ8635QACa1RABWHFIZ_Mr5YGkZXp22YXUrHE',
            },
        };

        try {
            const response = await axios.request(options);
            this.setState({ articles: response.data.articles });
        } catch (error) {
            console.error('error');
        }
    }


    render() {
        const { articles } = this.state;
        return (
            <div className="main">
                <div className="wrap">
                    {articles.length > 0 ? (
                        articles.map(element => (
                            <div className="container-news" key={element._id}>
                                <NewsItem
                                    title={element.title}
                                    link={element.link}
                                    media={element.media ? element.media : zoro}
                                    postDate={element.published_date}
                                    summary={`${!element.summary ? '' : element.summary.slice(0, 169)}...`}
                                    
                                />
                            </div>
                        ))
                    ) : (<div>No articles available.</div>)}
                </div>
            </div>
        );
    }
}
