import { StyleSheet } from 'react-native';

import { theme } from '~/theme';

export const styles = StyleSheet.create({
  title: {
    fontFamily: theme.font.fontFamily.InterBold,
    fontSize: theme.font.fontSize['3xl'],
    color: theme.colors.textLight,
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: theme.font.fontSize.xl,
    color: theme.colors.TextGray333Light,
    fontFamily: theme.font.fontFamily.InterMedium,
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.breakpoints.sm,
    gap: 40,
    marginTop: 110,
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 24,
  },
  image: {
    width: 250,
    height: 250,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
