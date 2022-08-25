import React from 'react';
import { Text, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

export const HomeScreen = () => {
	const state = useSelector((state) => state.appliedLoan);

	console.log('srtat', state);
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text>Home!</Text>
		</View>
	);
}