import React, { useEffect } from 'react';
import { Switch,Route } from 'react-router-dom';
import {connect} from 'react-redux'
import PrivateRoute from './PrivateRoute'
import WithSpinner from '../components/WithSpanner'

import {showSideBar} from "../redux/Actions/component.action"

import Dashboard from '../pages/dashboard/index';
import LoginPage from '../pages/auth/Login'
import RegisterPage from '../pages/auth/Register'
import Home from '../pages/forms/Basic';
import Error404 from '../pages/other/Error404'

const Routes = ({showSideBar,showSideBarFunc}) => {
    const hideBarOnMobile = () => {
        if(window.innerWidth < 767) if(showSideBar) showSideBarFunc()
    }
    return (        
       
                    <Switch>
                        <PrivateRoute exact path="/home" component={Dashboard}  />
                        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/register" component={RegisterPage}/>
                        <PrivateRoute exact path="/" component={Dashboard}/>
                        <Route component={Error404} />
                        
                    </Switch>
      
    )
}
const mapDispatchToProps = dispatch => ({
    showSideBarFunc: () => dispatch(showSideBar())
})

const mapstateToProps = state => ({
     showSideBar: state.component.showSideBar
})

export default connect(mapstateToProps,mapDispatchToProps)(Routes);
