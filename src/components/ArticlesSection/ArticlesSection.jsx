import "./ArticlesSection.css";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

function ArticleThumbnail({ title, desc, link }) {
    return (
        <div className="article-thumb">
            <p className="thumb-title">{title}</p>
            <p className="thumb-desc">{desc}</p>
            <Link className="thumb-link" to={link}>
                Read More
            </Link>
        </div>
    );
}
export default function ArticlesSection() {

    const [articleData, setArticleData] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(); 

    const url = "http://127.0.0.1:8001/public/articles";

    function loadThumbnails(){
        axios.get(url)
        .then((res) => {
            setArticleData(res.data); 
            setLoading(false); 
        })
        .catch((err) => {
            setError(err?.response?.data?.detail || "Error occured") 
            setLoading(false) 
        })
    }
    
    useEffect(() => {
        loadThumbnails();
    }, [])

    let articles = null;
    if(loading){
        articles = <h1>Loading Articles...</h1>
    } else if(error){
        articles = <h1>There was an error: {error}</h1>
    }
    else{
        articles = articleData.map(thumb => {
            return <ArticleThumbnail 
                title={thumb.title} 
                desc={thumb.description} 
                link={thumb.link} />
        })
    }

    return (
        <div className="articles-section">
            <h2>Gym is just the tip of the iceberg</h2>
            <div className="line" />
            <h3>Hit the books</h3>

            <div className="thumb-centerer">
                <div className="article-thumbnails">
                    {articles}
                </div>
            </div>
        </div>
    );
}
