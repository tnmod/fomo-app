import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { styled } from 'nativewind';
import { Popins } from '../utils/popins';
import CircularProgress from 'react-native-circular-progress-indicator';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { useNavigation } from '@react-navigation/native';


const TextTw = styled(Text);
const ViewTw = styled(View);
const TouchableOpacityTw = styled(TouchableOpacity);
const ImageTw = styled(Image);
const LinearGradientTw = styled(LinearGradient);
const ScrollviewTw = styled(ScrollView);

const formatNumber = (number) => {
  const numberString = number.toString().replace(/\s/g, '');
  const length = numberString.length;
  const numOfDots = Math.floor((length - 1) / 3);
  let formattedString = '';
  for (let i = 0; i < length; i++) {
    formattedString += numberString[i];
    if ((length - i - 1) % 3 === 0 && i !== length - 1) {
      formattedString += ',';
    }
  }

  return formattedString;
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [progressValue, setPValue] = useState(50);

  //Total:
  const [totalMoney, setTotalMoney] = useState(0);


  const [Income, setIncome] = useState(10000000);
  const [Expence, setExpense] = useState(0);

  //6Jar
  const [essentials, setEssentials] = useState(5420000);
  const [education, setEducation] = useState(99000);
  const [savings, setSavings] = useState(755000);
  const [enjoyment, setEnjoyment] = useState(100000);
  const [investment, setInvestment] = useState(523232);
  const [charity, setCharity] = useState(320000);

  //6Jar old
  const [essentialsOld, setEssentialsOld] = useState(5500000);
  const [educationOld, setEducationOld] = useState(1000000);
  const [savingsOld, setSavingsOld] = useState(1000000);
  const [enjoymentOld, setEnjoymentOld] = useState(1000000);
  const [investmentOld, setInvestmentOld] = useState(1000000);
  const [charityOld, setCharityOld] = useState(500000);

  //%defaul
  const [essentialsPercent, setEssentialsPercent] = useState(55);
  const [educationPercent, setEducationPercent] = useState(10);
  const [savingsPercent, setSavingsPercent] = useState(10);
  const [enjoymentPercent, setEnjoymentPercent] = useState(10);
  const [investmentPercent, setInvestmentPercent] = useState(10);
  const [charityPercent, setCharityPercent] = useState(5);


  // function addMoney(money) {
  //   setIncome(money);
  //   setEssentials((money * setEssentialsPercent) / 100);
  //   setEducation((money * setEducationPercent) / 100);
  //   setSavings((money * setSavingsPercent) / 100);
  //   setEnjoyment((money * setEnjoymentPercent) / 100);
  //   setInvestment((money * setInvestmentPercent) / 100);
  //   setCharity((money * setCharityPercent) / 100);
  // }

  //format cho đúng
  const formattedTotal = formatNumber(totalMoney);
  const formattedIncome = formatNumber(Income);
  const formattedSpending = formatNumber(Expence);
  const formatedEssentials = formatNumber(essentials);
  const formatedEducation = formatNumber(education);
  const formatedSavings = formatNumber(savings);
  const formatedEnjoyment = formatNumber(enjoyment);
  const formatedInvestment = formatNumber(investment);
  const formatedCharity = formatNumber(charity);

  useEffect(() => {
    setTotalMoney(essentialsOld + educationOld + enjoymentOld + savingsOld + charityOld + investmentOld);
  }, [])

  const moveScreen = (params) => {
    navigation.navigate("TransactionScreen");
  }

  return (
    <ScrollView overScrollMode='never' showsVerticalScrollIndicator={false}>
      <ViewTw className='py-5 mb-6' style={{ backgroundColor: "#0f172a" }}>
        <ViewTw className='px-5 flex-row items-center'>
          <ImageTw className='w-12 h-12 rounded-full grow-0' source={require('../assets/images/potter.jpg')} />
          <ViewTw className='grow px-4 justify-center'>
            <TextTw className='text-gray-300' style={{ fontFamily: Popins[500], fontSize: 12 }}>Quản lý tài chính</TextTw>
            <TextTw className='text-gray-300' style={{ fontFamily: Popins[600], fontSize: 20 }}>FOMO</TextTw>
          </ViewTw>
          <TouchableOpacityTw className='w-14 h-14 grow-0'>
            <ImageTw className='w-10 h-10 my-auto mx-auto' style={{ tintColor: '#ffffff99' }} source={require('../assets/icon/System/bell-2.png')} />
          </TouchableOpacityTw>
        </ViewTw>
        {/* card */}

        <ScrollviewTw className='w-fit h-fit' horizontal overScrollMode='never' showsHorizontalScrollIndicator={false}>
          <LinearGradientTw
            colors={['#E5449E50', '#8F45E770', '#E5449E50']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.5 }}
            className='w-80 m-5 rounded-2xl my-6 h-44 '
          >
            <ViewTw className='flex-row p-4'>
              <ViewTw className='rounded-full w-20 h-20 justify-center items-center'>
                <ViewTw className='opacity-10 w-full absolute bg-gray-200 h-full rounded-full'></ViewTw>
                <CircularProgress radius={32} activeStrokeWidth={6} inActiveStrokeWidth={6} valueSuffix={'%'} value={progressValue} activeStrokeColor='#dee2e6' />
              </ViewTw>
              <ViewTw className='flex-1 h-fit justify-center px-4'>
                <TextTw className='text-base text-gray-300'>Số dư khả dụng</TextTw>
                <TextTw className='text-2xl text-gray-300' style={{ fontFamily: Popins[600] }} >{formattedTotal}{' '}₫</TextTw>
              </ViewTw>
            </ViewTw>
            <ViewTw className='w-full items-center  px-4' ><ViewTw className='w-full bg-white opacity-10' style={{ height: 1 }}></ViewTw></ViewTw>
            <ViewTw className='py-5 px-4'>
              <TextTw className='text-gray-300' style={{ fontFamily: Popins[400] }}>Thẻ chi tiêu</TextTw>
            </ViewTw>
          </LinearGradientTw>
          <LinearGradientTw
            colors={['#E5449E50', '#8F45E770', '#E5449E50']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.5 }}
            className='w-80 mr-5 rounded-2xl my-6 h-44 '
          >
            <ViewTw className='flex-row p-4'>
              <ViewTw className='rounded-full w-20 h-20 justify-center items-center'>
                <ViewTw className='opacity-10 w-full absolute bg-gray-200 h-full rounded-full'></ViewTw>
                <CircularProgress radius={32} activeStrokeWidth={6} inActiveStrokeWidth={6} valueSuffix={'%'} value={progressValue} activeStrokeColor='#dee2e6' />
              </ViewTw>
              <ViewTw className='flex-1 h-fit justify-center px-4'>
                <TextTw className='text-base text-gray-300'>Số dư khả dụng</TextTw>
                <TextTw className='text-2xl text-gray-300' style={{ fontFamily: Popins[600] }} >{formattedTotal}{' '}₫</TextTw>
              </ViewTw>
            </ViewTw>
            <ViewTw className='w-full items-center  px-4' ><ViewTw className='w-full bg-white opacity-10' style={{ height: 1 }}></ViewTw></ViewTw>
            <ViewTw className='py-5 px-4'>
              <TextTw className='text-gray-300' style={{ fontFamily: Popins[400] }}>Thẻ chi tiêu</TextTw>
            </ViewTw>
          </LinearGradientTw>
        </ScrollviewTw>

        {/* style={{tintColor:'#bc4749'}} */}
        {/* dee2e6 */}
        {/* ₫ */}
        <ViewTw className='flex-row px-5'>
          <ViewTw className='grow bg-gray-800 px-4 py-2 mr-1.5 rounded-xl'>
            <ViewTw className='flex-row items-center'>
              <ImageTw className='w-6 h-6 grow-0' style={{ tintColor: '#008000' }} source={require('../assets/icon/Finance/credit-card.png')} />
              <TextTw className='text-gray-400 grow text-base ml-2'>Thu nhập</TextTw>
              <TouchableOpacityTw onPress={() => moveScreen(1)} className='w-6 h-6 grow-0'>
                <ImageTw className='w-full h-full' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/System/plus.png')} />
              </TouchableOpacityTw>
            </ViewTw>
            <TextTw className='text-gray-300 my-1 text-lg ml-0.5'>{formattedIncome}{' '}₫</TextTw>
          </ViewTw>
          <ViewTw className='grow bg-gray-800 px-4 py-2 ml-1.5 rounded-xl'>
            <ViewTw className='flex-row  items-center'>
              <ImageTw className='w-6 h-6 grow-0' style={{ tintColor: '#bc4749' }} source={require('../assets/icon/Finance/credit-card.png')} />
              <TextTw className='text-gray-400 grow text-base ml-2'>Chi tiêu</TextTw>
              <TouchableOpacityTw className='w-6 h-6 grow-0' >
                <ImageTw className='w-full h-full' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/System/minus.png')} />
              </TouchableOpacityTw>
            </ViewTw>
            <TextTw className='text-gray-300 my-1 text-lg ml-0.5'>{formattedSpending}{' '}₫</TextTw>
          </ViewTw>
        </ViewTw>
        <ViewTw className='my-4 px-5'>
          <TextTw className='text-xl font-semibold mb-2 text-gray-300'>Danh sách hũ</TextTw>
          <ViewTw className='grow rounded-3xl bg-slate-800 py-2' >
            <TouchableOpacityTw className='flex-row items-center  px-4 py-2 grow-0' activeOpacity={1}>
              <ViewTw className='w-14 h-14 justify-center items-center rounded-2xl' style={{ backgroundColor: "#2a9d8f" }}>
                <ImageTw className='w-7 h-7' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Business/position.png')} />
              </ViewTw>
              <ViewTw className='grow px-2'>
                <ViewTw className='flex-row justify-between grow'>
                  <TextTw className='text-lg font-semibold text-gray-300' >Thiết yếu</TextTw>
                  <TextTw className='text-lg font-semibold' style={{ color: '#D55D92' }} >{formatedEssentials + " ₫"}</TextTw>
                </ViewTw>
                <ViewTw className='flex-row justify-between grow-0'>
                  <TextTw className='text-xs font-normal text-gray-500 ml-0.5' >Khả dụng</TextTw>
                  <TextTw className='text-xs font-normal text-gray-300' >{Number(((essentials * 100) / essentialsOld).toFixed(2)) + "%"}</TextTw>
                </ViewTw>
                <ProgressBar
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={Number(((essentials * 100) / essentialsOld).toFixed(2)) / 100}
                  color='#3d405b'
                />
              </ViewTw>
              <ImageTw className='w-7 h-7 grow-0' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Arrows/arrow-chevron-right.png')} />
            </TouchableOpacityTw>
            <TouchableOpacityTw className='flex-row items-center  px-4 py-2 grow-0' activeOpacity={1}>
              <ViewTw className='w-14 h-14 justify-center items-center rounded-2xl' style={{ backgroundColor: "#e76f51" }}>
                <ImageTw className='w-7 h-7' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Business/position.png')} />
              </ViewTw>
              <ViewTw className='grow px-2'>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-lg font-semibold text-gray-300' >Giáo dục</TextTw>
                  <TextTw className='text-lg font-semibold' style={{ color: '#D55D92' }} >{formatedEducation + " ₫"}</TextTw>
                </ViewTw>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-xs font-normal text-gray-500 ml-0.5' >Khả dụng</TextTw>
                  <TextTw className='text-xs font-normal text-gray-300' >{Number(((education * 100) / educationOld).toFixed(2)) + "%"}</TextTw>
                </ViewTw>
                <ProgressBar
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={Number(((education * 100) / educationOld).toFixed(2)) / 100}
                  color='#3d405b'
                />
              </ViewTw>
              <ImageTw className='w-7 h-7 grow-0' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Arrows/arrow-chevron-right.png')} />
            </TouchableOpacityTw>
            <TouchableOpacityTw className='flex-row items-center  px-4 py-2 grow-0' activeOpacity={1}>
              <ViewTw className='w-14 h-14 justify-center items-center rounded-2xl' style={{ backgroundColor: "#708d81" }}>
                <ImageTw className='w-7 h-7' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Business/position.png')} />
              </ViewTw>
              <ViewTw className='grow px-2'>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-lg font-semibold text-gray-300' >Tiết kiệm</TextTw>
                  <TextTw className='text-lg font-semibold' style={{ color: '#D55D92' }} >{formatedSavings + " ₫"}</TextTw>
                </ViewTw>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-xs font-normal text-gray-500 ml-0.5' >Khả dụng</TextTw>
                  <TextTw className='text-xs font-normal text-gray-300' >{Number(((savings * 100) / savingsOld).toFixed(2)) + "%"}</TextTw>
                </ViewTw>
                <ProgressBar
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={Number(((savings * 100) / savingsOld).toFixed(2)) / 100}
                  color='#3d405b'
                />
              </ViewTw>
              <ImageTw className='w-7 h-7 grow-0' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Arrows/arrow-chevron-right.png')} />
            </TouchableOpacityTw>
            <TouchableOpacityTw className='flex-row items-center  px-4 py-2 grow-0' activeOpacity={1}>
              <ViewTw className='w-14 h-14 justify-center items-center rounded-2xl' style={{ backgroundColor: "#a98467" }}>
                <ImageTw className='w-7 h-7' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Business/position.png')} />
              </ViewTw>
              <ViewTw className='grow px-2'>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-lg font-semibold text-gray-300' >Huởng thụ</TextTw>
                  <TextTw className='text-lg font-semibold' style={{ color: '#D55D92' }} >{formatedEnjoyment + " ₫"}</TextTw>
                </ViewTw>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-xs font-normal text-gray-500 ml-0.5' >Khả dụng</TextTw>
                  <TextTw className='text-xs font-normal text-gray-300' >{Number(((enjoyment * 100) / enjoymentOld).toFixed(2)) + "%"}</TextTw>
                </ViewTw>
                <ProgressBar
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={Number(((enjoyment * 100) / enjoymentOld).toFixed(2)) / 100}
                  color='#3d405b'
                />
              </ViewTw>
              <ImageTw className='w-7 h-7 grow-0' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Arrows/arrow-chevron-right.png')} />
            </TouchableOpacityTw>
            <TouchableOpacityTw className='flex-row items-center  px-4 py-2 grow-0' activeOpacity={1}>
              <ViewTw className='w-14 h-14 justify-center items-center rounded-2xl' style={{ backgroundColor: "#fb6f92" }}>
                <ImageTw className='w-7 h-7' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Business/position.png')} />
              </ViewTw>
              <ViewTw className='grow px-2'>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-lg font-semibold text-gray-300' >Đầu tư</TextTw>
                  <TextTw className='text-lg font-semibold' style={{ color: '#D55D92' }} >{formatedInvestment + " ₫"}</TextTw>
                </ViewTw>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-xs font-normal text-gray-500 ml-0.5' >Khả dụng</TextTw>
                  <TextTw className='text-xs font-normal text-gray-300' >{Number(((investment * 100) / investmentOld).toFixed(2)) + "%"}</TextTw>
                </ViewTw>
                <ProgressBar
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={Number(((investment * 100) / investmentOld).toFixed(2)) / 100}
                  color='#3d405b'
                />
              </ViewTw>
              <ImageTw className='w-7 h-7 grow-0' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Arrows/arrow-chevron-right.png')} />
            </TouchableOpacityTw>
            <TouchableOpacityTw className='flex-row items-center  px-4 py-2 grow-0' activeOpacity={1}>
              <ViewTw className='w-14 h-14 justify-center items-center rounded-2xl' style={{ backgroundColor: "#b8bedd" }}>
                <ImageTw className='w-7 h-7' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Business/position.png')} />
              </ViewTw>
              <ViewTw className='grow px-2'>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-lg font-semibold text-gray-300' >Thiện tâm</TextTw>
                  <TextTw className='text-lg font-semibold' style={{ color: '#D55D92' }} >{formatedCharity + " ₫"}</TextTw>
                </ViewTw>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-xs font-normal text-gray-500 ml-0.5' >Khả dụng</TextTw>
                  <TextTw className='text-xs font-normal text-gray-300' >{Number(((charity * 100) / charityOld).toFixed(2)) + "%"}</TextTw>
                </ViewTw>
                <ProgressBar
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={Number(((charity * 100) / charityOld).toFixed(2)) / 100}
                  color='#3d405b'
                />
              </ViewTw>
              <ImageTw className='w-7 h-7 grow-0' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Arrows/arrow-chevron-right.png')} />
            </TouchableOpacityTw>
          </ViewTw>
        </ViewTw>
      </ViewTw>
    </ScrollView>

  )
}

export default HomeScreen

const styles = StyleSheet.create({})