import React from "react";
import Header from './component/header';
import SideNav from './SideNav/SideNav';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/app.scss';
import './vendors/material-design-iconic-font/css/material-design-iconic-font.css';
import './styles/app-rtl.scss';
import './styles/bootstrap.scss'
//page contents
import Home from './pages/Home/Home'
import Trade from './pages/Trade/Trade'
import News from './pages/News/News'
import Contact from './pages/Contact/Contact'
import Login from './component/Login'


 class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {

        return (
        <Router>
            <div className="app-container fixed-drawer">
              <SideNav/>
              <div className="app-main-container">
                <div className="app-header">
                    <Header/>
                </div>

                     <main className="app-main-content-wrapper">
                         <div className="app-main-content">
                             <div className="app-wrapper">
                                 <Route exact path="/" component={Home} />
                                 <Route exact path="/login" component={Login} />
                                 <Route exact path="/trade/:name" component={Trade} />
                                 <Route exact path="/news" component={News} />
                                 <Route exact path="/contact" component={Contact} />
                             </div>
			             </div>   
                     </main>       
              </div>
            </div>
        </Router>
        )
    }
};
export default App;
