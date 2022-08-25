import React from 'react';
import { Provider } from 'react-redux';

import { Init } from './src/init';
import { store } from './src/store'

const App = () => {
  return (
	<Provider store={store}>
		<Init />
	</Provider>
  );
};

export default App;
