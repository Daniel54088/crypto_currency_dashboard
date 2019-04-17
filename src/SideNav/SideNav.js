import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { connect } from "react-redux";
import SidenavContent from "./SidenavContent";
import UserInfo from "./UserInfo";
import { toggleCollapsedNav, updateWindowWidth } from "../action/Setting";

class SideNav extends React.PureComponent {



  componentDidMount() {
    window.addEventListener("resize", () => {
      this.props.updateWindowWidth(window.innerWidth)
    });
  }

  onToggleCollapsedNav = (e) => {
 
    const { setting } = this.props;
    const { navCollapsed } = setting;
    const val = !navCollapsed;   
    this.props.toggleCollapsedNav(val);
  };

  render() {
    const { setting } = this.props;
    const { navCollapsed, width } = setting;      
    let type = "permanent";
    if (width < 700) { type = "temporary"; }

    return (
      <div className="app-sidebar d-none d-xl-flex">
        <Drawer
          className="app-sidebar-content"
          variant={type}
          open={navCollapsed}
          onClose={this.onToggleCollapsedNav}
          classes={{
            paper: "side-nav"
          }}
        >
          <UserInfo />
          <SidenavContent />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    setting: state.setting
  };
};

export default connect(
  mapStateToProps,
  { toggleCollapsedNav, updateWindowWidth }
)(SideNav);
