import { StyleSheet } from 'react-native';

import { theme } from '~/theme';

export const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: theme.colors.TextGray999Light,
    borderRadius: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: theme.font.fontSize.base,
    fontFamily: theme.font.fontFamily.InterBold,
    marginBottom: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  timeText: {
    marginLeft: 5,
    fontSize: theme.font.fontSize.sm,
    color: theme.colors.TextGray999Light,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    marginLeft: 5,
    fontSize: theme.font.fontSize.sm,
    color: theme.colors.TextGray999Light,
  },
  bookmark: {
    marginLeft: 'auto',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 15,
  },
});
