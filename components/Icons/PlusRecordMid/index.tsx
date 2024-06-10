import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import { theme } from '~/theme';

interface Props {
  size?: number;
  color?: string;
}

export default function PlusRecordMid(props: Props) {
  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        width: 66,
        height: 66,
        borderRadius: 33,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Feather name="plus" size={30} color={theme.colors.backgroundLight} />
    </View>
  );
}
