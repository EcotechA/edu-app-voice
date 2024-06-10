import { StyleSheet } from 'react-native';

import { theme } from '~/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    height: 80,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: theme.colors.TextGray333Light,
  },
  text: {
    fontSize: theme.font.fontSize.base,
    color: theme.colors.backgroundLight,
    width: '60%',
  },
});
