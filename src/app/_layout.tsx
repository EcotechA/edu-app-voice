import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo';
import { QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import InitialLayoout from './initialLayout';
import { useLogin } from '../hooks/useLogin';

import { queryClient } from '~/api/queryClient';

SplashScreen.preventAutoHideAsync();
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

export default function RootLayout() {
  const login = useLogin();

  if (!publishableKey) {
    throw new Error(
      'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env'
    );
  }
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
      <ClerkProvider publishableKey={publishableKey} >
        <GestureHandlerRootView
          style={{ flex: 1, backgroundColor: '#ffffff' }}
          onLayout={onLayoutRootView}>
          <ClerkLoaded>
            <InitialLayoout />
          </ClerkLoaded>
        </GestureHandlerRootView>
      </ClerkProvider>
    </QueryClientProvider>
  );
}
