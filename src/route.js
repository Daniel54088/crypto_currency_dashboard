import React from "react";
import { Route , Switch, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import PrivateRoute from './component/PrivateRoute'

// page contents
import Home from './pages/Home/Home'
import Trade from './pages/Trade/Trade'
import News from './pages/News/News'
import ContactUs from './pages/ContactUs/ContactUs'
import Login from './pages/Login/Login'
import NotFound from './pages/ErrorPage/NotFound'


const Routes = (state) => 
(   
    <Switch>
        <PrivateRoute authed={state.auth.isLogin} exact path="/" component={Home} />
        <PrivateRoute authed={state.auth.isLogin} exact path="/trade/:name" component={Trade} />
        <PrivateRoute authed={state.auth.isLogin} exact path="/news" component={News} />
        <PrivateRoute authed={state.auth.isLogin} exact path="/contactus" component={ContactUs} />
        <Route exact path="/login" component={Login} />
        <Route  component={NotFound} />
    </Switch>
  );


  function mapStateToProps(state) {

    return { auth : state.auth};
  } 



export default withRouter(connect(mapStateToProps,{})(Routes));
