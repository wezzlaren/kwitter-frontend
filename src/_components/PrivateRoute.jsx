import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '../_services';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const token = authenticationService.currentUser
        if (!token) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        return <Component {...props} />
    }} />
)