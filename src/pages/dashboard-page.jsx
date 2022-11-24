import React, { Fragment, useState } from 'react';
import Layout from '../ui/layout/layout';

function DashboardPage() {
  return (
    <Layout>
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-3 gap-4">
        <div className="border border-black min-w-xl max-w-3xl h-52">
          Last workout card
        </div>
        <div className="border border-black min-w-xl max-w-3xl h-52">
          Today's workout card
        </div>
        <div className="border border-black min-w-xl max-w-3xl h-52">
          PR card
        </div>
        <div className="border border-black min-w-xl max-w-3xl h-52">
          Trophy cabinet
        </div>
      </div>
    </Layout>
  );
}

export default DashboardPage;
