import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import{userSignInSuccess} from '../../action/Auth'
import Button from '@material-ui/core/Button';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.onClickLogin = this.onClickLogin.bind(this)
    }

    onClickLogin(){
       this.props.loginDispatch('123');
    }

    render(){
      
        return (
            <div
                className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
                <div className="login-content">
                    <div className="login-header">
                        <Link className="app-logo" to="/" title="Jambo">
                            <img src={require("../../assets/logo_blue.png")} style={{width:100,height:45}} alt="jambo" title="jambo"/>
                        </Link>
                    </div>
    
                    <div className="login-form">
                        <form>
                            <fieldset>
                                <div className="form-group">
                                    <input name="email" id="email" className="form-control form-control-lg"
                                           placeholder="Email" type="email"/>
                                </div>
                                <div className="form-group">
                                    <input name="password" id="password" className="form-control form-control-lg"
                                           placeholder="Password" type="password"/>
                                </div>
                                <div className="form-group d-flex justify-content-between align-items-center">
    
                                    <div>
                                        <Link to="/app/app-module/forgot-password-1"
                                              title="Reset Password">Forgot your password?</Link>
                                    </div>
                                </div>
    
                                <Button onClick={this.onClickLogin} variant="contained" color="primary" className="jr-btn text-uppercase text-white btn-block btn-rounded">signIn</Button>
    
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>        
        );   
    }

};


const mapStateToProps = (state) => {

    return {
       auth : state.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        loginDispatch: (userName) => {
            dispatch(userSignInSuccess(userName))
          }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
