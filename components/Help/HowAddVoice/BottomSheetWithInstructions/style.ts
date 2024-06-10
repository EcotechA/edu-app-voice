import { StyleSheet } from 'react-native';

import { theme } from '~/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: theme.colors.TextGray999Light,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  title: {
    fontSize: theme.font.fontSize['3xl'],
    fontFamily: theme.font.fontFamily.InterBold,
    justifyContent: 'center',
    textAlign: 'center',
    width: '80%',
  },
  instruction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  instructionText: {
    fontSize: theme.font.fontSize.xl,
    fontFamily: theme.font.fontFamily.InterMedium,
    color: theme.colors.textLight,
  },
  instructionsContainer: {
    marginRight: 40,
    width: '85%',
    gap: 15,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
  },
});
