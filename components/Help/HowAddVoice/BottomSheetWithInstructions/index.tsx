import { Feather } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet/';
import { forwardRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './style';

import BubbleNumber from '~/components/BubbleNumber';
import StreamVoiceProgress from '~/components/Icons/StreamVoiceProgress';
import { theme } from '~/theme';

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
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Feather name="x" size={24} color={theme.colors.TextGray999Light} />
        </TouchableOpacity>
        <Text style={styles.title}>How to add a voice memo</Text>
        <StreamVoiceProgress
          width={120}
          height={180}
          beforeMainLineColor={theme.colors.TextGray999Light}
        />
        <View style={styles.instructionsContainer}>
          {instructions.map((instruction, index) => (
            <View key={index} style={styles.instruction}>
              <BubbleNumber number={index + 1} />
              <Text style={styles.instructionText}>{instruction}</Text>
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
