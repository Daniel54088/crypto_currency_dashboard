import React from "react";
import Widget from "../Widget";
import {createSocket} from '../../../util/socketHelper'
import {SOCKET_URL} from '../../../config.js'

let returnObj = {}
class  ChartCard extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
          socketObj:{},
          percentStyle: 'up',
      }

    }

    componentDidMount(){    
      this.getSocketData(this.props.url);
    }

    getSocketData(nowURL){
      returnObj = createSocket(SOCKET_URL, nowURL );
      let changedCoinObj = {};
      returnObj.onmessage = function(event) {
        changedCoinObj = JSON.parse(event.data);
        changedCoinObj.b = "$"+changedCoinObj.b.substr(0,7);
        changedCoinObj.l = "$"+changedCoinObj.l.substr(0,7);
        changedCoinObj.h = "$"+changedCoinObj.h.substr(0,7);
        changedCoinObj.p = changedCoinObj.p.substr(0,7);
   
        if(Number(changedCoinObj.P) < 0){

          this.setState({percentStyle:'down'})
        }       
        changedCoinObj.P = changedCoinObj.P + '%';
        this.setState({socketObj:changedCoinObj})
      }.bind(this)
  }

  componentWillUnmount(){
       returnObj.close()
    
  }

render(){
  return (
    <Widget styleName="jr-card-full">

      <div className="jr-actchart px-3 pt-3">
        <div className="d-flex">
          <h2 className="mr-2 mb-0 jr-fs-xxl jr-font-weight-medium">{this.state.socketObj.b}</h2>
          <h5 className={`mb-0 pt-2 jr-chart-${this.state.percentStyle}`}>
            {this.state.socketObj.P}
          </h5>
          <i className={`zmdi zmdi-${this.props.icon} zmdi-hc-fw zmdi-hc-2x`}/>
        </div>
        <p className="mb-0 jr-fs-11 text-grey">{this.props.currencyName}</p>
      </div>
      {this.props.children}
    </Widget>
   );
  }
};

export default ChartCard;
