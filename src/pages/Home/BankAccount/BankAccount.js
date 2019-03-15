import React from "react";
import Button from '@material-ui/core/Button';

import Widget from "../Widget";

const BankAccount = () => {
  return (
    <Widget styleName="jr-widget-bg jr-blue-cyan-gradient">
      <span className="jr-widget-badge">Your Main Bank Account</span>
      <div style={{marginTop:10}}>
        <h2 className=" jr-font-weight-bold mb-4 text-white">Commonwealth Bank </h2>
      </div>

      <p>Account Number: **** **** **** 1234</p>
      <p>Name: Daniel Wang</p>
      <form>
        <Button className="bg-warning text-white text-capitalize" htmltype="submit">
          Change
        </Button>
      </form>
    </Widget>
  );
};

export default BankAccount;