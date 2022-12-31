import React, { useContext } from 'react';
import { Route } from 'wouter';

import DashboardPage from './pages/dashboard-page';
import ExercisesPage from './pages/exercises-page';
import TrophiesPage from './pages/trophies-page';
import LoginPage from './pages/login-page';
import { AuthContext } from './context/auth-context';

const Routes = () => {
    const { isAuthenticated } = useContext(AuthContext);
    console.log('is authenticated', isAuthenticated);
    // TODO: if not authenticated, redirect to login page.

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
            <Route path="/" component={DashboardPage} />
            <Route path="/exercises" component={ExercisesPage} />
            <Route path="/workouts" />
            <Route path="/progress" />
            <Route path="/calendar" />
            <Route path="/profile" />
            <Route path="/records" />
            <Route path="/trophies" component={TrophiesPage} />
            <Route path="/settings" />
            <Route path="/login" component={LoginPage} />
        </div>
    );
};

export default Routes;
