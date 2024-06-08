import React from 'react';
import { SafeAreaView, ViewProps } from 'react-native';

import { styles } from './style';

interface ContainerProps extends ViewProps {
  children: React.ReactNode;
}

export function Container({ children, ...props }: ContainerProps) {
  return (
    <SafeAreaView style={[styles.container]} {...props}>
      {children}
    </SafeAreaView>
  );
}
