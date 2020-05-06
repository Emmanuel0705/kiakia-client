import React from 'react';
import { Switch,Route } from 'react-router-dom';
import {connect} from 'react-redux'
import PrivateRoute from './PrivateRoute'
import LoginPage from '../pages/auth/Login'
import RegisterPage from '../pages/auth/Register'
import Error404 from '../pages/other/Error404'

import {showSideBar, setParentLoader} from "../redux/Actions/component.action"

import Dashboard from '../pages/dashboard/index';
// const LazyDashboard = React.lazy(() => import("../pages/dashboard/index"));



const Routes = ({showSideBar,showSideBarFunc}) => {
    return (
        <React.Suspense fallback={Error404}>  
        <Switch>
            <PrivateRoute exact path="/home" component={Dashboard}  />
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/register" component={RegisterPage}/>
            <PrivateRoute exact path="/" component={Dashboard}/>
            <Route component={Error404} />     
        </Switch> 
        </React.Suspense>
    )
}
const mapDispatchToProps = dispatch => ({
    showSideBarFunc: () => dispatch(showSideBar()),
    setLoader: () => dispatch(setParentLoader())
})

const mapstateToProps = state => ({
     showSideBar: state.component.showSideBar,
     loader:state.component.parentLoader
})

export default connect(mapstateToProps,mapDispatchToProps)(Routes);
