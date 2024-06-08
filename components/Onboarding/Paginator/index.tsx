import { View } from 'react-native';

import { styles } from './style';
import { OnboardingItemTypes } from '../OnBoardingItem/item';

import { theme } from '~/theme';

interface PaginatorProps {
  data: OnboardingItemTypes[];
  currentSlide: number;
}

export default function Paginator({ data, currentSlide }: PaginatorProps) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === currentSlide ? 'white' : theme.colors.TextGray999Light },
            ]}
          />
        ))}
      </View>
    </View>
  );
}
