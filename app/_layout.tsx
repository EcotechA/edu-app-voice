import { useFonts } from 'expo-font';
import { Stack, SplashScreen } from 'expo-router';
import { useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import WelcomeScreen from './welcome/welcome';

import Onboarding from '~/components/Onboarding';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  const [fonssLoaded, fontsError] = useFonts({
    'Poppins-SemiBold': require('../theme/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('../theme/fonts/Poppins/Poppins-Regular.ttf'),
    'Inter-Bold': require('../theme/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../theme/fonts/Inter/Inter-Regular.ttf'),
    'Inter-Medium': require('../theme/fonts/Inter/Inter-Medium.ttf'),
    'Inter-SemiBold': require('../theme/fonts/Inter/Inter-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(() => {
    if (fonssLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fonssLoaded, fontsError]);

  if (!fonssLoaded || fontsError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {/* <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ title: 'Modal', presentation: 'modal' }} />
      </Stack> */}
      <WelcomeScreen />
    </GestureHandlerRootView>
  );
}
