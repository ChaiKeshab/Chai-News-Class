import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './News.css'

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "four-four-two",
                "name": "FourFourTwo"
            },
            "author": "Matthew Ketchell",
            "title": "What will Sandro Tonali's squad number be? The Newcastle United arrival could see Eddie Howe go into full 'Football Manager mode'",
            "description": "Sandro Tonali's squad number is up in the air – and the imminent arrival at Newcastle United could prompt a squad overhaul, of sorts",
            "url": "https://www.fourfourtwo.com/news/sandro-tonali-newcastle-united-arrival-could-see-eddie-howe-go-into-full-football-manager-mode",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/LUtmvkfKZRvQ3Fp4e5bdZm-1200-80.jpg",
            "publishedAt": "2023-06-23T13:47:59Z",
            "content": "With various sources in England and Italy now indicating that Sandro Tonali's Newcastle United medical is set for this weekend, all the i's could be dotted before he returns to action in the U21 Euro… [+2504 chars]"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "Lee Davey",
            "title": "Newcastle United Women make history by becoming first professional team in third tier...",
            "description": "Newcastle United Women will become the first full-time professional football club in FA Women’s National League history ahead of the 2023/24 season. The move comes one year on from the club becomin…",
            "url": "https://talksport.com/football/1476590/newcastle-united-women-history-professional-third-tier/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/06/4-celebrates-teammates-scoring-opening-827083254.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
            "publishedAt": "2023-06-23T11:42:23Z",
            "content": "Newcastle United Women will become the first full-time professional football club in FA Womens National League history ahead of the 2023/24 season.\r\nThe move comes one year on from the club becoming … [+2451 chars]"
        },
        {
            "source": {
                "id": "four-four-two",
                "name": "FourFourTwo"
            },
            "author": "Ryan Dabbs",
            "title": "Real Madrid agree incredible €250m transfer with PSG for Kylian Mbappe: report",
            "description": "Kylian Mbappe is finally set to play his club football at the Bernabeu, according to a French report",
            "url": "https://www.fourfourtwo.com/news/real-madrid-agree-incredible-euro250m-transfer-with-psg-for-kylian-mbappe-report",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/epkKvxXAVQR3SdQWN3Nmha-1200-80.jpg",
            "publishedAt": "2023-06-23T10:58:03Z",
            "content": "Real Madrid are finally set to land long-term target Kylian Mbappe this summer, after reportedly agreeing a €250m transfer fee with PSG for the French forward.\r\nLast week reports emerged suggesting M… [+2321 chars]"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "161385360554578",
            "title": "Arsenal confident of Rice deal, Tonali to complete Newcastle move, Maddison to Spurs",
            "description": "talkSPORT.com brings you all the latest football news, views and transfer gossip. Headlines: Arsenal still hopeful of Declan Rice deal despite Man City entering the raceArsenal agree £65m fee with …",
            "url": "https://talksport.com/football/1472049/football-news-live-transfers-arsenal-rice-tonali-newcastle/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/06/DF-TALKSPORT-BLOG-AM.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
            "publishedAt": "2023-06-23T07:12:48Z",
            "content": "Liverpool defender Andy Robertson has told talkSPORT Man City were a ‘class apart’ last season, but insists the Reds will come again this term as they look to compete for trophies again.\r\nIt was a to… [+1504 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
            "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
            "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
            "publishedAt": "2020-04-27T07:20:43Z",
            "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
        }
    ]

    constructor() {
        super()
        this.state = {
            articles: this.articles,
        }
    }

    render() {
        return (
            <div className='main'>
                {this.state.articles.map((element) => {
                    return <div className='container-news' key={element.url}>
                        <NewsItem title={element.title} link={element.url} image={element.urlToImage} />
                    </div>
                })}
            </div>
        )
    }
}