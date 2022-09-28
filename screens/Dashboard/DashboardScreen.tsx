import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BLUE, PRIMARY } from '../../constants'
import { Box, LoadingIcon, Page } from '../../components';
import { StatusBar } from "expo-status-bar";
import { useRaceSession, useLiveEvent } from '../../hooks';

export function DashboardScreen() {
  const { status } = useRaceSession();
  const { event } = useLiveEvent({ status })
  console.log({ status, event })
  // console.log('3', { topThree })



  return (
    <>
      <StatusBar style="light" />
      <LinearGradient style={styles.container} colors={[BLUE, PRIMARY]} start={[1, 0.1]}>
        <Page>
          <View>
            <LoadingIcon />
            <Box>
              <View>
                <Text>Hello</Text>
              </View>
            </Box>
          </View>
        </Page>
      </LinearGradient>
    </>
  )
}

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24
  },

})