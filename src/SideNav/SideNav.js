import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import SidenavContent from './SidenavContent';
import UserInfo from './UserInfo';
// import {COLLAPSED_DRAWER, FIXED_DRAWER, HORIZONTAL_NAVIGATION} from 'constants/ActionTypes';
// import {toggleCollapsedNav, updateWindowWidth} from 'actions/Setting';

class SideNav extends React.PureComponent {

    componentDidMount() {
        window.addEventListener('resize', () => {
            // this.props.updateWindowWidth(window.innerWidth)
        });
    }

    render() {

        return (
          <div className="app-sidebar d-none d-xl-flex">
            <Drawer
              className="app-sidebar-content"
              variant='permanent'
              open
              classes={{
                paper: 'side-nav',
                        }}
            >
              <UserInfo />
              <SidenavContent />
            </Drawer>
          </div>
        );
    }
}



export default SideNav;
