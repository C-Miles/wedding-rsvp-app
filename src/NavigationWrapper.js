import React from 'react';
import { useLocation } from 'react-router-dom';

import NavigationProvider from './NavigationProvider';
import NavBar from './NavBar';

import Footer from './Footer';

const NavigationWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <NavigationProvider>
      <NavBar />
      {children}
      {location.pathname !== "/" && <Footer />}
    </NavigationProvider>
  );
};

export default NavigationWrapper;
