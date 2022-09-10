import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BLUE, MOTO_LIVE_URL, PRIMARY } from '../../constants'
import { get } from '../../utils';
import { Page } from '../../components';
import { StatusBar } from "expo-status-bar";
import { mapEvent } from '../../api/map-event';

export function DashboardScreen() {
  useEffect(() => {
    const request = async () => {
      const event = await get(MOTO_LIVE_URL, mapEvent);
      console.log({ event })
    };
    request()
    // const requestInterval = setInterval(request, 20000);

    // return () => {
    // clearInterval(requestInterval);
    // }
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient style={styles.container} colors={[BLUE, PRIMARY]} start={[1, 0.1]}>
        <Page>
          <View>
            <Text>DashboardScreen</Text>
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
  }
})