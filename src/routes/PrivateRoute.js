import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

import WithLayout from '../components/WithLayout';
import { connect } from 'react-redux';

const PrivateRoute = ({user, component: Component, roles, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (!user.wallet) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/login'}} />;
            }
            
            // authorised so return component
            return <WithLayout Component={Component} {...props} />;
        }}
    />
);
const mapStateToProp = state => ({
    user:state.user.user
})

export default connect(mapStateToProp)(PrivateRoute);
