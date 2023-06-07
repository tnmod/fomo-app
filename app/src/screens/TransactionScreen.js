import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image } from 'react-native-svg';
import Animated from 'react-native-reanimated';
import IncomeScreen from './IncomeScreen';
import ExpenseScreen from './ExpenseScreen';





const TextTw = styled(Text);
const ViewTw = styled(View);
const TouchableOpacityTw = styled(TouchableOpacity);
const ImageTw = styled(Image);
const LinearGradientTw = styled(LinearGradient);
const ScrollviewTw = styled(ScrollView);
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



const TransactionScreen = (props) => {

    

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
                    title: 'Chi tiêu'
                }} />
            </Tab.Navigator>
        </ViewTw>
    )
}

export default TransactionScreen

const styles = StyleSheet.create({})