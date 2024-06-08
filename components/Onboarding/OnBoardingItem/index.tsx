import { useWindowDimensions, Image, View, Text } from 'react-native';

import { OnboardingItemTypes } from './item';
import { styles } from './style';

import { Button } from '~/components/Button/Button';
interface OnboardingItemProps {
  item: OnboardingItemTypes;
}
export default function OnboardingItem({ item }: OnboardingItemProps) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.box}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
        <Button style={styles.button} title={item.buttonTitle} textColor="backgroundLight" />
      </View>
    </View>
  );
}
