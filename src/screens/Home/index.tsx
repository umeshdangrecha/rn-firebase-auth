import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Button, Text, View} from 'react-native';
import {SCREENS} from '../../constants';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleOnShop = useCallback(() => {
    navigation.navigate(SCREENS.SHOP as never);
  }, [navigation]);
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Text style={{color: 'green'}}>HomeScreen</Text>
      <Button title="Shop" onPress={handleOnShop} />
    </View>
  );
};

export default HomeScreen;
