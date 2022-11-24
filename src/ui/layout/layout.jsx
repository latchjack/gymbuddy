import React, { Fragment, useState } from 'react';

function Layout({ children }) {
  return (
    <div className="md:ml-64 px-4 py-4 border border-black h-screen">
      {children}
    </div>
  );
}

export default Layout;
