import React from 'react';
import  TradeHistoryItem from './TradeHistoryItem';


const TradeHistory = ({data}) => {

  return (

    <div className="table-responsive-material markt-table">
      <table className="table default-table table-sm full-table remove-table-border table-hover mb-0">
        <tbody>
        {data.map(data => {
          return (
            <TradeHistoryItem key={data.id} data={data}/>
          );
        })}
        </tbody>
      </table>
    </div>

  );
}


export default TradeHistory;