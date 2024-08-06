import { useOAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import StreamVoiceProgress from '~/src/components/Icons/StreamVoiceProgress';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const googleOAuth = useOAuth({
    strategy: 'oauth_google',
  });
  async function onGoogleSignIn() {
    try {
      setIsLoading(true);
      const redirectUrl = Linking.createURL('/');
      const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl });

      if (oAuthFlow.authSessionResult?.type === 'success') {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({
            session: oAuthFlow.createdSessionId,
          });
        } else {
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync();

    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View className="flex items-center justify-center w-48 h-48 mb-12">
        <StreamVoiceProgress />
      </View>
      <TouchableOpacity
        className="bg-blue-700 p-4 rounded-full"
        onPress={onGoogleSignIn}
        disabled={isLoading}
        activeOpacity={0.7}>
        <View className="flex flex-row gap-2 justify-center items-center ">
          <Ionicons name="logo-google" size={28} color="white" />
          <Text className="text-white text-base font-InterMedium">Sign in with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
