import { useRef, useState } from 'react';
import { Animated, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import OnboardingItem from './OnBoardingItem';
import Paginator from './Paginator';

import { SLIDES_WELCOME } from '~/utils/slides-welcome';

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrolllX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null as any);
  const viewableItemsChanged = useRef((item: any) => {
    setCurrentSlide(item.viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  function nextStep() {
    if (currentSlide < SLIDES_WELCOME.length - 1) {
      slideRef.current.scrollToIndex({ index: currentSlide + 1 });
    } else {
      console.log('Finalizou');
    }
  }
  return (
    <View style={{ flex: 3 }}>
      <FlatList
        data={SLIDES_WELCOME} // Provisoriamente brutado no codigo
        renderItem={({ item }) => <OnboardingItem item={item} next={nextStep} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrolllX } } }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />
      <Paginator data={SLIDES_WELCOME} currentSlide={currentSlide} />
    </View>
  );
}
