import React from 'react';
import { View, FlatList } from 'react-native';

import RecordItem from './RecordItem';

import { Recording } from '~/src/interfaces/Recording';
const recordings: Recording[] = [
  {
    id: '1',
    title: 'Meeting with Team A',
    url: 'https://example.com/recording1.mp3',
    showGroup: true,
    userId: 'user1',
    duration:
      new Date('2023-06-02T15:00:00Z').getTime() - new Date('2023-06-02T14:00:00Z').getTime(),
    favorite: true,
    createdAt: new Date('2023-06-01T12:00:00Z'),
    updatedAt: new Date('2023-06-01T12:30:00Z'),
    transcriptions: [
      {
        id: 't1',
        text: 'First transcription text.',
        recordingId: '1',
        createdAt: new Date('2023-06-01T12:05:00Z'),
        updatedAt: new Date('2023-06-01T12:06:00Z'),
      },
    ],
  },
  {
    id: '2',
    title: 'Client Call',
    url: 'https://example.com/recording2.mp3',
    showGroup: false,
    userId: 'user2',
    duration:
      new Date('2023-06-02T15:00:00Z').getTime() - new Date('2023-06-02T14:00:00Z').getTime(),
    favorite: false,
    createdAt: new Date('2023-06-02T15:00:00Z'),
    updatedAt: new Date('2023-06-02T15:45:00Z'),
    transcriptions: [
      {
        id: 't2',
        text: 'Second transcription text.',
        recordingId: '2',
        createdAt: new Date('2023-06-02T15:10:00Z'),
        updatedAt: new Date('2023-06-02T15:11:00Z'),
      },
    ],
  },
];

function ListRecords() {
  return (
    <View className="w-full py-2 px-2 bg-backgroundLight">
      <FlatList
        data={recordings}
        renderItem={({ item }) => <RecordItem recording={item} />}
        keyExtractor={(item) => item.id}
        className="w-full h-full"
      />
    </View>
  );
}

export default ListRecords;
