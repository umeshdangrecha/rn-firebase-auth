import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREENS} from '../../constants';
import {HomeScreen, ShopScreen} from '../../screens';

const Root = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Root.Navigator initialRouteName={SCREENS.HOME}>
      <Root.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Root.Screen name={SCREENS.SHOP} component={ShopScreen} />
    </Root.Navigator>
  );
};

export default RootNavigator;
