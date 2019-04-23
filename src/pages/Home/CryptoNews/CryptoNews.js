import React from "react";
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';

import Widget from "../Widget";
import {allNews, bitCoinNews, lightCoinNews, rippleNews} from "../fakeData"
import CryptoNewsItem from "./CryptoNewsItem";



class CryptoNews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      loader: false,
    }
  }

  toggle(tab){
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }


  render() {
    return (
      <Widget>
        <div className="d-flex flex-row justify-content-between mb-2">
          <h4 className="mr-2">Crypto News</h4>

          <span className="ml-2 pointer"><i className="zmdi zmdi-search text-primary jr-fs-xl"/></span>
        </div>
        <div className="jr-news-action jr-tabs-classic jr-tabs-classic-no-border">
          <div className="jr-tabs-up jr-tabs-up-no-border">
            <Nav className="jr-tabs-pills-ctr" pills>
              <NavItem>
                <NavLink
                  className={classnames({active: this.state.activeTab === '1'})}
                  onClick={() => {
                    this.toggle('1');
                  }}>
                  All
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({active: this.state.activeTab === '2'})}
                  onClick={() => {
                    this.toggle('2');
                  }}
                >
                  Bitcoin
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({active: this.state.activeTab === '3'})}
                  onClick={() => {
                    this.toggle('3');
                  }}>
                  Ripple
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({active: this.state.activeTab === '4'})}
                  onClick={() => {
                    this.toggle('4');
                  }}>
                  Litecoin
                </NavLink>
              </NavItem>
            </Nav>
          </div>

          <TabContent className="jr-tabs-content" activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              {allNews.map((data, index) =>
                <CryptoNewsItem key={index} {...data}/>
              )}
            </TabPane>

            <TabPane tabId="2">
              {bitCoinNews.map((data, index) =>
                <CryptoNewsItem key={index}  {...data}/>
              )}
            </TabPane>
            <TabPane tabId="3">
              {rippleNews.map((data, index) =>
                <CryptoNewsItem key={index}  {...data}/>
              )}
            </TabPane>
            <TabPane tabId="4">
              {lightCoinNews.map((data, index) =>
                <CryptoNewsItem key={index}  {...data}/>
              )}
            </TabPane>
          </TabContent>
        </div>
      </Widget>
    );
  }
}

export default CryptoNews;
