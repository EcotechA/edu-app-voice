import { View } from 'react-native';

import Onboarding from '~/src/components/Onboarding';

export default function WelcomeScreen() {
  return (
    <>
      <View className="w-full h-full bg-backgroundLight">
        <Onboarding />
      </View>
    </>
  );
}
