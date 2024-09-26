import articles from "../../../public/articles.json";
import { useState } from "react";
import './article.scss'
export default function Articles() {
  const [expanded, setExpanded] = useState({});

  const toggleShowMore = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className="article-wrapper">
      {articles.map((item) => (
        <div key={item.id} className="article-block">
          <img src="../../../public/images/Фото131_resized.jpg" alt="" />
          <div className="article-text">
            <p className="article-title">{item.title}</p>
            <p className="article-description">
              {expanded[item.id]
                ? item.description
                : `${item.description.substring(0, 115)}...`}
            </p>
            <button onClick={() => toggleShowMore(item.id)}>
              {expanded[item.id] ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
