import React from 'react';
import { SafeAreaView, ViewProps } from 'react-native';

import { styles } from './style';

interface ContainerProps extends ViewProps {
  children: React.ReactNode;
}

export function Container({ children, ...props }: ContainerProps) {
  return (
    <SafeAreaView {...props} style={[styles.container, props.style]}>
      {children}
    </SafeAreaView>
  );
}
