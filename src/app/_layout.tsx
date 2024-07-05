import { QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { SplashScreen, Slot } from 'expo-router';
import { useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { queryClient } from '~/api/queryClient';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  const [fonssLoaded, fontsError] = useFonts({
    'Poppins-SemiBold': require('../../theme/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('../../theme/fonts/Poppins/Poppins-Regular.ttf'),
    'Inter-Bold': require('../../theme/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../../theme/fonts/Inter/Inter-Regular.ttf'),
    'Inter-Medium': require('../../theme/fonts/Inter/Inter-Medium.ttf'),
    'Inter-SemiBold': require('../../theme/fonts/Inter/Inter-SemiBold.ttf'),
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
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView
        style={{ flex: 1, backgroundColor: '#ffffff' }}
        onLayout={onLayoutRootView}>
        <Slot />
        {/* <WelcomeScreen /> */}
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
