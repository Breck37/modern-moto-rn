import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Page } from '../../components';

export const ResultsScreen = () => {
  return (
    <Page>
      <View style={styles.container}>
        <Text>ResultsScreen</Text>
      </View>
    </Page>
  )
}

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})