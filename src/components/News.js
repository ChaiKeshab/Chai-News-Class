import React, { Component } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem'
import zoro from '../Images/zoro.png'
// import exdata from './example2.json'
import './News.css'
import axios from 'axios'
import Loading from './Loading'
import ScrollUp from './ScrollUp';
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
            articlesTotal: [],
            isLoading: false,
            message: '',
            count: 20,
            articles: [],
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

        const format = {
            method: 'GET',
            url: apiUrl,
            params: params,
            headers: {
                // 'x-api-key': 'your News catcher api',
            },
        };

        try {
            if (this.state.isLoading) {
                return;
            }
            this.setState({ isLoading: true });
            const response = await axios.request(format);
            this.setState({
                isLoading: false,
                articlesTotal: response.data.articles,
                articles: this.state.articlesTotal.slice(0, 20),
            });
            this.scrollToTop()

        } catch (error) {
            this.setState({ isLoading: false });
            // this.setState({
            //     articlesTotal: exdata.articles,
            //     articles: this.state.articlesTotal.slice(0, 20),
            // });
            // this.scrollToTop()
            console.error('error');
        }
    }

    formattedDate = (dateString) => {
        const currentDate = new Date();
        const inputDate = new Date(dateString);
        const timeDiff = currentDate.getTime() - inputDate.getTime();
        const secondsDiff = Math.floor(timeDiff / 1000);

        if (secondsDiff < 60) {
            return 'Just now';
        } else if (secondsDiff < 3600) {
            const minutesDiff = Math.floor(secondsDiff / 60);
            return `${minutesDiff} minute${minutesDiff === 1 ? '' : 's'} ago`;
        } else if (secondsDiff < 86400) {
            const hoursDiff = Math.floor(secondsDiff / 3600);
            return `${hoursDiff} hour${hoursDiff === 1 ? '' : 's'} ago`;
        } else {
            const daysDiff = Math.floor(secondsDiff / 86400);
            return `${daysDiff} day${daysDiff === 1 ? '' : 's'} ago`;
        }
    }

    fetchMoreData = () => {
        const { articles, articlesTotal, count } = this.state;

        if (!articlesTotal) {
            this.setState({ message: 'NOT FOUND' })
            return;
        }

        this.setState({
            count: count + 20,
            articles: articles.concat(articlesTotal.slice(count, count + 20)),
        });
    };

    scrollToTop = () => {
        window.scrollTo({
            top: 10,
            left: 0,
            behavior: 'smooth',
        });
    }

    render() {
        const { articles, message } = this.state;

        const currentDate = new Date();
        const format = { weekday: 'long', month: 'long', day: 'numeric' };
        const formatDate = currentDate.toLocaleDateString('en-US', format);

        return (
            <div className="main">
                {/* {this.state.isLoading && < Loading />} */}

                <div className="top-text">
                    <h2>{this.props.topText}</h2>
                    <p>{formatDate}</p>
                </div>

                <div className="wrap">
                    <InfiniteScroll
                        className='infiniteScroll'
                        dataLength={articles.length}
                        next={this.fetchMoreData}
                        hasMore={articles.length !== 100}
                        loader={!message ? <Loading /> : <div className='not-found'>{message}</div>}
                    >

                        {articles.length > 0 ? (
                            articles.map((element, index) => (
                                <div className="container-news" key={`${element._id}${index}`}>
                                    <NewsItem
                                        title={element.title}
                                        link={element.link}
                                        media={element.media ? element.media : zoro}
                                        // postDate={element.published_date}  
                                        postDate={this.formattedDate(element.published_date)}
                                        rights={element.rights}
                                        summary={`${!element.summary ? '' : element.summary.slice(0, 169)}...`}
                                    />
                                </div>
                            ))
                        ) : <div className='no-item'></div>}
                    </InfiniteScroll>
                </div>
                <ScrollUp scrollToTop={this.scrollToTop} />
            </div>
        );
    }
}
