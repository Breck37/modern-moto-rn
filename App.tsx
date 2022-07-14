import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Dashboard, Team } from './screens';
import { PRIMARY } from './constants';
import LinksScreen from './screens/LinksScreen';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        paddingTop: 8,
        paddingBottom: 8,
      },
      tabBarLabelStyle: {
        paddingTop: 4,
      },
      tabBarActiveTintColor: PRIMARY
    }}>
      <BottomTabs.Screen name="Dashboard" options={{ title: 'Dashboard', tabBarIcon: ({ color, size }) => <AntDesign name="dashboard" size={size} color={color} /> }} component={Dashboard} />
      <BottomTabs.Screen name="Team" options={{ title: 'Team', tabBarIcon: ({ color, size }) => <AntDesign name="team" size={size} color={color} /> }} component={Team} />
      {process.env.ADMIN && <BottomTabs.Screen name="Storybook" options={{ title: 'Stories', tabBarIcon: ({ color, size }) => <AntDesign name="book" size={size} color={color} /> }} component={LinksScreen} />}
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Home" component={TabNavigator} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
