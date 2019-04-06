import React from 'react';


class OrderItem extends React.Component {

  onOptionMenuSelect (event){
    this.setState({menuState: true, anchorEl: event.currentTarget});
  };
  handleRequestClose ()  {
    this.setState({menuState: false});
  };

  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      menuState: false,
    }
  }

  render() {
    const {anchorEl, menuState} = this.state;
    const data = this.props.data;
    const statusStyle = data.status.includes("Completed") ? "text-white bg-success" : data.status.includes("On Hold") ? "bg-amber" : data.status.includes("Delayed") ? "text-white bg-danger" : "text-white bg-grey";

    return (
      <tr
        tabIndex={-1}
        key={data.id}
        style={{verticalAlign:'middle',lineHeight:5}}
      >
        <td>{data.currency}</td>
        <td style={{verticalAlign:'middle'}}>
          <div className="user-profile d-flex flex-row align-items-center">

            <div className="user-detail">
              <h5 className="user-name">{data.trade_type} </h5>
            </div>
          </div>
        </td>
        <td>{data.time}</td>
        <td>{data.price}</td>
        <td>{data.amount}</td>
        <td className="status-cell text-right">
          <div className={` badge text-uppercase ${statusStyle}`}>{data.status}</div>
        </td>

      </tr>

    );
  }
}

export default OrderItem;
