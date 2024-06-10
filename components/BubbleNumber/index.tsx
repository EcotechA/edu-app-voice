import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';

interface BubbleNumberProps {
  number: number;
}

const BubbleNumber: React.FC<BubbleNumberProps> = ({ number }) => {
  return (
    <View style={styles.bubble}>
      <Text style={styles.text}>{number}</Text>
    </View>
  );
};

export default BubbleNumber;
