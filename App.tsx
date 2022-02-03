import React, { FC } from 'react';
import { Provider } from 'react-redux';
import MainNavigator from './navigation/MainNavigator';
import store from './store'


const App: FC = () => {

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};



export default App;
