import { Feather, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';

import { Recording } from '~/interfaces/Recording';
import { theme } from '~/theme';

interface RecordItemProps {
  recording: Recording;
}

function RecordItem({ recording }: RecordItemProps) {
  const formattedDate = new Date(recording.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = (timestamp: number) => {
    // Format the time to be displayed in the format HH:MM:SS
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <View style={styles.itemContainer}>
      <View style={styles.header}>
        <Feather name="play-circle" size={45} color={theme.colors.TextGray999Light} />
        <View style={styles.headerText}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{recording.title}</Text>
            {recording.favorite ? (
              <FontAwesome
                name="bookmark"
                size={20}
                color={theme.colors.borderDark}
                style={styles.bookmark}
              />
            ) : (
              <FontAwesome
                name="bookmark-o"
                size={20}
                color={theme.colors.TextGray999Light}
                style={styles.bookmark}
              />
            )}
          </View>
          <View style={styles.details}>
            <View style={styles.timeContainer}>
              <Feather name="clock" size={14} color={theme.colors.TextGray999Light} />
              <Text style={styles.timeText}>{formattedTime(recording.duration)}</Text>
            </View>
            <View style={styles.dateContainer}>
              <Feather name="calendar" size={14} color={theme.colors.TextGray999Light} />
              <Text style={styles.dateText}>{formattedDate}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default RecordItem;
