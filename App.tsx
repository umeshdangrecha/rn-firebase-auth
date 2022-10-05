import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {RootNavigator} from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
