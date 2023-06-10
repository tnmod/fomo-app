import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { styled } from 'nativewind';
import { Popins } from '../utils/popins';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import IncomeScreen from '../screens/IncomeScreen';
import ExpenseScreen from '../screens/ExpenseScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

const TextTw = styled(Text);
const ViewTw = styled(View);
const TouchableOpacityTw = styled(TouchableOpacity);
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MyTabBar({ state, descriptors, navigation, position }) {
    return (
        <ViewTw className='justify-center items-center h-16' style={{ backgroundColor: '#0f172a' }} >
            <ViewTw className='bg-gray-800 p-0 rounded-3xl' style={{ flexDirection: 'row', flex: 0 }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };


                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    return (
                        <TouchableOpacityTw
                            key={route.key}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={[{ flex: 0 }]}
                            className={'justify-center items-center'}
                            activeOpacity={1}
                        >
                            <TextTw className={isFocused ? 'bg-slate-500 text-gray-300 py-1 px-7 rounded-full text-base font-semibold' : ' text-gray-300 py-1 px-7 rounded-full text-base font-semibold'}>{label}</TextTw>
                        </TouchableOpacityTw>
                    );
                })}
            </ViewTw>
        </ViewTw>

    );
}

// ...



const TopTabNavigator = (props) => {
    return (
        <ViewTw className='flex-1 '>
            <Tab.Navigator
                screenOptions={{
                    animationEnabled: false,
                    swipeEnabled: false
                }} tabBar={props => <MyTabBar {...props} />}>
                <Tab.Screen name="Income" component={IncomeScreen} options={{
                    title: 'Thu nhập'
                }} />
                <Tab.Screen name="Expense" component={ExpenseScreen} options={{
                    title: 'Chi tiêu',

                }} />
            </Tab.Navigator>
        </ViewTw>
    )
}

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='HomeScreen'  >
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="IncomeScreen" component={IncomeScreen} options={{
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
            <Stack.Screen name="ExpenseScreen" component={ExpenseScreen} options={{
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




export default StackNavigator

const styles = StyleSheet.create({

})  