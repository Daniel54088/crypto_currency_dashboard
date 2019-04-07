import React from "react";

const TopNews = ({recentData}) => {
  
    const {image, title, description, date} = recentData;

    return (
  
      <li className="media media-list post-list">
        <div className="col-12" style={{paddingLeft:4}}>
            <div className="col-12 post-image" style={{paddingLeft:4}}>
              <img style={{maxWidth:700}} className="img-fluid rounded" src={image} alt="PostsPic"/>
            </div>
            <div className="col-12 media-body mt-4">
              <h1 className="mt-1 mb-1">{title}</h1>
              <p className="meta-date mb-1">{date}</p>
              <p className="text-muted">{description}</p>
            </div>
        </div>
      </li>
  
    );
  };

export default TopNews;
