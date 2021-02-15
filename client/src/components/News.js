import React, { useState, useEffect } from "react";
import bg3 from '../images/bg4.jpg';
import Typical from 'react-typical';
import './News.css';
import { Center } from "devextreme-react/map";

const News = () => {

    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState("react");
    const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=react')
    const [loading, setLoading] = useState(false);
    const fetchNews = () => {
        setLoading(true)
        fetch(url)
            .then(result => result.json())
            //.then(data => console.log(data))
            .then(data => (setNews(data.hits), setLoading(false)))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchNews();
    }, [url]);

    const handleChange = e => {
        setSearchQuery(e.target.value)

    };

    const handleSubmit = e => {
        e.preventDefault();
        setUrl(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`);
    };
    const showLoading = () => (loading ? <h2 className="news-loading">Loading ... </h2> : "");
    const searchForm = () => (
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchQuery} onChange={handleChange} className="news-input" />

        </form>
    );
    const showNews = news.map((n) => {
        return (
            <div>
                <div style={{ textAlign: 'left' }} >
                    <div className="news-box">
                        <a style={{ color: 'white' }} href={n.url}>{n.title}</a>
                    </div>
                </div>

            </div>
        )
    })

    return (
        <div className="news" >
            <div className="bg-news">
                    <div className="container" >
                        <div className="row text-center">
                            <div class="col-xs-4 col-sm-2 col-md-2 col-lg-2 boxstyle-about">
                                <h1 style={{ textAlign: 'left' }}>News </h1>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="text-center search-padding">
                <br />
                <br />
                <h1 className="search-display search-find-fonts" >Find any  &nbsp;</h1>
                <Typical className="search-text search-find-fonts"
                    steps={['News!!', 5000, ' Updates!!', 5000]}
                    loop={Infinity}
                    wrapper="p"
                />
            </div>
            <div className="text-center " style={{ paddingBottom: '40px' }}>

                {searchForm()}
            </div>
            <div className="text-center black1 black-news">
                <div className="container " >
                    {showLoading()}
                    {showNews}
                </div>
            </div>
           



        </div>
    )

}

export default News;