import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import { theme } from '~/theme';

interface Props {
  size?: number;
  color?: string;
}

export default function PlusRecordMid(props: Props) {
  return (
    <View className="w-16 h-16 mb-4 bg-primary rounded-full flex justify-center items-center">
      <Feather name="plus" size={30} color={theme.colors.backgroundLight} />
    </View>
  );
}
