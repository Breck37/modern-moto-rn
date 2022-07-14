import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { BLUE, PRIMARY } from '../constants'

export default function Dashboard() {
    return (
        // <SafeAreaView style={styles.container}>
            <LinearGradient style={styles.container} colors={[PRIMARY, BLUE]} start={[0.5, 0.1]}>
                <View>
                    <Text>Dashboard</Text>
                </View>
            </LinearGradient>
        // </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24
    }
})