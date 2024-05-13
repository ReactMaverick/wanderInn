import { Slot, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { SplashScreen } from "expo-router";
import CustomSplashScreen from "@/components/splash/Splash";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout() {

  const [isAppReady, setIsAppReady] = useState(false);

  const [loaded] = useFonts({
    LatoBlack: require('../assets/fonts/Lato-Black.ttf'),
    LatoBold: require('../assets/fonts/Lato-Bold.ttf'),
    LatoRegular: require('../assets/fonts/Lato-Regular.ttf'),
    LatoLight: require('../assets/fonts/Lato-Light.ttf'),
    LatoThin: require('../assets/fonts/Lato-Thin.ttf'),
  });

  useEffect(() => {

    setTimeout(() => {
      setIsAppReady(true);
    }, 2000);

  });

  if (!isAppReady || !loaded) {
    return (
      <CustomSplashScreen />
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Slot />
      </PersistGate>
    </Provider>
  );
}
