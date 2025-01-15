import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import CustomSplashScreen from './src/components/Splash/Splash';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import Router from './src/routes/Router';

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAppReady(true);
    }, 2000);
  }, []);

  if (!isAppReady) {
    return <CustomSplashScreen />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
        <Toast />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
