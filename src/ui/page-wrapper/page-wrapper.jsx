import React from 'react';
import PageHeader from '../../ui-lib/page-header/page-header';

const PageWrapper = ({ children, header }) => {
  return (
    <main className="flex-1 h-screen">
      <div className="bg-red-300 dark:bg-red-500 border border-black">
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <PageHeader header="Dashboard" />
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
