import React, { useContext } from 'react';
import { Redirect } from 'wouter';

import PageHeader from '../../ui-lib/page-header/page-header';
import Button from '../../ui-lib/button';
import { AuthContext } from '../../context/auth-context';

const PageWrapper = ({ children, header }) => {
    const { setIsAuthenticated } = useContext(AuthContext);

    const handleLogoutClick = () => {
        localStorage.removeItem('access_token');
        setIsAuthenticated(false);
        return <Redirect to="/login" />;
    };

    return (
        <main className="flex-1 h-screen">
            <div className="bg-gray-100 dark:bg-gray-600">
                <div className="py-6">
                    <div className="px-4 sm:pl-6 md:pl-8 flex place-content-between">
                        <PageHeader header={header} />
                        <Button label="Logout" onClick={handleLogoutClick} />
                    </div>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PageWrapper;
