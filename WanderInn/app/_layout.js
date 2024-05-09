import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const LoginStack = () => {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          title: "Login",
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {

  // Splash Screen auto-hide delay
  useEffect(() => {
    const hideSplashScreen = setTimeout(() => {
      SplashScreen.hideAsync();
    }, 3000);

    return () => {
      clearTimeout(hideSplashScreen);
    }
  });

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="demoRoute/index"
      />
    </Stack>
  );
}
