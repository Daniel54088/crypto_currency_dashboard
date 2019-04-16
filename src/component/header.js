import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import AppNotification from "./AppNotification/AppNotification";
import MailNotification from "./MailNotification/MailNotification";
// import CardHeader from './CardHeader/CardHeader';
import SearchBox from "./SearchBox/SearchBox";
// import IntlMessages from '../util/IntlMessages';
// import Menu from 'components/TopNav/Menu';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      searchBox: false,
      searchText: "",
      mailNotification: false,
      appNotification: false
    };
    this.updateSearchText = this.updateSearchText.bind(this);
    this.onAppNotificationSelect = this.onAppNotificationSelect.bind(this);
    this.onMailNotificationSelect = this.onMailNotificationSelect.bind(this);
  }

  onAppNotificationSelect() {
    const { appNotification } = this.state;
    this.setState({
      appNotification: !appNotification
    });
  }

  onMailNotificationSelect() {
    const { mailNotification } = this.state;
    this.setState({
      mailNotification: !mailNotification
    });
  }

  onSearchBoxSelect() {
    const { searchBox } = this.state;
    this.setState({
      searchBox: !searchBox
    });
  }

  onToggleCollapsedNav() {
    const { navCollapsed } = this.props;
    const val = !navCollapsed;
    this.props.toggleCollapsedNav(val);
  }

  handleRequestClose() {
    this.setState({
      appNotification: false,
      mailNotification: false,
      searchBox: false
    });
  }

  updateSearchText(evt) {
    this.setState({
      searchText: evt.target.value
    });
  }

  render() {
    const { appNotification, mailNotification, searchText } = this.state;
    return (
      <AppBar className="app-main-header app-main-header-top">
        <Toolbar className="app-toolbar" disableGutters={false}>
          <div
            className="d-block d-md-none pointer mr-3"
            onClick={this.onToggleCollapsedNav}
            onKeyPress={this.onKeyPressHandler}
            role="button"
            tabIndex="0"
          >
            <span className="jr-menu-icon">
              <span className="menu-icon" />
            </span>
          </div>

          <NavLink className="app-logo mr-2 d-none d-sm-block" to="/">
            <img
              src={require("../assets/logo_white.png")}
              alt="Loweik"
              title="Loweik"
            />
          </NavLink>

          <SearchBox
            styleName="d-none d-lg-block"
            placeholder=""
            onChange={this.updateSearchText}
            value={searchText}
          />

          <ul className="header-notifications list-inline ml-auto">
            <li className="list-inline-item app-tour">
              <Dropdown
                className="quick-menu"
                isOpen={appNotification}
                toggle={this.onAppNotificationSelect}
              >
                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown"
                >
                  <IconButton className="icon-btn size-20 font-size-20">
                    <i className="zmdi zmdi-notifications-active icon-alert animated infinite wobble" />
                  </IconButton>
                </DropdownToggle>

                <DropdownMenu right>
                  <AppNotification />
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="list-inline-item mail-tour">
              <Dropdown
                className="quick-menu"
                isOpen={mailNotification}
                toggle={this.onMailNotificationSelect}
              >
                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown"
                >
                  <IconButton className="icon-btn size-20 font-size-20">
                    <i className="zmdi zmdi-comment-alt-text icon-alert zmdi-hc-fw" />
                  </IconButton>
                </DropdownToggle>

                <DropdownMenu right>
                  <MailNotification />
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    );
  }
}
export default Header;
