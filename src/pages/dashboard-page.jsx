import React, { Fragment, useState } from 'react';
import Layout from '../ui/layout/layout';

function DashboardPage() {
  return (
    <Layout>
      <div className="border border-black w-full">Last workout card</div>
      <div>Today's workout card</div>
      <div>PR card</div>
      <div>Trophy cabinet</div>
    </Layout>
  );
}

export default DashboardPage;
