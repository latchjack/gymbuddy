import React from 'react';
import PageHeader from '../../ui-lib/page-header/page-header';

const PageWrapper = ({ children, header }) => {
    return (
        <main className="flex-1 h-screen">
            <div className="bg-gray-100 dark:bg-gray-600">
                <div className="py-6">
                    <div className="max-w-7xl px-4 sm:px-6 md:px-8">
                        {/* <PageHeader header="Welcome Latch" /> */}
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
