import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { styled } from 'nativewind';
import { Popins } from '../utils/popins';
import CircularProgress from 'react-native-circular-progress-indicator';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import TransactionScreen from '../screens/TransactionScreen';
import { useNavigation } from '@react-navigation/native';

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
        <Stack.Navigator initialRouteName='Home' >
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Transaction" component={TransactionScreen} options={{
                header: (() => {

                    const moveScreen = (params) => {
                        if (params === 0) {
                            navigation.goBack();
                        }
                    }

                    return (
                        <ViewTw className='h-14 flex-row items-center' style={{ backgroundColor: '#0f172a' }}>
                            <TouchableOpacityTw onPress={moveScreen(0)}>
                                <TextTw className='grow-0 p-4 text-gray-200  text-base' style={{ fontFamily: Popins[600] }}>Hủy</TextTw>
                            </TouchableOpacityTw>
                            <TextTw className='grow text-center text-gray-200 text-base' style={{ fontFamily: Popins[600] }}>Thêm giao dịch</TextTw>
                            <TouchableOpacityTw>
                                <TextTw className='grow-0 p-4 text-gray-200 text-base' style={{ fontFamily: Popins[600] }}>Lưu</TextTw>
                            </TouchableOpacityTw>
                        </ViewTw>
                    )
                })
            }} />
        </Stack.Navigator>
    )
}

export default StackNavagator

const styles = StyleSheet.create({

})  