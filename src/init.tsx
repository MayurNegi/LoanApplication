import React from 'react';
import FlashMessage from 'react-native-flash-message';

import { RootNavigator } from './navigators';

export const Init = () => {
	return (
		<>
			<RootNavigator />
			<FlashMessage position="top" />
		</>
	);
}