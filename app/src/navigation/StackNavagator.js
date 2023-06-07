import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { styled } from 'nativewind';
import { Popins } from '../utils/popins';
import CircularProgress from 'react-native-circular-progress-indicator';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/HomeScreen';
import TransactionScreen from '../screens/TransactionScreen';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';

const TextTw = styled(Text);
const ViewTw = styled(View);
const TouchableOpacityTw = styled(TouchableOpacity);
const ImageTw = styled(Image);
const LinearGradientTw = styled(LinearGradient);
const ScrollviewTw = styled(ScrollView);
const Stack = createStackNavigator();


const StackNavagator = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator initialRouteName='HomeScreen' >
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="TransactionScreen" component={TransactionScreen} options={{
                header: (({ navigation }) => {

                    const moveScreen = (params) => {
                        navigation.goBack();
                    }

                    return (
                        <ViewTw className='h-14 flex-row items-center border-b border-blue-950' style={{ backgroundColor: '#0f172a' }}>
                            <TouchableOpacityTw className='grow-0 p-4' onPress={() => moveScreen(0)}>
                                <TextTw className=' text-gray-200  text-base' style={{ fontFamily: Popins[600] }}>Hủy</TextTw>
                            </TouchableOpacityTw>
                            <TextTw className='grow text-center text-gray-200 text-base' style={{ fontFamily: Popins[600] }}>Thêm giao dịch</TextTw>
                            <TouchableOpacityTw className='grow-0 p-4' onPress={() => moveScreen(0)}>
                                <TextTw className=' text-gray-900  text-base' style={{ fontFamily: Popins[600] }}>Hủy</TextTw>
                            </TouchableOpacityTw>
                        </ViewTw>
                    )
                }),
                transitionSpec: {
                    open: { animation: 'timing', config: { duration: 300 } },
                    close: { animation: 'timing', config: { duration: 300 } },
                },
                cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
            }} />
        </Stack.Navigator>
    )
}

export default StackNavagator

const styles = StyleSheet.create({

})  