import "./ArticlesSection.css";
import { Link } from "react-router";
import { useState } from "react";
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
    const url = "http://127.0.0.1:8001/public/articles";

    function loadThumbnails(){
        axios.get(url)
        .then((res) => {
            // this is the code that runs when we get a good responser
            alert(JSON.stringify(res))
        })
        .catch((err) => {
            // this is the code that runs when something goes wrong
            alert(err)
        })
    }
    loadThumbnails();

    return (
        <div className="articles-section">
            <h2>Gym is just the tip of the iceberg</h2>
            <div className="line" />
            <h3>Hit the books</h3>

            <div className="thumb-centerer">
                <div className="article-thumbnails">
                    <ArticleThumbnail
                        title="test"
                        desc="test desc test desctest desc test desc test desc test desc test desc"
                        link="/"
                    />
                    <ArticleThumbnail title="test" desc="test desc" link="/" />
                    <ArticleThumbnail title="test" desc="test desc" link="/" />
                    <ArticleThumbnail title="test" desc="test desc" link="/" />
                    <ArticleThumbnail title="test" desc="test desc" link="/" />
                    <ArticleThumbnail title="test" desc="test desc" link="/" />
                </div>
            </div>
        </div>
    );
}
