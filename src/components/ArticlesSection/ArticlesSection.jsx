import "./ArticlesSection.css";
import { Link } from "react-router";

function ArticleThumbnail({ title, desc, link }) {
  return (
    <div className="article-thumb">
      <p class="thumb-title">{title}</p>
      <p class="thumb-desc">{desc}</p>
      <Link className="thumb-link" to={link}>
        Read More
      </Link>
    </div>
  );
}
export default function ArticlesSection() {
  // extra challenge
  // create a list of articles
  // use a map to make the components
  // in the grid based on the list
  return (
    <div className="articles-section">
      <h2>Gym is just the tip of the iceberg</h2>
      <div className="line" />
      <h3>Hit the books</h3>

      <div class="thumb-centerer">
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
