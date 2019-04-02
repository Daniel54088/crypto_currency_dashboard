import React from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Widget from "../Home/Widget";
import {Badge} from 'reactstrap';


class PriceDetail extends React.Component {



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
                 <h2 className="text-primary jr-fs-xlxl jr-font-weight-medium m-4" style={{textAlign:"center"}}>$3884.23</h2>
                 <div className="m-4">
                    <span className="h1 text-red" >384.2  </span>
                    <span className="h2 text-red">
                    <i className="zmdi zmdi-flash zmdi-hc-fw"/>16.4%</span>
                 </div>
               </div>
               <div className="jr-currentplan-col jr-currentplan-right">
                 <div className="m-4">
                 <span className="h2 text-muted" >High 24H : $4082.3</span>
                 </div>
                 <div className="m-4">
                 <span className="h2 text-muted" >Low 24H : $3582.56</span>
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
