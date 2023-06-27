import React, { Component } from 'react'
import NewsItem from './NewsItem'
import zoro from '../Images/zoro.png'
import exdata from './example2.json'
import './News.css'
import axios from 'axios'
import Loading from './Loading'
// import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps = {
        // getNews: 'search'
        getNews: 'latest_headlines',
        topic: "all",
        qSearch: "*",
        sort_by: "relevancy",
        lang: "en"
        //default value
    }

    // static propTypes = {
    //     //typeOf parsed data
    // }

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
        //countries, topic: 'sport', tech, entertainment, beauty, travel, music, gaming, science, food, business, politics, finance, all, 
        //for nav q: "cat" "anime"
        // latest_headlines, search
        const { getNews, qSearch, topic, relevancy, lang } = this.props;
        const apiUrl = `https://api.newscatcherapi.com/v2/${getNews}`;

        const params = {
            page_size: 100,
            page: '1'
        };

        if (getNews === 'search') {
            params.q = qSearch;
            params.sort_by = relevancy;
            params.topic = topic;
        }
        else if (getNews === 'latest_headlines') {
            params.lang = lang;
            params.topic = topic;
        }

        const options = {
            method: 'GET',
            url: apiUrl,
            params: params,
            headers: {

                // 'x-api-key': 'your-api',
            },
        };

        try {
            if (this.state.isLoading) {
                return;
            }
            this.setState({ isLoading: true });
            const response = await axios.request(options);
            this.setState({ isLoading: false, articles: response.data.articles });
            console.log(apiUrl)
        } catch (error) {
            this.setState({ isLoading: false });
            this.setState({ articles: exdata.articles });
            console.error('error');
        }
    }


    render() {
        const { articles } = this.state;
        return (
            <div className="main">
                {this.state.isLoading && < Loading />}
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
                    ) : (<div></div>)}
                </div>
            </div>
        );
    }
}
