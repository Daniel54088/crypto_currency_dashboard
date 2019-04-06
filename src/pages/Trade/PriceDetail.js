import React from "react";
import Widget from "../Home/Widget";
import {createSocket} from '../../util/socketHelper'
import {SOCKET_URL} from '../../config.js'

let returnObj = {}
class PriceDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      socketObj:{}
    }
  
  }

  componentDidMount(){    
    this.getSocketData(location.pathname);
  }

  componentWillReceiveProps(nextProps){

    if(nextProps.url != undefined){
      returnObj.close()
      this.getSocketData(nextProps.url);
    }

   
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
        changedCoinObj.P = changedCoinObj.P + '%';
        this.setState({socketObj:changedCoinObj})
      }.bind(this)
    
 }

   componentWillUnmount(){
     returnObj.close()
   }


  render() {

    return (
      <Widget styleName="jr-card-full jr-card-tabs-right jr-card-profile text-center">
        <div className="card-header">
          <h4 className="card-title mb-0">Pirce Index</h4>
        </div>
        <div className="jr-tabs-classic">

          <div className="jr-tabs-content jr-task-list">
    
             <div className="jr-currentplan-row">
               <div className="jr-currentplan-col pb-xl-2">
                 <h2 className="text-primary jr-fs-xlxl jr-font-weight-medium m-4" style={{textAlign:"center"}}>{this.state.socketObj.b}</h2>
                 <div className="m-4">
                    <span className="h1 text-red" >{this.state.socketObj.p} </span>
                    <span className="h2 text-red">
                    <i className="zmdi zmdi-flash zmdi-hc-fw"/>{this.state.socketObj.P}</span>
                 </div>
               </div>
               <div className="jr-currentplan-col jr-currentplan-right">
                 <div className="m-4">
                 <span className="h2 text-muted" >High 24H :{this.state.socketObj.h}</span>
                 </div>
                 <div className="m-4">
                 <span className="h2 text-muted" >Low 24H : {this.state.socketObj.l}</span>
                 </div>
               </div>
             </div>
           
          </div>
        </div>
      </Widget>
    );
  }
}


export default PriceDetail;
