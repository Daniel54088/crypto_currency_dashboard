import React from "react";
import Avatar from '@material-ui/core/Avatar';


function TradeHeader({data}) {
    const {name, fullName} = data
      return (
        <div className="jr-profile-banner">
          <div className="jr-profile-container">
            <div className="jr-profile-banner-top">
              <div className="jr-profile-banner-top-left">
                <div className="jr-profile-banner-avatar">
                  <Avatar className="size-90" alt="..." src={'https://via.placeholder.com/150x150'}/>
                </div>
                <div className="jr-profile-banner-avatar-info">
                  <h2 className="mb-2 jr-mb-sm-3 jr-fs-xxl jr-font-weight-bold">{name}</h2>
                  <p className="mb-0 jr-fs-lg">{fullName}</p>
                </div>
              </div>
              <div className="jr-profile-banner-top-right">
                <ul className="jr-follower-list">
                  <li>
                    <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">$ 4,002.78</span>
                    <span className="jr-fs-sm">Open 24H</span></li>
                  <li>
                    <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">BTC 17.59 M</span>
                    <span className="jr-fs-sm">Total</span></li>
                  <li>
                    <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">$ 71.39 B</span>
                    <span className="jr-fs-sm">Mkt. Cap</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="jr-profile-banner-bottom">


            </div>
          </div>
        </div>
      )
    }

export default TradeHeader;

