import React from 'react';
import useData from '../../Hooks/useData';
const articles = [
  {
    name: "✍️ Article",
    img: "https://i.ibb.co/kB6LBpw/Article.png",
    mainTitle: "What if famous brands had regular fonts? Meet RegulaBrands!",
    subTitle: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
    userImg: "https://i.ibb.co/WFybMpv/Article-User.png",
    user: "Sarthak Kamra",
    views: "1.4k views"
  }
]
const Article = () => {
  return (
    <div className="container">
      <div className="col">
        {
          articles.map(article =>
            <div className="card mb-3" key={article.id}>
              <img className="card-img-top img-fluid" src={article.img} alt="" />
              <div className="card-body">
                <h5 className="card-title-name">{article.name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <h1 className="main-title">{article.mainTitle}</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000000" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </div>
                <div className="d-flex">
                  <h5 className="post-date">
                    {article.date}
                  </h5>
                  <h5 className="post-location">
                    {article.location1}
                  </h5>
                </div>
                <div className="d-flex">
                  <h5 className="post-company">
                    {article.company}
                  </h5>
                  <h5 className="post-location2">
                    {article.location2}
                  </h5>
                </div>
                <h6 className="card-sub-title">{article.subTitle}</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img src={article.userImg} alt="" />
                    <h5 className="userName">{article.user}</h5>
                  </div>
                  <div>
                    <div className="d-flex align-items-center">
                      <h6>
                        <span className="me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                          </svg>
                        </span>
                        {article.views}
                      </h6>
                      <h6 className="svg-gap">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                        </svg>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>

    </div>
  );
};

export default Article;