import React from 'react';
import { View, Text } from 'react-native';

interface BubbleNumberProps {
  number: number;
}

const BubbleNumber: React.FC<BubbleNumberProps> = ({ number }) => {
  return (
    <View className="w-10 h-10 bg-primary justify-center items-center rounded-full">
      <Text className="text-2xl text-white">{number}</Text>
    </View>
  );
};

export default BubbleNumber;
