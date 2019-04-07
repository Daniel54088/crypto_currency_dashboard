import React from "react";
import CurrencyCard from './CurrencyCard/CurrencyCard'
import Portfolio from "./Portfolio/Portfolio"
import RecentActivity from './RecentActivity/RecentActivity'
import BankAccount from "./BankAccount/BankAccount"
import ConsultantCard from "./ConsultantCard/ConsultantCard"
import CryptoNews from './CryptoNews/CryptoNews'
import Widget from './Widget'
import {currencyData,recentActivity} from './fakeData'



class Home extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      }
  }




  render() {

      return (
        <div className="row">
          {currencyData.map(function(item,index) {
              return(
                <CurrencyCard
                  key={index} 
                  data={item.increamentData} 
                  prize={item.prize} 
                  title={item.title} 
                  currencyName={item.currencyName}
                  url={item.url}
                />
              ) 
            }.bind(this))
          }

          <div className="col-xl-8 col-lg-8 col-md-12 col-12">

            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <Portfolio/>
            </div>

            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <BankAccount/>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <ConsultantCard/>
              </div>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <CryptoNews/>
            </div>

          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-12 order-sm-2">
            <Widget>
              <RecentActivity shape="rounded" recentList={recentActivity}/>
            </Widget>
          </div>


        </div>
      )
  }
};

export default Home;
