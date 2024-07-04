import { Feather, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';

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
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <View className="px-2 py-3 border border-gray-300 rounded-lg mb-2">
      <View className="flex-row items-center">
        <Feather name="play-circle" size={45} color={theme.colors.TextGray999Light} />
        <View className="flex-1 ml-2">
          <View className="flex-row items-baseline justify-between">
            <Text className="text-base font-InterBold mb-2">{recording.title}</Text>
            {recording.favorite ? (
              <FontAwesome
                name="bookmark"
                size={20}
                color={theme.colors.borderDark}
                className="ml-auto"
              />
            ) : (
              <FontAwesome
                name="bookmark-o"
                size={20}
                color={theme.colors.TextGray999Light}
                className="ml-auto"
              />
            )}
          </View>
          <View className="flex-row items-baseline gap-4">
            <View className="flex-row items-center mb-2">
              <Feather name="clock" size={14} color={theme.colors.TextGray999Light} />
              <Text className="ml-2 text-sm text-gray-300">
                {formattedTime(recording.duration)}
              </Text>
            </View>
            <View className="flex-row items-center">
              <Feather name="calendar" size={14} color={theme.colors.TextGray999Light} />
              <Text className="ml-2 text-sm text-gray-300">{formattedDate}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default RecordItem;
