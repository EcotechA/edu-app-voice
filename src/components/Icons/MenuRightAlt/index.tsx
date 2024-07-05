import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface Props extends SvgProps {
  fill?: string;
}
function MenuRightAlt(props: Props) {
  return (
    <Svg viewBox="0 0 32 23" {...props} className="w-8 h-8">
      <Path
        d="M1.575 3.775H22.05a1.575 1.575 0 000-3.15H1.575a1.575 1.575 0 100 3.15zM0 11.65a1.575 1.575 0 011.575-1.575h28.35a1.575 1.575 0 110 3.15H1.575A1.575 1.575 0 010 11.65zm0 9.45a1.575 1.575 0 011.575-1.575H15.75a1.575 1.575 0 110 3.15H1.575A1.575 1.575 0 010 21.1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default MenuRightAlt;
