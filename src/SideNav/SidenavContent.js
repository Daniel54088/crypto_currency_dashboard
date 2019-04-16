import React from 'react';
import { NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import CustomScrollbars from '../util/CustomScrollbars';


class SidenavContent extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
  
        }
    }

    componentDidMount() {
   
      const that = this;
      const pathname = window.location;// get current path
  
      const menuLi = document.getElementsByClassName('menu');
      for (let i = 0; i < menuLi.length; i++) {
        menuLi[i].onclick = function () {
          for (let j = 0; j < menuLi.length; j++) {
            const parentLi = that.closest(this, 'li');
            if (menuLi[j] !== this && (parentLi === null || !parentLi.classList.contains('open'))) {
              menuLi[j].classList.remove('open')
            }
          }
          this.classList.toggle('open');
        }
      }
  
      const activeLi = document.querySelector(`a[href="' + ${pathname} + '"]`);// select current a element
      try {
        const activeNav = this.closest(activeLi, 'ul'); // select closest ul
        if (activeNav.classList.contains('sub-menu')) {
          this.closest(activeNav, 'li').classList.add('open');
        } else {
          this.closest(activeLi, 'li').classList.add('open');
        }
      } catch (error) {
        return error
      }
      return true
    }
  
    componentWillReceiveProps() {

      const pathname = window.location;// get current path
  
      const activeLi = document.querySelector(`a[href="' + ${pathname} + '"]`);// select current a element
      try {
        const activeNav = this.closest(activeLi, 'ul'); // select closest ul
        if (activeNav.classList.contains('sub-menu')) {
          this.closest(activeNav, 'li').classList.add('open');
        } else {
          this.closest(activeLi, 'li').classList.add('open');
        }
      } catch (error) {
          return error
      }
      return true
    }
  
    closest(el, selector) {
      try {
        let matchesFn;
        // find vendor prefix
        ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
          if (typeof document.body[fn] === 'function') {
            matchesFn = fn;
            return true;
          }
          return false;
        });
  
        let parent;
  
        // traverse parents
        while (el) {
          parent = el.parentElement;
          if (parent && parent[matchesFn](selector)) {
            return parent;
          }
          el = parent;
        }
      } catch (e) {
          
      }
  
      return null;
    }


    render() {
        return (
          <CustomScrollbars className="scrollbar">
            <ul className="nav-menu">

              <li className="nav-header" />
              <li className="menu no-arrow">
                <NavLink exact to="/">
                  <i className="zmdi zmdi-home zmdi-hc-fw" />
                  <span className="nav-text">Home</span>
                </NavLink>
              </li>

              <li className="menu collapse-box">
                <Button>
                  <i className="zmdi zmdi-shopping-cart zmdi-hc-fw" />
                  <span className="nav-text">
                           Trade Market
                  </span>
                </Button>
                <ul className="sub-menu">
                  <li>
                    <NavLink className="prepend-icon" to="/trade/btc">
                      <span className="nav-text">BTC Market</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/trade/eth">
                      <span className="nav-text">ETH Market</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/trade/ltc">
                      <span className="nav-text">LTC Market</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/trade/xrp">
                      <span className="nav-text">XRP Market</span>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="menu no-arrow">
                <NavLink exact to="/news">
                  <i className="zmdi zmdi-view-web zmdi-hc-fw" />
                  <span className="nav-text">News Feed</span>
                </NavLink>
              </li>

              <li className="menu no-arrow">
                <NavLink exact to="/contactus">
                  <i className="zmdi zmdi-comment zmdi-hc-fw" />
                  <span className="nav-text">Contact Us</span>
                </NavLink>
              </li>

            </ul>
          </CustomScrollbars>
        );
    }
}

export default SidenavContent;
