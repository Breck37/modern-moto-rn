import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export const Page = ({ children }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View>{children}</View>
    </SafeAreaView>
  )
}

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})