import React, { Fragment, useState } from 'react';
import Layout from '../ui/layout/layout';

function DashboardPage() {
  return (
    <Layout>
      <div className="mb-2 border border-black min-w-xl max-w-3xl h-52">
        Last workout card
      </div>
      <div className=" mb-2 border border-black min-w-xl max-w-3xl h-52">
        Today's workout card
      </div>
      <div className="mb-2 border border-black min-w-xl max-w-3xl h-52">
        PR card
      </div>
      <div className="mb-2 border border-black min-w-xl max-w-3xl h-52">
        Trophy cabinet
      </div>
    </Layout>
  );
}

export default DashboardPage;
