import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

import {HomeScreen} from '../screens/home';
import {LoansTabScreen} from '../screens/loans-tab';
import {ProfileScreen} from '../screens/profile';
import {SearchScreen} from '../screens/search';

const Tab = createBottomTabNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
    	<Tab.Navigator
			screenOptions={() => ({
				headerShown: false,
				tabBarActiveTintColor: 'tomato',
				tabBarInactiveTintColor: 'gray',
			  })}>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Search" component={SearchScreen} />
			<Tab.Screen name="Profile" component={ProfileScreen} />
			<Tab.Screen name="LoansTab" component={LoansTabScreen} />
		</Tab.Navigator>
    </NavigationContainer>
  );
}