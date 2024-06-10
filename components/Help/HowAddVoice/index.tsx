import { Text, TouchableOpacity } from 'react-native';

import { styles } from './style';

import AddVoice from '~/components/Icons/AddVoice';
import StreamVoiceProgress from '~/components/Icons/StreamVoiceProgress';

export default function HowAddVoice() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.90}>
      <AddVoice
        style={{
          width: 25,
          height: 25,
          marginLeft: 1,
        }}
      />
      <Text style={styles.text}>How to add voice memos to Transcribe</Text>
      <StreamVoiceProgress />
    </TouchableOpacity>
  );
}
