import React from "react";
import Header from './component/header';
import SideNav from './SideNav/SideNav';
import { Route } from 'react-router-dom'
import './styles/app.scss';
import './vendors/material-design-iconic-font/css/material-design-iconic-font.css';
import './styles/app-rtl.scss';
import './styles/bootstrap.scss'
//component
import Home from './pages/Home/Home'
import Login from './component/Login'


 class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {

        return (
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
                        </div>
			        </div>   
                </main>

              </div>

            </div>
        )
    }
};
export default App;
