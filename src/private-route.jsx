import React, { useContext } from 'react';
import { Route, Redirect } from 'wouter';
import { AuthContext } from './context/auth-context';

const PrivateRoute = ({ component, exact, path }) => {
    const { isAuthenticated } = useContext(AuthContext);
    console.log('isAuthenticated', isAuthenticated);

    if (!isAuthenticated) {
        console.log('not authenticated, setting to false');
        // wipe token from localStorage
        return <Redirect to="/login" />;
    }

    return isAuthenticated ? (
        <Route path={path} component={component} exact={exact} />
    ) : (
        <Redirect to="/login" />
    );
};

export default PrivateRoute;
