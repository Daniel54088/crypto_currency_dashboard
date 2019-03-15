import React from 'react';
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';
import AppNotification from './AppNotification/AppNotification';
import MailNotification from './MailNotification/MailNotification';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
//import CardHeader from './CardHeader/CardHeader';
import Tesr from './tesr/tesr'
import SearchBox from './SearchBox/SearchBox.js'
//import IntlMessages from '../util/IntlMessages';
//import Menu from 'components/TopNav/Menu';


class Header extends React.Component {

  onAppNotificationSelect(){
      this.setState({
          appNotification: !this.state.appNotification
      })
  }
  onMailNotificationSelect () {
    this.setState({
        mailNotification: !this.state.mailNotification
    })
};

  onLangSwitcherSelect (event) {
    this.setState({
        langSwitcher: !this.state.langSwitcher, anchorEl: event.currentTarget
    })
  };

  onSearchBoxSelect(){
      this.setState({
          searchBox: !this.state.searchBox
      })
  };

  handleRequestClose(){
      this.setState({
          langSwitcher: false,
          userInfo: false,
          appNotification: false,
          mailNotification: false,
          searchBox: false
      });
  };


  constructor() {
      super();
      this.state = {
          anchorEl: undefined,
          searchBox: false,
          searchText: '',
          userInfo: false,
          mailNotification: false,
          langSwitcher: false,
          appNotification: false,
      }
  }

  onToggleCollapsedNav(e){
      const val = !this.props.navCollapsed;
      this.props.toggleCollapsedNav(val);
  };

  updateSearchText(evt) {
      this.setState({
          searchText: evt.target.value,
      });
  }

  render() {
     
      return (
          <AppBar
              className='app-main-header app-main-header-top'>
              <Toolbar className="app-toolbar" disableGutters={false}>
              
                      <div className="d-block d-md-none pointer mr-3" onClick={this.onToggleCollapsedNav}>
                          <span className="jr-menu-icon">
                            <span className="menu-icon"/>
                          </span>
                      </div>
                      
                      <IconButton className='jr-menu-icon mr-3' aria-label="Menu"
                                  onClick={this.onToggleCollapsedNav}>
                          <span className="menu-icon"/>
                      </IconButton>
                  

                  <NavLink className="app-logo mr-2 d-none d-sm-block" to="/">
                      <img src={require("../assets/logo_white.png")} alt="Loweik" title="Loweik"/>
                  </NavLink>

                <SearchBox styleName="d-none d-lg-block" placeholder=""
                        onChange={this.updateSearchText.bind(this)}
                value={this.state.searchText}/>

                  <ul className="header-notifications list-inline ml-auto">
                      <li className="d-inline-block d-lg-none list-inline-item">
                          <Dropdown
                              className="quick-menu nav-searchbox"
                              isOpen={this.state.searchBox}
                              toggle={this.onSearchBoxSelect.bind(this)}>

                              <DropdownToggle
                                  className="d-inline-block"
                                  tag="span"
                                  data-toggle="dropdown">
                                  <IconButton className="icon-btn size-30">
                                      <i className="zmdi zmdi-search zmdi-hc-fw"/>
                                  </IconButton>
                              </DropdownToggle>

                              <DropdownMenu right className="p-0">
                              <SearchBox styleName="d-none d-lg-block" placeholder=""
                                  onChange={this.updateSearchText.bind(this)}
                              value={this.state.searchText}/>
                               <AppNotification/>
                              </DropdownMenu>
                          </Dropdown>
                      </li>
                      <li className="list-inline-item">
                            <Dropdown
                                className="quick-menu"
                                isOpen={this.state.langSwitcher}
                                toggle={this.onLangSwitcherSelect.bind(this)}>

                                <DropdownToggle
                                    className="d-inline-block"
                                    tag="span"
                                    data-toggle="dropdown">
                                    <div className="d-flex align-items-center pointer pt-1">
                                        <i className={`flag flag-24 flag-us`}/>
                                    </div>
                                </DropdownToggle>

                                <DropdownMenu right className="w-50">
                                   <LanguageSwitcher switchLanguage={this.props.switchLanguage}
                                                      handleRequestClose={this.handleRequestClose}/> 
                                </DropdownMenu>
                            </Dropdown>


                        </li>

                      <li className="list-inline-item app-tour">
                          <Dropdown
                              className="quick-menu"
                              isOpen={this.state.appNotification}
                              toggle={this.onAppNotificationSelect.bind(this)}>

                              <DropdownToggle
                                  className="d-inline-block"
                                  tag="span"
                                  data-toggle="dropdown">
                                  <IconButton className="icon-btn size-20 font-size-20">
                                      <i className="zmdi zmdi-notifications-active icon-alert animated infinite wobble"/>
                                  </IconButton>
                              </DropdownToggle>

                              <DropdownMenu right>
 
                                  <AppNotification/>
                              </DropdownMenu>
                          </Dropdown>
                      </li>
                      <li className="list-inline-item mail-tour">
                            <Dropdown
                                className="quick-menu"
                                isOpen={this.state.mailNotification}
                                toggle={this.onMailNotificationSelect.bind(this)}
                            >
                                <DropdownToggle
                                    className="d-inline-block"
                                    tag="span"
                                    data-toggle="dropdown">

                                    <IconButton className="icon-btn size-20 font-size-20">
                                        <i className="zmdi zmdi-comment-alt-text icon-alert zmdi-hc-fw"/>
                                    </IconButton>
                                </DropdownToggle>


                                <DropdownMenu right>
                                    <Tesr styleName="align-items-center"/>
                                    <MailNotification/>
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