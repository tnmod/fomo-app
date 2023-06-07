/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';

import Spflashscreen from './src/screens/Spflashscreen';
import { styled } from 'nativewind'
import Home from './src/screens/HomeScreen';
import TransactionScreen from './src/screens/TransactionScreen';
import StackNavagator from './src/navigation/StackNavagator';

const Sview = styled(SafeAreaView);
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: isDarkMode ? Colors.darker : Colors.darker,
  };

  return (
    <NavigationContainer>
      <Sview className='container h-screen w-screen bg-slate-900'>
        <StatusBar
          //barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          barStyle={isDarkMode ? 'light-content' : 'light-content'}
          backgroundColor="#0f172a"
        />
        <StackNavagator />
      </Sview>
    </NavigationContainer>

  );
}

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
  color: {
    backgroundColor: "#0f172a"
  }
});

export default App;
