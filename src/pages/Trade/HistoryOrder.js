import React, {Component} from 'react';
import OrderItem from './OrderItem';
import {TradeHistoryData} from './data';

class HistoryOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

  render() {
    const data = TradeHistoryData;
    return (
      <div className="table-responsive-material">
        <table className="default-table table-unbordered table table-sm table-hover">
          <thead className="th-border-b">
          <tr>
            <th>Currency</th>
            <th>Buy/Sell</th>
            <th>Order Time</th>
            <th>Price</th>
            <th>Amount</th>
            <th className="status-cell text-right">Status</th>
            <th/>
          </tr>
          </thead>
          <tbody>
          {data.map(data => {
            return (
              <OrderItem key={data.id} data={data}/>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HistoryOrder;