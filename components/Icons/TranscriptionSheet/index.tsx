import * as React from 'react';
import Svg, { Mask, Path, G, SvgProps } from 'react-native-svg';

interface Props extends SvgProps {
  strokeColor?: string;
  fillColor?: string;
}

function TranscriptionSheet(props: Props) {
  return (
    <Svg viewBox="0 0 30 30" fill="none" {...props}>
      <Mask id="a" maskUnits="userSpaceOnUse" x={0} y={0} width={30} height={30}>
        <Path d="M0 0h30v30H0V0z" fill={props.fillColor ? props.fillColor : '#fff'} />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M28.828 20.762h-4.55a3.516 3.516 0 00-3.516 3.515v4.551m8.066-8.066a5.564 5.564 0 01-1.63 3.934l-2.502 2.502a5.564 5.564 0 01-3.934 1.63m8.066-8.066V7.04a5.869 5.869 0 00-5.868-5.868H7.04A5.868 5.868 0 001.172 7.04v15.92a5.868 5.868 0 005.868 5.868h13.722M8.086 21.914H15M8.086 8.086h13.828M8.086 15h13.828"
          stroke={props.strokeColor ? props.strokeColor : '#000'}
          strokeWidth={1.95}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}

export default TranscriptionSheet;
