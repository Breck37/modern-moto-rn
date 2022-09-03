import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BLUE, MOTO_LIVE_URL, PRIMARY, sx } from '../../constants'
import { fetchAPIData } from '../../utils';
import { Page } from '../../components';
import { StatusBar } from "expo-status-bar";

export function DashboardScreen() {
  useEffect(() => {
    const request = async () => {
      const data = await fetchAPIData(MOTO_LIVE_URL);
      console.log({ data })
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