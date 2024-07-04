import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

import BubbleNumber from '~/components/BubbleNumber';
import StreamVoiceProgress from '~/components/Icons/StreamVoiceProgress';

const instructions = [
  'Open Voice Memos app.',
  'Select a record and tap ‘Share’',
  'Scroll through app list and tap ‘more’',
  'Tap ‘Edit’ select Transcribe and tap ‘Add’',
  'Return to the app list and select Transcribe',
];

interface InstructionItemProps {
  onClose: () => void;
}

export default function InstructionItem({ onClose }: InstructionItemProps) {
  return (
    <>
      <View className="items-center justify-center h-full w-full rounded-t-lg px-4 py-4 border border-TextGray999Light border-b-0">
        <TouchableOpacity className="absolute top-2 right-2 z-10" onPress={onClose}>
          <Feather name="x" size={24} color="text-TextGray999Light" />
        </TouchableOpacity>
        <Text className="text-3xl font-InterBold justify-center text-center w-4/5">
          How to add a voice memo
        </Text>
        <StreamVoiceProgress width={120} height={180} />
        <View className="mr-10 w-[85%] justify-center text-center p-2">
          {instructions.map((instruction, index) => (
            <View key={index} className="flex-row items-center gap-2 my-1">
              <BubbleNumber number={index + 1} />
              <Text className="text-xl font-InterMedium text-textLight">{instruction}</Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
}
