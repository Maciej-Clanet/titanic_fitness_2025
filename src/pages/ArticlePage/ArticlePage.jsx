import "./ArticlePage.css";
import { useParams } from "react-router";


export default function ArticlePage(){
    const {slug} = useParams();
 
    return(
        <div className="article-content">
            this is an {slug} article
        </div>
    )
}