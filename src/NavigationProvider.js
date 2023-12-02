import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationContext from './NavigationContext';

const NavigationProvider = ({ children }) => {
  const navigate = useNavigate();

  return (
    <NavigationContext.Provider value={{ navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
