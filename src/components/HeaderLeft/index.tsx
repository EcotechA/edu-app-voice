import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import MenuRightAlt from '../Icons/MenuRightAlt';

export default function HeaderLeft() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      className="ml-4">
      <MenuRightAlt />
    </TouchableOpacity>
  );
}
