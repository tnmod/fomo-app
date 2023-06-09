import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';
import { Popins } from '../utils/popins';
import { FormatNumber } from '../utils/FormatNumber';
import JARMODULE from '../funtion/Test';

const TextTw = styled(Text);
const ViewTw = styled(View);
const TouchableOpacityTw = styled(TouchableOpacity);
const ImageTw = styled(Image);
const ScrollviewTw = styled(ScrollView);
const TextInputTw = styled(TextInput);






const IncomeScreen = () => {
  const navigation = useNavigation();


  const [value, setValue] = useState(0);
  const [formatValue, setFormatValue] = useState('');

  useEffect(() => {
    setFormatValue(FormatNumber(value));
  }, [value]);

  const handleValueChange = (text) => {
    const numericValue = parseInt(text.replace(/,/g, ''), 10);
    if (isNaN(numericValue) || numericValue <= 0) {
      setValue(0);
      setFormatValue('0');
    } else {
      setValue(numericValue);
      setFormatValue(FormatNumber(numericValue));
    }
  };

  const handleSaveData = () => {
    if (value) {
      updateRevenue(value, 1);
      addAll(value);
      navigation.popToTop();
    } else {
      ToastAndroid.show('Số tiền không hợp lệ!', ToastAndroid.SHORT);
    }

  };

  const updateRevenue = async (value, id) => {
    const jarList = await JARMODULE.updateRevenue(value, id);
  }

  const addAll = async (value) => {
    await JARMODULE.addAll(value);
}

  return (
    <ViewTw style={{ flex: 1, backgroundColor: '#0f172a' }}>
      <ViewTw className='px-4 justify-center'>
        <TextTw className='text-gray-300 text-base mt-2'>Số tiền</TextTw>
        <ViewTw className='flex-row justify-between items-center'>
          <TextInputTw
            keyboardType='numeric'
            onChangeText={handleValueChange}
            onSubmitEditing={handleSaveData}
            defaultValue={formatValue}
            className='grow text-green-500 text-3xl text-ellipsis'
            numberOfLines={1}
          />
          <TextTw className='grow-0 text-gray-200 text-xs bg-pink-500 px-4 py-0.5 rounded-full'>đ</TextTw>
        </ViewTw>
        <TouchableOpacityTw  className='bg-green-800 py-4 mt-28 w-full rounded-full justify-center items-center' onPress={() => handleSaveData()}>
          <TextTw className=' text-gray-300  text-base' style={{ fontFamily: Popins[600] }}>Lưu</TextTw>
        </TouchableOpacityTw>
      </ViewTw>
    </ViewTw>
  );
};

export default IncomeScreen;

const styles = StyleSheet.create({});