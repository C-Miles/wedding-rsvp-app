import React from 'react';
import NavigationProvider from './NavigationProvider';
import NavBar from './NavBar';

const NavigationWrapper = ({ children }) => {
  return (
    <NavigationProvider>
      <NavBar />
      {children}
    </NavigationProvider>
  );
};

export default NavigationWrapper;
