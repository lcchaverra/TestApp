import * as React from 'react';
import Home from './src/Screens/Home';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './src/Screens/Search';
import Account from './src/Screens/Account';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home' 
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                  if (route.name === 'Home') {
                    iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
                  } else if (route.name === 'Search') {
                    iconName = focused ? 'ios-search' : 'ios-search-outline';
                  } else if (route.name === 'Account') {
                    iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                  }
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: '#0284c7',
                  tabBarInactiveTintColor: 'gray',
                })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}