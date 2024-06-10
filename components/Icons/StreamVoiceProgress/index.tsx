import * as React from 'react';
import Svg, { Rect, Circle, SvgProps } from 'react-native-svg';

function StreamVoiceProgress(props: SvgProps) {
  return (
    <Svg width={50} height={50} viewBox="0 0 50 50" fill="none" {...props}>
      <Rect x={14.5833} y={8.33334} width={1.04167} height={33.3333} rx={0.520833} fill="#FC3D39" />
      <Rect x={12.5} y={15.625} width={1.04167} height={18.75} rx={0.520833} fill="#FC3D39" />
      <Rect x={10.4167} y={18.75} width={1.04167} height={12.5} rx={0.520833} fill="#FC3D39" />
      <Rect x={8.33331} y={22.9167} width={1.04167} height={4.16667} rx={0.520833} fill="#FC3D39" />
      <Rect x={6.25} y={23.9583} width={1.04167} height={2.08333} rx={0.520833} fill="#FC3D39" />
      <Rect x={4.16669} y={23.9583} width={1.04167} height={2.08333} rx={0.520833} fill="#FC3D39" />
      <Rect x={2.08331} y={22.9167} width={1.04167} height={4.16667} rx={0.520833} fill="#FC3D39" />
      <Rect y={23.9583} width={1.04167} height={2.08333} rx={0.520833} fill="#FC3D39" />
      <Rect x={16.6667} y={12.5} width={1.04167} height={25} rx={0.520833} fill="#FC3D39" />
      <Rect x={18.75} y={11.4583} width={1.04167} height={27.0833} rx={0.520833} fill="#FC3D39" />
      <Rect x={20.8333} y={18.75} width={1.04167} height={12.5} rx={0.520833} fill="#FC3D39" />
      <Rect x={22.9167} y={19.7917} width={1.04167} height={10.4167} rx={0.520833} fill="#FC3D39" />
      <Rect x={28.125} y={18.75} width={1.04167} height={12.5} rx={0.520833} fill="#fff" />
      <Rect x={30.2083} y={20.8333} width={1.04167} height={8.33333} rx={0.520833} fill="#FEFEFE" />
      <Rect x={32.2917} y={21.875} width={1.04167} height={6.25} rx={0.520833} fill="#FEFEFE" />
      <Rect x={34.375} y={22.9167} width={1.04167} height={4.16667} rx={0.520833} fill="#FEFEFE" />
      <Rect x={36.4583} y={22.9167} width={1.04167} height={4.16667} rx={0.520833} fill="#FEFEFE" />
      <Rect x={38.5417} y={23.9583} width={1.04167} height={2.08333} rx={0.520833} fill="#FEFEFE" />
      <Rect x={40.625} y={23.9583} width={1.04167} height={2.08333} rx={0.520833} fill="#FEFEFE" />
      <Rect x={42.7083} y={22.9167} width={1.04167} height={4.16667} rx={0.520833} fill="#FEFEFE" />
      <Rect x={44.7917} y={23.9583} width={1.04167} height={2.08333} rx={0.520833} fill="#FEFEFE" />
      <Rect x={46.875} y={23.9583} width={1.04167} height={2.08333} rx={0.520833} fill="#FEFEFE" />
      <Rect x={48.9583} y={23.9583} width={1.04167} height={2.08333} rx={0.520833} fill="#FEFEFE" />
      <Rect x={25} y={5.20834} width={2.08333} height={39.5833} rx={1.04167} fill="#2274F0" />
      <Circle cx={26.0416} cy={5.20833} r={2.08333} fill="#2274F0" />
      <Circle cx={26.0416} cy={44.7917} r={2.08333} fill="#2274F0" />
    </Svg>
  );
}

export default StreamVoiceProgress;
