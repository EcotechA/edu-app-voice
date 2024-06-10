import * as React from 'react';
import Svg, { G, Path, Rect, Defs, ClipPath, SvgProps } from 'react-native-svg';

interface Props extends SvgProps {
  fill?: string;
}
function AddVoice(props: Props) {
  return (
    <Svg viewBox="0 0 25 26" {...props}>
      <G clipPath="url(#clip0_49_5722)" fill="#fff">
        <Path d="M7.816 17.866c2.403 0 4.38-1.946 4.38-4.349V4.88c0-2.403-1.977-4.38-4.38-4.38-2.402 0-4.38 1.977-4.38 4.38v8.607c0 2.402 1.978 4.38 4.38 4.38zM5.262 4.88a2.57 2.57 0 012.554-2.555 2.57 2.57 0 012.555 2.555v8.637c0 1.4-1.156 2.524-2.555 2.524a2.57 2.57 0 01-2.554-2.554V4.88z" />
        <Path d="M14.72 11.966a.896.896 0 00-.912.912v.73A5.984 5.984 0 017.816 19.6a5.984 5.984 0 01-5.991-5.992v-.73a.896.896 0 00-.913-.912.896.896 0 00-.912.912v.73c0 4.015 3.011 7.3 6.904 7.756v2.311h-1.49a.896.896 0 00-.913.913c0 .517.396.912.913.912h4.805a.896.896 0 00.912-.912.896.896 0 00-.912-.913h-1.49v-2.311a7.803 7.803 0 006.904-7.756v-.73a.896.896 0 00-.913-.912z" />
        <Rect
          x={24.375}
          y={5.5}
          width={1.875}
          height={9.375}
          rx={0.9375}
          transform="rotate(90 24.375 5.5)"
        />
        <Rect width={1.875} height={9.375} rx={0.9375} transform="matrix(1 0 0 -1 18.75 11.125)" />
      </G>
      <Defs>
        <ClipPath id="clip0_49_5722">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H25V25H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default AddVoice;
