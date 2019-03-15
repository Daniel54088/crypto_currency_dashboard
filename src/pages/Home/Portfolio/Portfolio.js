import React from "react";
import Widget from "../Widget";
import Button from '@material-ui/core/Button';
import LineIndicator from "./LineIndicator";

const Portfolio = () => {
  return (
    <Widget>
      <h4 className="mb-2 mb-lg-3">Your Portfolio Balance</h4>

      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">

          <div className="d-flex mb-2">
            <h2 className="mr-2 mb-0 jr-fs-xxxl jr-font-weight-medium">$179,626</h2>
            <h5 className="mb-0 pt-2 jr-chart-up">64% <i className="zmdi zmdi-caret-up"/></h5>
          </div>
          <p className="text-grey mb-4">Overall balance</p>
          <div className="d-flex flex-row mb-3">
            <Button className="mr-2 jr-btn jr-btn-sm" variant="contained" color="primary">Deposit</Button>
            <Button variant="contained" className="jr-btn jr-btn-sm bg-warning text-white">Withdraw</Button>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="jr-site-dash">
            <h5 className="text-muted">Portfolio Distribution</h5>
            <ul className="jr-line-indicator jr-fs-sm">
              <li>
                <LineIndicator width="78%" title="BTC" title2="8.74" color="success" value="78%"/>
              </li>
              <li>
                <LineIndicator width="18%" title="RPL" title2="1.23" color="info" value="18%"/>
              </li>
              <li>
                <LineIndicator width="4%" title="LTE" title2="0.71" color="primary" value="4%"/>
              </li>
            </ul>
            <p className="d-inline-flex align-items-center mb-0 text-primary pointer d-block d-sm-none mt-2">
              <i className="zmdi zmdi-plus-circle-o"/> Add New Wallet</p>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default Portfolio;
