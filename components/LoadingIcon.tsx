import React, { useState } from "react";
import { Animated, Easing, Image, StyleSheet } from "react-native"

export function LoadingIcon() {
  const [rotateAnimation, _] = useState(new Animated.Value(0));

  Animated.loop(
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const spin = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    width: 200,
    height: 200,
    transform: [
      {
        rotate: spin,
      },
    ],
  };

  return (
    <Animated.View style={animatedStyle}>
      <Image style={styles.spin} source={require('../assets/ModernAssets/wheel.png')} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  spin: {
    width: 200,
    height: 200,
    transform: [{
      rotate: '90deg',
    }]
  },
})