import React from 'react';
import { View } from 'react-native';

interface TabIconProps {
  focused: boolean;
  color?: string;
  size?: number;
  children: React.ReactNode;
}

export default function TabIcon({ focused, color, size, children }: TabIconProps) {
  return (
    <View className="flex-1 justify-center items-center">
      {children}
      {focused && <View className="absolute w-2 h-2 rounded-full bottom-0 bg-secondary" />}
    </View>
  );
}
