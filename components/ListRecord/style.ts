import { StyleSheet } from 'react-native';

import { theme } from '~/theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: theme.colors.backgroundLight,
    width: '100%',
  },
  list: {
    width: '100%',
    height: '100%',
    gap: 15,
  },
});
