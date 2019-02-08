import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import CustomScrollbars from '../util/CustomScrollbars';


class SidenavContent extends Component {


    render() {
        return (
            <CustomScrollbars className="scrollbar">
                <ul className="nav-menu">

                    <li className="nav-header"></li>
                    <li className="menu no-arrow">
                        <NavLink exact to="/" >
                            <i className="zmdi zmdi-home zmdi-hc-fw"/>
                            <span className="nav-text">Home</span>
                        </NavLink>
                    </li>
                    <li className="menu no-arrow">
                        <NavLink exact to="/login" >
                            <i className="zmdi zmdi-shopping-cart zmdi-hc-fw"/>
                            <span className="nav-text">Currency Trade</span>
                        </NavLink>
                    </li>
                    <li className="menu no-arrow">
                        <NavLink exact to="/login" >
                            <i className="zmdi zmdi-view-web zmdi-hc-fw"/>
                            <span className="nav-text">News</span>
                        </NavLink>
                    </li>
                    <li className="menu no-arrow">
                        <NavLink exact to="/login" >
                            <i className="zmdi zmdi-comment zmdi-hc-fw"/>
                            <span className="nav-text">Contact Us</span>
                        </NavLink>
                    </li>
                </ul>
            </CustomScrollbars>
        );
    }
}

export default SidenavContent;
