import React from "react";


const LineIndicator = ({title, title2, width, value, color}) => {

  return (
    <div>
      <div className="d-flex flex-row">
        <p className="mr-1">{title}</p>
        <p className="text-grey">| {title2}</p>
      </div>
      <div className="jr-line-indi-info">
        <div className={`jr-line-indi bg-${color}`} style={{
          width: Number.parseInt(width) * 3
        }}/>
        <span className="jr-line-indi-count ml-2">{value}</span>
      </div>
    </div>
  );
};

export default LineIndicator;
