import { useWindowDimensions, Image, View, Text } from 'react-native';

import { OnboardingItemTypes } from './item';

import { Button } from '~/src/components/Button/Button';

interface OnboardingItemProps {
  item: OnboardingItemTypes;
  next: () => void;
}
export default function OnboardingItem({ item, next }: OnboardingItemProps) {
  const { width } = useWindowDimensions();
  return (
    <View className="flex-1 justify-center items-center" style={[{ width }]}>
      <Image source={item.image} className="max-w-64 max-h-64 object-cover-fill justify-center" />
      <View className=" w-full justify-center items-center mt-6 gap-1">
        <Text className="font-InterBold text-3xl text-textLight">{item.title}</Text>
        <Text className="font-InterMedium text-xl text-center">{item.subTitle}</Text>
        <Button
          className="w-40 h-12 rounded-full"
          title={item.buttonTitle}
          textColor="backgroundLight"
          onPress={() => {
            next();
          }}
        />
      </View>
    </View>
  );
}
