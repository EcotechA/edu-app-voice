import { useAuth } from '@clerk/clerk-expo';
import { Slot, router } from 'expo-router';
import { useEffect } from 'react';
export default function InitialLayoout() {
  const { isSignedIn, isLoaded, getToken } = useAuth();

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    if (isSignedIn) {
      console.log(getToken().then((token) => console.log(token)));
      router.replace('(private)');
    } else {
      router.replace('(public)');
    }
  }, [isSignedIn]);

  return isLoaded ? <Slot /> : null;
}
