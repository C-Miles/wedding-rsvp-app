import { createContext } from 'react';

const NavigationContext = createContext({
  navigate: (path) => {},
});

export default NavigationContext;
