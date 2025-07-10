import articles from "../../../public/articles.json";
import { useState } from "react";
import "./article.scss";
export default function Articles() {
  const [expanded, setExpanded] = useState({});

  // const toggleShowMore = (id) => {
  //   setExpanded((prevState) => ({
  //     ...prevState,
  //     [id]: !prevState[id],
  //   }));
  // };

  return (
    <section className="container">
      <div className="article-wrapper">
        <div className="article-item">
          <div className="article-item-img">
            <img src="/images/Фото152.jpg" alt="" />
          </div>

          <div className="article-item-text">
            <h3 className="article-item-text-title">
              Помилки в реабілітації МТД
            </h3>
            <button className="btn-main">
              <a href="#">читати</a>
            </button>
          </div>
        </div>
        <div className="article-item">
          <div className="article-item-img">
            <img src="/images/Фото152.jpg" alt="" />
          </div>
          <div className="article-item-text">
            <h3 className="article-item-text-title">
              Чи можу я робити цю вправу?{" "}
            </h3>
            <button className="btn-main">
              <a href="#">читати</a>
            </button>
          </div>
        </div>
        <div className="article-item">
          <div className="article-item-img">
            <img src="/images/Фото152.jpg" alt="" />
          </div>
          <div className="article-item-text">
            <h3 className="article-item-text-title">
              Післяпологове відновлення
            </h3>
            <button className="btn-main">
              <a href="#">читати</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
