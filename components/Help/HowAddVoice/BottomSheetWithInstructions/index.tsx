import { Feather } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet/';
import { forwardRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import 'nativewind';

import BubbleNumber from '~/components/BubbleNumber';
import StreamVoiceProgress from '~/components/Icons/StreamVoiceProgress';

interface BottomSheetWithInstructionsProps {
  onClose: () => void;
}

export const BottomSheetWithInstructions = forwardRef<
  BottomSheet,
  BottomSheetWithInstructionsProps
>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={-1}
      enablePanDownToClose
      snapPoints={['90%']}
      handleComponent={() => null}>
      <View className="items-center justify-center h-full w-full rounded-t-lg px-5 py-5 border border-TextGray999Light border-b-0">
        <TouchableOpacity className="absolute top-2.5 right-2.5 z-10" onPress={onClose}>
          <Feather name="x" size={24} color="text-TextGray999Light" />
        </TouchableOpacity>
        <Text className="text-3xl font-InterBold justify-center text-center w-4/5">
          How to add a voice memo
        </Text>
        <StreamVoiceProgress width={120} height={180} beforeMainLineColor="text-TextGray999Light" />
        <View className="mr-10 w-[85%] gap-3.75 justify-center text-center p-2.5">
          {instructions.map((instruction, index) => (
            <View key={index} className="flex-row items-center gap-2.5">
              <BubbleNumber number={index + 1} />
              <Text className="text-xl font-InterMedium text-textLight">{instruction}</Text>
            </View>
          ))}
        </View>
      </View>
    </BottomSheet>
  );
});

const instructions = [
  'Open Voice Memos app.',
  'Select a record and tap ‘Share’',
  'Scroll through app list and tap ‘more’',
  'Tap ‘Edit’ select Transcribe and tap ‘Add’',
  'Return to the app list and select Transcribe',
];
