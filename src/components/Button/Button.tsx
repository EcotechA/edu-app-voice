import React, { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';

import { theme } from '~/theme';

type ButtonProps = {
  onPress?: TouchableOpacityProps['onPress'];
  title?: string;
  bgColor?: keyof typeof theme.colors;
  textColor?: keyof typeof theme.colors;
  borderRadius?: number;
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  (
    {
      onPress,
      title,
      bgColor = 'primary',
      textColor = 'TextGray333Light',
      borderRadius = 5,
      style,
      ...props
    },
    ref
  ) => {
    const buttonStyles = StyleSheet.create({
      button: {
        backgroundColor: theme.colors[bgColor],
        borderRadius,
        paddingVertical: 15,
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        color: theme.colors[textColor],
        fontSize: 16,
        fontWeight: 'bold',
      },
    });

    return (
      <TouchableOpacity ref={ref} style={[buttonStyles.button, style]} onPress={onPress} {...props}>
        <Text style={buttonStyles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
);
