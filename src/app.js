import React from "react";
import Header from './component/header';
import SideNav from './SideNav/SideNav';
import './styles/app.scss';
import './vendors/material-design-iconic-font/css/material-design-iconic-font.css';

 class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div>
            <SideNav/>
             <Header/>
               <div id="component" key={this.props.location.key}>
                {this.props.children}
               </div>
            </div>
        )
    }
};
export default App;
