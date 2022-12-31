import React, { useContext } from 'react';
import { Route, Redirect } from 'wouter';
import { AuthContext } from './context/auth-context';

function PrivateRoute({ Component, path }) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        console.log('not authenticated');
        return <Redirect to="/login" />;
    }

    return <Route path={path} component={Component} />;
}

export default PrivateRoute;
