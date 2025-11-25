import "./Article.css";
import { useParams } from "react-router";

export default function Article(){
    const {slug} = useParams("slug") //gets ":slug" from the url
    return(
        <div className="article-page">
            <h1>this is the {slug} article</h1>
        </div>
    )
}