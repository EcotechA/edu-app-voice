import StreamVoice from '../Icons/StreamVoice';

import { theme } from '~/theme';

export default function HeaderRight() {
  return (
    <StreamVoice
      width={116.8}
      height={81}
      fillG={theme.colors.primary}
      fillClipPath={theme.colors.primary}
    />
  );
}
