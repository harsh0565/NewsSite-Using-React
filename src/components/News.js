import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
    // -----------------------------------------------------------------------------
  const updateNews = async() => {
    const Url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=9`;
    setLoading(true);
    let data = await fetch(Url);
    let parsedata = await data.json();
    console.log(parsedata);
    setArticles(parsedata.articles);
    setTotalResults(parsedata.totalResults);
    setLoading(false);
  };


  useEffect(() => {
    updateNews();
  })

  const fetchMoreData = async () => {
    setPage(page + 1);
    const Url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=9`;
    let data = await fetch(Url);
    let parsedata = await data.json();
    console.log(parsedata);
    setArticles(articles.concat(parsedata.articles));
    setTotalResults(parsedata.totalResults);
  };

  return (
    <>
      <div className="container align-items-center d-inline-block">
        <h2 className="text-capitalize text-center text-decoration-underline strong  card-header heading">
          HS News top headlines
        </h2>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
          scrollableTarget="scrollableDiv"
        >
          {loading && <Spinner />}
          <div className="row">
            {articles.map((element) => {
              return (
                <div
                  className="col-md-3 m-5 justify-content-center"
                  key={element.url}
                >
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    publishedAt={element.publishedAt.slice(0, 10)}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
     
    </>
  );
};

export default News;
