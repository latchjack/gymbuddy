import React from 'react';
import { Route } from 'wouter';

import PrivateRoute from './private-route';
import DashboardPage from './pages/dashboard-page';
import ExercisesPage from './pages/exercises-page';
import TrophiesPage from './pages/trophies-page';
import LoginPage from './pages/login-page';
import PageNotFound from './pages/404-page';

const Routes = () => {
    return (
        <div>
            {/* <Link href="/">
        <a className="link">Dashboard</a>
      </Link>
      <Link href="/exercises">
        <a className="link">Exercises</a>
      </Link>
      <Link href="/workouts">
        <a className="link">Workouts</a>
      </Link>
      <Link href="/about">
        <a className="link">About</a>
      </Link> */}
            <PrivateRoute path="/" component={DashboardPage} />
            <PrivateRoute path="/exercises" component={ExercisesPage} />
            <PrivateRoute path="/workouts" />
            <PrivateRoute path="/progress" />
            <PrivateRoute path="/calendar" />
            <PrivateRoute path="/profile" />
            <PrivateRoute path="/records" />
            <PrivateRoute path="/trophies" component={TrophiesPage} />
            <PrivateRoute path="/settings" />
            <Route path="/register" component={LoginPage} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="*" component={PageNotFound} />
        </div>
    );
};

export default Routes;
