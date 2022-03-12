/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

// React navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// Screens
import Wallets from './src/pages/Wallets';
import Portfolio from './src/pages/Portfolio';
import Invest from './src/pages/Invest';
import Contents from './src/pages/Contents';
import Profile from './src/pages/Profile';

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              // Set icons for each screen
              let iconName;
              let colorIcon = focused ? '#FFF' : '#8F8F8F';
              if (route.name === 'Carteiras') {
                iconName = 'wallet-outline';
              } else if (route.name === 'Portfolio') {
                iconName = 'bar-chart-outline';
              } else if (route.name === 'Investir') {
                iconName = 'logo-usd';
              } else if (route.name === 'Conteúdos') {
                iconName = 'document-text-outline';
              } else if (route.name === 'Perfil') {
                iconName = 'person-circle-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={colorIcon} />;
            },
            headerStyle: {
              backgroundColor: '#121212',
            },
            headerTitleStyle: {
              color: '#FFF',
            },
            headerRight: () => (
              <View style={{flexDirection: 'row', marginRight: 15}}>
                <Ionicons
                  name="cart"
                  color="#FFF"
                  size={25}
                  style={{marginRight: 15}}
                />
                <Ionicons name="notifications" color="#FFF" size={25} />
              </View>
            ),
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            tabBarActiveTintColor: '#FFF',
            tabBarInactiveTintColor: '#8F8F8F',
            tabBarStyle: {
              backgroundColor: '#1D1E1E',
            },
          })}>
          <Tab.Screen name="Carteiras" component={Wallets} />
          <Tab.Screen name="Portfolio" component={Portfolio} />
          <Tab.Screen name="Investir" component={Invest} />
          <Tab.Screen name="Conteúdos" component={Contents} />
          <Tab.Screen name="Perfil" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
