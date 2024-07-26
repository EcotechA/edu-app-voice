import { useAuth } from '@clerk/clerk-expo';
import { Slot, router } from 'expo-router';
import { useEffect } from 'react';
import { getClerkInstance } from '@clerk/clerk-expo';

export default function InitialLayoout() {
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    if (isSignedIn) {
      // print token
      const clerk = getClerkInstance().session?.getToken().then((token) => {
        console.log(token);
      });

      router.replace('(private)');
    } else {
      router.replace('(public)');
    }
  }, [isSignedIn]);

  return isLoaded ? <Slot /> : null;
}
