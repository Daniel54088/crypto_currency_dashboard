import React from "react";
import TradeHeader from "./TradeHeader";

 class Trade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
        
            <div>
                <TradeHeader/>
                <div className="jr-profile-content">
                  <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-7 col-12">
                        23
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-12">
                        r3
                      <div className="row">
                        <div className="col-12">
                          3d
                        </div>
                        <div className="col-12">
                          ed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
};
export default Trade;
