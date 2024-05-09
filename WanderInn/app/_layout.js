import { Slot, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { SplashScreen } from "expo-router";
import CustomSplashScreen from "@/components/splash/Splash";

export default function RootLayout() {

  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {

    // setTimeout(() => {
    //   setIsAppReady(true);
    // }, 5000);

    const hideSplashScreen = setTimeout(() => {
      SplashScreen.hideAsync();
    }, 3000);

    return () => {
      clearTimeout(hideSplashScreen);
    };
  });

  if (!isAppReady) {
    return (
      <CustomSplashScreen />
    );
  }

  return (
    <Slot />
  );
}
