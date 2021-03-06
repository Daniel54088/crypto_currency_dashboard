import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import{userLogOutSuccess} from '../action/Auth'

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            open: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this)
        this.handleLogOut = this.handleLogOut.bind(this)
    }


    handleClick (event) {
        this.setState({open: true, anchorEl: event.currentTarget});
    };

    handleRequestClose (){
        this.setState({open: false});
    };

    handleLogOut(){
        this.props.logoutDispatch();// logout success and dispatch to change redux info
        this.props.history.push("/login");  // redirect to home page
        this.setState({open: false});  
    }

    render() {
       
        return (
          <div className="user-profile d-flex flex-row align-items-center">
            <Avatar
              alt='...'
              src={require("../assets/avatar.png")}
              className="user-avatar "
            />
            <div className="user-detail">
              <h4 className="user-name" onClick={this.handleClick}>
Daniel Wang
                <i
                  className="zmdi zmdi-caret-down zmdi-hc-fw align-middle"
                />
              </h4>
            </div>
            <Menu
              className="user-info"
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              open={this.state.open}
              onClose={this.handleRequestClose}
              PaperProps={{
                          style: {
                              width: 120,
                              paddingTop: 0,
                              paddingBottom: 0
                          }
                      }}
            >
              <MenuItem onClick={this.handleRequestClose}>
                <i className="zmdi zmdi-account zmdi-hc-fw mr-2" />
                <span>profile</span>
              </MenuItem>
              <MenuItem onClick={this.handleRequestClose}>
                <i className="zmdi zmdi-settings zmdi-hc-fw mr-2" />
                <span>setting</span>
              </MenuItem>
              <MenuItem onClick={this.handleLogOut}>
                <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-2" />
                <span>logout</span>
              </MenuItem>
            </Menu>
          </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
       auth : state.auth // get the login user data from store
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        logoutDispatch: () => {
            dispatch(userLogOutSuccess())
          }
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserInfo));


