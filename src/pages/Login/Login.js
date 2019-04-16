import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import{userSignInSuccess} from '../../action/Auth'
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import {userData} from './data'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            account:'',
            password:'',
            isAlertShow:false
        }
        this.onClickLogin = this.onClickLogin.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        switch (e.target.id) {
            case 'email':
                this.setState({account:e.target.value})
            break;
            case 'password':
                this.setState({password:e.target.value})       
            break;       
            default:
                break;
        }
    }

    onClickLogin(){
        if(this.state.account === userData.account && this.state.password === userData.password){
            this.props.loginDispatch(this.state.account);//login success and dispatch to change redux info
            this.props.history.push("/");  //redirect to home page
        }else{
            this.setState({isAlertShow:true});
            setTimeout(function(){ 
                this.setState({isAlertShow:false}); 
            }.bind(this), 3000); // 3 seconds later disappear 
        }


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
                                    <input name="email" 
                                           id="email" 
                                           className="form-control form-control-lg"
                                           placeholder="Email" 
                                           type="email"
                                           onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input name="password" 
                                           id="password" 
                                           className="form-control form-control-lg"
                                           placeholder="Password" 
                                           type="password"
                                           onChange={this.handleChange}
                                    />
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

                        <Snackbar
                          anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
                          open={this.state.isAlertShow}
                          ContentProps={{
                            'aria-describedby': 'message-id',
                          }}
                          message={<span id="message-id">Wrong Account or Password! Both are: dan</span>}
                        />

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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));
