import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import { styles } from './style';
import MenuRightAlt from '../Icons/MenuRightAlt';

import { theme } from '~/theme';

export default function HeaderLeft() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      style={styles.container}>
      <MenuRightAlt style={styles.icon} fill={theme.colors.textLight} />
    </TouchableOpacity>
  );
}
