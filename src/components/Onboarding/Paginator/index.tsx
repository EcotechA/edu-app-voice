import { View } from 'react-native';

import { OnboardingItemTypes } from '../OnBoardingItem/item';

interface PaginatorProps {
  data: OnboardingItemTypes[];
  currentSlide: number;
}

export default function Paginator({ data, currentSlide }: PaginatorProps) {
  return (
    <View className="flex-row justify-center items-center w-full h-10">
      <View className="flex-row h-4 first-line:justify-center items-center  bg-primary rounded-full ">
        {data.map((_, index) => (
          <View
            key={index}
            className={`w-2 h-2 rounded-full mx-2 ${
              currentSlide === index ? 'bg-backgroundLight' : 'bg-slate-400'
            }`}
          />
        ))}
      </View>
    </View>
  );
}
