import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './component/header';
import SideNav from './SideNav/SideNav';
// import css
import './styles/app.scss';
import './vendors/material-design-iconic-font/css/material-design-iconic-font.css';
import './styles/app-rtl.scss';
import './styles/bootstrap.scss'
// import all route
import  Routes  from './route'

 class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
 
    render() {

        return (
            
          <Router>
            <div>
              <div className="app-container fixed-drawer">                        
                <SideNav />
                <div className="app-main-container">
                  <div className="app-header">
                    <Header />
                  </div>

                  <main className="app-main-content-wrapper">
                    <div className="app-main-content">
                      <div className="app-wrapper">
                          <Routes />
                      </div>
                    </div>   
                  </main>       
                </div>
              </div>
            </div>
          </Router>
   
        )
    }
};

const mapStateToProps = (state) => {

    return {
       auth : state.auth // get the login user data from store
    };
};
export default connect(mapStateToProps,{})(App);
