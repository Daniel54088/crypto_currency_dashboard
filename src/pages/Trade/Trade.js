import React from "react";
import TradeHeader from "./TradeHeader";
import PriceDetail from './PriceDetail';
import TradeHistory from './TradeHistory';
import TradeArea from './TradeArea';
import {marketingData} from './data';
import {ajaxCall} from '../../util/ajaxHelper'
import {URL} from '../../config.js'
import HistoryOrder from "./HistoryOrder";


 class Trade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marketType : location.pathname,
            data: {url: '', name: '', fullName:''},
        }

    }
    
    componentDidMount(){    
        this.getData(location.pathname);
    }

    componentWillReceiveProps(nextProps){
        this.getData(nextProps.match.url)
    }

    getData(url){
   
        switch (url) {
            case '/trade/btc':
                ajaxCall( URL.API_Domain + URL.API_BTC_CONTENT,function(result){
                    this.setState({data: result})
                }.bind(this));
            break;
            case '/trade/eth':
                ajaxCall( URL.API_Domain + URL.API_ETH_CONTENT,function(result){
                    this.setState({data: result})
                }.bind(this));
            break;
            case '/trade/ltc':
                ajaxCall( URL.API_Domain + URL.API_LTC_CONTENT,function(result){
                    this.setState({data: result})
                }.bind(this));
            break; 
            case '/trade/xrp':
                ajaxCall( URL.API_Domain + URL.API_XRP_CONTENT,function(result){
                    this.setState({data: result})
                }.bind(this));
            break;                                  
            default:
                ajaxCall( URL.API_Domain + URL.API_BTC_CONTENT,function(result){
                    this.setState({data: result})
                }.bind(this));
            break;
        }

    }


    render() {

        return (
        
            <div>
                <TradeHeader data={this.state.data}/>
                <div className="jr-profile-content">
                  <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-12">
                        <PriceDetail url={this.props.match.url}/>
                      
                        <TradeArea/>
                     
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-12">
                        <div className="jr-card">
                        <div className="jr-card-header d-flex align-items-center">
                        <h3 className="mb-0">Trade History</h3>
                            <div className="ml-auto">
                                <span className="text-white badge badge-success">Real Time</span>
                            </div>
                        </div>
                        <TradeHistory data={marketingData}/>
                      </div>
                    </div>
                    <div className="col-12">
                    <div className="jr-card">
                      <div className="jr-card-header d-flex align-items-center">
                        <div className="mr-auto">
                          <h3 className="d-inline-block mb-0">Recent Orders</h3>
                          <span className="text-white badge badge-success">This Week</span>
                        </div>

                      </div>
                      <HistoryOrder/>
                    </div>
                </div>


                  </div>

                </div>
            </div>    
        )
    }
};
export default Trade;
