import React from "react";
import Header from './component/header';
import SideNav from './SideNav/SideNav';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PrivateRoute from './component/PrivateRoute'
// import css
import './styles/app.scss';
import './vendors/material-design-iconic-font/css/material-design-iconic-font.css';
import './styles/app-rtl.scss';
import './styles/bootstrap.scss'
//page contents
import Home from './pages/Home/Home'
import Trade from './pages/Trade/Trade'
import News from './pages/News/News'
import ContactUs from './pages/ContactUs/ContactUs'
import Login from './pages/Login/Login'



 class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        console.log(this.props.auth.isLogin)
        return (
            
                <Router>
                    <div>

                    <div className="app-container fixed-drawer">                        
                          <SideNav/>
                          <div className="app-main-container">
                            <div className="app-header">
                                <Header/>
                            </div>

                                 <main className="app-main-content-wrapper">
                                     <div className="app-main-content">
                                         <div className="app-wrapper">
                                             <PrivateRoute authed={this.props.auth.isLogin} exact path="/" component={Home} />
                                             <PrivateRoute authed={this.props.auth.isLogin} exact path="/trade/:name" component={Trade} />
                                             <PrivateRoute authed={this.props.auth.isLogin} exact path="/news" component={News} />
                                             <PrivateRoute authed={this.props.auth.isLogin} exact path="/contactus" component={ContactUs} />
                                             <Route exact path="/login" component={Login} />
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
       auth : state.auth //get the login user data from store
    };
};
export default connect(mapStateToProps,{})(App);
