import { StyleSheet, View } from "react-native";

interface BoxProps {
  children: JSX.Element;
  radius?: number;
  backgroundColor?: string;
  shadowColor?: string;
  shadowOffset?: {
    width: number;
    height: number;
  };
  shadowOpacity?: number;
  shadowRadius?: number;

  elevation?: number;
}

export function Box({
  children,
  radius,
  backgroundColor = '#fff',
  shadowColor = "#000",
  shadowOffset = {
    width: 0,
    height: 2,
  },
  shadowOpacity = 0.25,
  shadowRadius = 3.84,
  elevation = 5,
}: BoxProps) {
  return (
    <View style={[styles.container, {
      borderRadius: radius ?? 4,
      backgroundColor,
      shadowColor,
      shadowOffset,
      shadowOpacity,
      shadowRadius,
      elevation,
    }]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginHorizontal: 16
  }
})