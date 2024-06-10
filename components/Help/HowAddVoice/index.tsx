import { Text, TouchableOpacity } from 'react-native';

import { styles } from './style';

import AddVoice from '~/components/Icons/AddVoice';
import StreamVoiceProgress from '~/components/Icons/StreamVoiceProgress';

interface HowAddVoiceProps {
  handleBottomSheetOpen: () => void;
}

export default function HowAddVoice({ handleBottomSheetOpen }: HowAddVoiceProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9} onPress={handleBottomSheetOpen}>
      <AddVoice
        style={{
          width: 25,
          height: 25,
          marginLeft: 1,
        }}
      />
      <Text style={styles.text}>How to add voice memos to Transcribe</Text>
      <StreamVoiceProgress
        style={{
          width: 50,
          height: 50,
          marginLeft: 1,
        }}
      />
    </TouchableOpacity>
  );
}
