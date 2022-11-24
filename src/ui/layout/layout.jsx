import React, { Fragment, useState } from 'react';

function Layout({ children }) {
  return <div className="ml-72 border border-black h-screen">{children}</div>;
}

export default Layout;
