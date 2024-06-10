import { StyleSheet } from 'react-native';

import { theme } from '~/theme';
export const styles = StyleSheet.create({
  bubble: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  text: {
    color: '#fff',
    fontSize: theme.font.fontSize['2xl'],
    fontFamily: theme.font.fontFamily.InterMedium,
  },
});
