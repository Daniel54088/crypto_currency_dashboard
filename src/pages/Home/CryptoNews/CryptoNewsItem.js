import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string
};
const defaultProps = {
  title: "Default CryptoNews Title",
  subTitle: "Default CryptoNews subTitle",
  desc: "BTC, Crypto, Trading, Tips, Cryptocurrency",
  image: require("../../../assets/news1.jpg")
};

function CryptoNewsItem(props) {
  const { title, subTitle, desc, image } = props;

  return (
    <div className="jr-news-item">
      <div className="jr-news-thumb">
        <img className="rounded-xl" src={image} alt="..." />
      </div>
      <div className="jr-news-content">
        <h4 className="mt-0">{title}</h4>
        <p>{subTitle}</p>
        <div className="jr-news-tags-row">
          <div className="jr-news-tags-left">
            <p className="text-grey text-truncate">
              <i
                className={`zmdi zmdi-label-alt jr-fs-lg mr-2 d-inline-block align-middle`}
              />
              {desc}
            </p>
          </div>
          <div className="jr-news-tags-right">
            <p className="text-primary ml-auto pointer text-truncate">
              Read Full Story 
              <i
                className={`zmdi zmdi-long-arrow-right jr-fs-xxl ml-2 d-inline-block align-middle`}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoNewsItem;

CryptoNewsItem.propTypes = propTypes;
CryptoNewsItem.defaultProps = defaultProps;
