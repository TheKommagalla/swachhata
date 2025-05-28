import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Scrolltop from './Scrolltop';
function Layout({ children }) {
  return (
    <>
      <Navbar />
        <main>{children}</main>
       <Scrolltop />
      <Footer />
    </>
  );
}

export default Layout;
