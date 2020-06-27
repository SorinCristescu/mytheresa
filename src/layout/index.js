import React from 'react';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Styles
import { Main } from './style';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
