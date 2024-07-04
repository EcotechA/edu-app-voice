import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import 'nativewind';

import AddVoice from '~/components/Icons/AddVoice';
import StreamVoiceProgress from '~/components/Icons/StreamVoiceProgress';

interface HowAddVoiceProps {
  handleBottomSheetOpen: () => void;
}

export default function HowAddVoice({ handleBottomSheetOpen }: HowAddVoiceProps) {
  return (
    <TouchableOpacity
      className="justify-between items-center flex-row h-20 rounded-lg px-4  bg-TextGray333Light"
      activeOpacity={0.8}
      onPress={handleBottomSheetOpen}>
      <AddVoice className="w-6 h-6" />
      <Text className="text-base text-backgroundLight w-[60%]">
        How to add voice memos to Transcribe
      </Text>
      <StreamVoiceProgress className="w-10 h-10 mx-4" />
    </TouchableOpacity>
  );
}
