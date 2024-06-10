import { View } from 'react-native';

import { styles } from './style';

interface TabIconProps {
  focused: boolean;
  color?: string;
  size?: number;
  children: React.ReactNode;
}

export default function TabIcon({ focused, color, size, children }: TabIconProps) {
  return (
    <View style={styles.container}>
      {children}
      {focused && <View style={styles.indicator} />}
    </View>
  );
}
