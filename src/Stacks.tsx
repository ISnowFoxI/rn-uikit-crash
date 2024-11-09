import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import First from './screens/First';
import Second from './screens/Second';

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator initialRouteName={'first'}>
      <Stack.Screen component={First} name={'first'} />
      <Stack.Screen component={Second} name={'second'} />
    </Stack.Navigator>
  );
};

export default Stacks;
