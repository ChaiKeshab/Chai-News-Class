import React, { Component } from 'react'
import NewsItem from './NewsItem'
import zoro from '../Images/zoro.png'
import exdata from './example.json'
import './News.css'
import axios from 'axios'
import Loading from './Loading'
import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps = {
        //default value
    }

    static propTypes = {
        //typeOf parsed data
    }
    constructor() {
        super()
        this.state = {
            articles: [],
            isLoading: false,
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
            url: 'https://api.newscatcherapi.com/v2/search',    // latest_headlines
            params: { q: 'anime', lang: 'en', sort_by: 'relevancy', page: '1', size: '100' }, //for nav q: "cat" "anime"
            //countries, topic: 'sport', tech, entertainment, beauty, travel, music, gaming, science, food, business, politics, finance, all, 
            headers: {

                // 'x-api-key': 'your-api',
            },
        };

        try {
            this.setState({isLoading: true})
            const response = await axios.request(options);
            this.setState({isLoading: false})
            this.setState({ articles: response.data.articles });
        } catch (error) {
            this.setState({isLoading: false})
            this.setState({ articles: exdata.articles });
            console.error('error');
        }
    }


    render() {
        const { articles } = this.state;
        return (
            <div className="main">
                {this.state.isLoading && < Loading/>}
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
                    ) : (<chai></chai>)}
                </div>
            </div>
        );
    }
}
