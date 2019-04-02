import React from 'react';


const  TradeHistoryItem = ({data}) => {
  const {id, price, amount, status, time} = data;
  const statusStyle = status > 0 ? "text-green" : "text-red";
  return (
    <tr
      tabIndex={-1}
      key={id}
    >
      <td>
        <div className="user-profile py-2 d-flex flex-row align-items-center">
          <div className="user-detail">
            <h5 className={`user-name ${statusStyle}`}>{price} </h5>
          </div>
        </div>
      </td>
      <td  style={{verticalAlign:'middle'}}>
        <h5 className="mb-0">{amount}</h5>
      </td>
      <td className="text-right" style={{verticalAlign:'middle'}}>
        <div className="text-light-grey jr-fs-sm text-capitalize">{time}</div>
      </td>
    </tr>

  );
};

export default TradeHistoryItem;
