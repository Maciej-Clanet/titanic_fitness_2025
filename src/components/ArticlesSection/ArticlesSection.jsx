import "./ArticlesSection.css";

function ArticleThumbnail({title, desc, link}){

    return(
        <div className="article-thumb">
            more stuff
        </div>
    )
}
export default function ArticlesSection(){
    // extra challenge
    // create a list of articles
    // use a map to make the components 
    // in the grid based on the list
    return(
        <div className="articles-section">
            stuff
            <ArticleThumbnail 
                title="test" 
                desc="test desc"
                link="/"
                />
        </div>
    )
}