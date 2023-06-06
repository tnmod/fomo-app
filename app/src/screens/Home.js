import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { styled } from 'nativewind'
import { Popins } from '../utils/popins';
import CircularProgress from 'react-native-circular-progress-indicator';
import { ProgressBar } from '@react-native-community/progress-bar-android';


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

const Home = () => {

  const [progressValue, setPValue] = useState(50);

  //Total:
  const [totalMoney, setMoney] = useState(10000);

  const [Income, setIncome] = useState(10000);
  const [Spending, setSpending] = useState(0);

  //6Jar
  const [essentials, setEssentials] = useState(5000);
  const [education, setEducation] = useState(99);
  const [savings, setSavings] = useState(1000);
  const [enjoyment, setEnjoyment] = useState(100);
  const [investment, setInvestment] = useState(500);
  const [charity, setCharity] = useState(500);


  //6Jar old
  const [essentialsOld, setEssentialsOld] = useState(5500);
  const [educationOld, setEducationOld] = useState(1000);
  const [savingsOld, setSavingsOld] = useState(1000);
  const [enjoymentOld, setEnjoymentOld] = useState(1000);
  const [investmentOld, setInvestmentOld] = useState(1000);
  const [charityOld, setCharityOld] = useState(500);

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
  const formattedSpending = formatNumber(Spending);
  const formatedEssentials = formatNumber(essentials);
  const formatedEducation = formatNumber(education);
  const formatedSavings = formatNumber(savings);
  const formatedEnjoyment = formatNumber(enjoyment);
  const formatedInvestment = formatNumber(investment);
  const formatedCharity = formatNumber(charity);

  return (
    <ScrollView>
      <ViewTw className='p-5 mb-6'>
        <ViewTw className='flex-row items-center'>
          <ImageTw className='w-12 h-12 rounded-full grow-0' source={require('../assets/images/potter.jpg')} />
          <ViewTw className='grow px-4 justify-center'>
            <TextTw className='' style={{ fontFamily: Popins[500], fontSize: 12 }}>Quản lý tài chính</TextTw>
            <TextTw className='' style={{ fontFamily: Popins[600], fontSize: 20 }}>FOMO</TextTw>
          </ViewTw>
          <TouchableOpacityTw className='w-14 h-14 grow-0'>
            <ImageTw className='w-10 h-10 my-auto mx-auto' style={{ tintColor: '#ffffff99' }} source={require('../assets/icon/System/bell-2.png')} />
          </TouchableOpacityTw>
        </ViewTw>


        {/* card */}
        <LinearGradientTw
          colors={['#E5449E50', '#8F45E770', '#E5449E50']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0.5 }}
          className='w-full rounded-2xl my-6 h-fit'
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
            <TextTw style={{ fontFamily: Popins[400] }}>Thẻ chi tiêu</TextTw>
          </ViewTw>
        </LinearGradientTw>
        {/* style={{tintColor:'#bc4749'}} */}
        {/* dee2e6 */}
        {/* ₫ */}
        <ViewTw className='flex-row'>
          <ViewTw className='grow bg-gray-800 px-4 py-2 mr-1.5 rounded-xl'>
            <ViewTw className='flex-row items-center'>
              <ImageTw className='w-6 h-6 grow-0' style={{ tintColor: '#008000' }} source={require('../assets/icon/Finance/credit-card.png')} />
              <TextTw className='text-gray-400 grow text-base ml-2'>Thu nhập</TextTw>
              <TouchableOpacityTw className='w-6 h-6 grow-0'>
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
        <ViewTw className='my-6'>
          <TextTw className='text-xl font-semibold mb-2'>Danh sách hũ</TextTw>
          <ViewTw className='grow rounded-3xl bg-slate-800 py-2' >
            <TouchableOpacityTw className='flex-row items-center  px-4 py-2 grow-0' activeOpacity={1}>
              <ViewTw className='w-14 h-14 justify-center items-center rounded-2xl' style={{ backgroundColor: "#2a9d8f" }}>
                <ImageTw className='w-7 h-7' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Business/position.png')} />
              </ViewTw>
              <ViewTw className='grow px-2'>
                <ViewTw className='flex-row justify-between grow'>
                  <TextTw className='text-lg font-semibold' >Thiết yếu</TextTw>
                  <TextTw className='text-lg font-semibold' >{formatedEssentials + " ₫"}</TextTw>
                </ViewTw>
                <ViewTw className='flex-row justify-between grow-0'>
                  <TextTw className='text-xs font-normal text-gray-500 ml-0.5' >Khả dụng</TextTw>
                  <TextTw className='text-xs font-normal text-gray-500' >{Number(((essentials * 100) / essentialsOld).toFixed(2)) + "%"}</TextTw>
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
                  <TextTw className='text-lg font-semibold' >Giáo dục</TextTw>
                  <TextTw className='text-lg font-semibold' >{formatedEducation + " ₫"}</TextTw>
                </ViewTw>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-xs font-normal text-gray-500 ml-0.5' >Khả dụng</TextTw>
                  <TextTw className='text-xs font-normal text-gray-500' >{Number(((education * 100) / educationOld).toFixed(2)) + "%"}</TextTw>
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
              <ViewTw className='w-14 h-14 justify-center items-center rounded-2xl' style={{ backgroundColor: "#708d81" }}>
                <ImageTw className='w-7 h-7' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Business/position.png')} />
              </ViewTw>
              <ViewTw className='grow px-2'>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-lg font-semibold' >Tiết kiệm</TextTw>
                  <TextTw className='text-lg font-semibold' >{formatedSavings + " ₫"}</TextTw>
                </ViewTw>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-xs font-normal text-gray-500 ml-0.5' >Khả dụng</TextTw>
                  <TextTw className='text-xs font-normal text-gray-500' >{Number(((savings * 100) / savingsOld).toFixed(2)) + "%"}</TextTw>
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
              <ViewTw className='w-14 h-14 justify-center items-center rounded-2xl' style={{ backgroundColor: "#a98467" }}>
                <ImageTw className='w-7 h-7' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Business/position.png')} />
              </ViewTw>
              <ViewTw className='grow px-2'>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-lg font-semibold' >Huởng thụ</TextTw>
                  <TextTw className='text-lg font-semibold' >{formatedEnjoyment + " ₫"}</TextTw>
                </ViewTw>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-xs font-normal text-gray-500 ml-0.5' >Khả dụng</TextTw>
                  <TextTw className='text-xs font-normal text-gray-500' >{Number(((enjoyment * 100) / enjoymentOld).toFixed(2)) + "%"}</TextTw>
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
              <ViewTw className='w-14 h-14 justify-center items-center rounded-2xl' style={{ backgroundColor: "#fb6f92" }}>
                <ImageTw className='w-7 h-7' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Business/position.png')} />
              </ViewTw>
              <ViewTw className='grow px-2'>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-lg font-semibold' >Đầu tư</TextTw>
                  <TextTw className='text-lg font-semibold' >{formatedInvestment + " ₫"}</TextTw>
                </ViewTw>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-xs font-normal text-gray-500 ml-0.5' >Khả dụng</TextTw>
                  <TextTw className='text-xs font-normal text-gray-500' >{Number(((investment * 100) / investmentOld).toFixed(2)) + "%"}</TextTw>
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
              <ViewTw className='w-14 h-14 justify-center items-center rounded-2xl' style={{ backgroundColor: "#b8bedd" }}>
                <ImageTw className='w-7 h-7' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Business/position.png')} />
              </ViewTw>
              <ViewTw className='grow px-2'>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-lg font-semibold' >Thiện tâm</TextTw>
                  <TextTw className='text-lg font-semibold' >{formatedCharity + " ₫"}</TextTw>
                </ViewTw>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-xs font-normal text-gray-500 ml-0.5' >Khả dụng</TextTw>
                  <TextTw className='text-xs font-normal text-gray-500' >{Number(((charity * 100) / charityOld).toFixed(2)) + "%"}</TextTw>
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
          </ViewTw>
        </ViewTw>
      </ViewTw>
    </ScrollView>

  )
}

export default Home

const styles = StyleSheet.create({})