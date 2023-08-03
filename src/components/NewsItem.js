import React from "react";

const NewsItem =(props)=>{

    let { title, description, imageUrl, newsUrl, publishedAt } = props;
    return (
      <>
        <div>
          <div
            className="card d-flex d-flex justify-content-around"
            style={{ height: "25rem" }}
          >
            <img
              src={imageUrl}
              className="card-img-top imageHeight"
              alt="Loading..."
            />
            {publishedAt}
            <div className="card-body card">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">
                
                {description}...
              </p>
              <a
                href={newsUrl}
                target="__blank"
                className="btn btn-primary btn-sm"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

export default NewsItem;
