import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { styled } from 'nativewind';
import { Popins } from '../utils/popins';
import CircularProgress from 'react-native-circular-progress-indicator';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { useNavigation } from '@react-navigation/native';
import JARMODULE from '../funtion/Test';
import { useIsFocused } from '@react-navigation/native';


const TextTw = styled(Text);
const ViewTw = styled(View);
const TouchableOpacityTw = styled(TouchableOpacity);
const ImageTw = styled(Image);
const LinearGradientTw = styled(LinearGradient);
const ScrollviewTw = styled(ScrollView);

// const formatNumber = (number) => {
//   const numberString = number.toString().replace(/\s/g, '');
//   const length = numberString.length;
//   const numOfDots = Math.floor((length - 1) / 3);
//   let formattedString = '';
//   for (let i = 0; i < length; i++) {
//     formattedString += numberString[i];
//     if ((length - i - 1) % 3 === 0 && i !== length - 1) {
//       formattedString += ',';
//     }
//   }

//   return formattedString;
// };

const formatNumber = (number) => {
  const roundedNumber = Math.round(number);
  const formattedString = roundedNumber.toLocaleString();
  return formattedString;
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [progressValue, setPValue] = useState(50);

  //Total:
  const [totalMoney, setTotalMoney] = useState(0);
  const [totalMoneyOld, setTotalMoneyOld] = useState(0);

  const [Income, setIncome] = useState(0);
  const [Expence, setExpense] = useState(0);

  //6Jar
  const [essentials, setEssentials] = useState(0);
  const [education, setEducation] = useState(0);
  const [savings, setSavings] = useState(0);
  const [enjoyment, setEnjoyment] = useState(0);
  const [investment, setInvestment] = useState(0);
  const [charity, setCharity] = useState(0);

  //6Jar old
  const [essentialsOld, setEssentialsOld] = useState(1);
  const [educationOld, setEducationOld] = useState(1);
  const [savingsOld, setSavingsOld] = useState(1);
  const [enjoymentOld, setEnjoymentOld] = useState(1);
  const [investmentOld, setInvestmentOld] = useState(1);
  const [charityOld, setCharityOld] = useState(1);

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

  const [jar, setjar] = useState([
    {
      id: 1,
      amount: 0,
      amountOld: 0,
      percent: 55
    },
    {
      id: 2,
      amount: 0,
      amountOld: 0,
      percent: 10
    },
    {
      id: 3,
      amount: 0,
      amountOld: 0,
      percent: 10
    },
    {
      id: 4,
      amount: 0,
      amountOld: 0,
      percent: 10
    },
    {
      id: 5,
      amount: 0,
      amountOld: 0,
      percent: 10
    },
    {
      id: 6,
      amount: 0,
      amountOld: 0,
      percent: 5
    },
  ]);
  const [revenue, setrevenue] = useState([
    {
      id: 1,
      amount: 0
    },
    {
      id: 2,
      amount: 0
    }
  ]);

  const isFocused = useIsFocused();

  const createTable = async () => {
    await JARMODULE.createTable();
  };

  const createRows = async () => {
    await JARMODULE.createRows();
  };

  const createTable2 = async () => {
    await JARMODULE.createTable2();
  };

  const createRows2 = async () => {
    await JARMODULE.createRows2();
  };

  const fetchJars = async () => {
    const jarList = await JARMODULE.getJars();
    setjar(jarList);
  };

  const fetchRevenue = async () => {
    const jarList = await JARMODULE.getRevenue();
    setrevenue(jarList);

  };

  useEffect(() => {

    createTable();
    createRows();
    fetchJars();
    createTable2();
    createRows2();
    fetchRevenue();

  }, [isFocused])

  const moveScreen = (params, id) => {
    if (params) {
      navigation.navigate('IncomeScreen');
    } else {
      console.log(id);
      navigation.navigate('ExpenseScreen', { id: id });
    }
  }

  useEffect(() => {
    if (jar[0].amount) {
      setEssentials([jar[0].amount]);
    }
    if (jar[1].amount) {
      setEducation([jar[1].amount]);
    }
    if (jar[2].amount) {
      setSavings([jar[2].amount]);
    }
    if (jar[3].amount) {
      setEnjoyment([jar[3].amount]);
    }
    if (jar[4].amount) {
      setInvestment([jar[4].amount]);
    }
    if (jar[5].amount) {
      setCharity([jar[5].amount]);
    }

    if (jar[0].amountOld) {
      setEssentialsOld([jar[0].amountOld]);
    }
    if (jar[1].amountOld) {
      setEducationOld([jar[1].amountOld]);
    }
    if (jar[2].amountOld) {
      setSavingsOld([jar[2].amountOld]);
    }
    if (jar[3].amountOld) {
      setEnjoymentOld([jar[3].amountOld]);
    }
    if (jar[4].amountOld) {
      setInvestmentOld([jar[4].amountOld]);
    }
    if (jar[5].amountOld) {
      setCharityOld([jar[5].amountOld]);
    }


    if (jar[0].percent) {
      setEssentialsPercent([jar[0].percent]);
    }
    if (jar[1].percent) {
      setEducationPercent([jar[1].percent]);
    }
    if (jar[2].percent) {
      setSavingsPercent([jar[2].percent]);
    }
    if (jar[3].percent) {
      setEnjoymentPercent([jar[3].percent]);
    }
    if (jar[4].percent) {
      setInvestmentPercent([jar[4].percent]);
    }
    if (jar[5].percent) {
      setCharityPercent([jar[5].percent]);
    }


  }, [jar[0], jar[1], jar[2], jar[3], jar[4], jar[5]]);

  useEffect(() => {
    if (education, enjoyment, essentials, savings, investment, charity) {
      setTotalMoneyOld(jar[0].amountOld + jar[1].amountOld + jar[2].amountOld + jar[3].amountOld + jar[4].amountOld + jar[5].amountOld);
      setTotalMoney(jar[0].amount + jar[1].amount + jar[2].amount + jar[3].amount + jar[4].amount + jar[5].amount);
      setLoading(false);
    }
  }, [education, enjoyment, essentials, savings, investment, charity])

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <ScrollView className='flex-1' overScrollMode='never' showsVerticalScrollIndicator={false}>{
      isLoading ? (<ViewTw></ViewTw>) : (<ViewTw className='py-5' style={{ backgroundColor: "#0f172a" }}>
        <ViewTw className='px-5 flex-row items-center'>
          <ImageTw className='w-12 h-12 rounded-full grow-0 ' source={require('../assets/logo/logo.jpeg')} />
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
                <CircularProgress radius={32} activeStrokeWidth={6} inActiveStrokeWidth={6} valueSuffix={'%'} value={((totalMoney / totalMoneyOld) * 100)} activeStrokeColor='#dee2e6' />
              </ViewTw>
              <ViewTw className='flex-1 h-fit justify-center px-4'>
                <TextTw className='text-base text-gray-300'>Số dư khả dụng</TextTw>
                <TextTw className='text-2xl text-gray-300' style={{ fontFamily: Popins[600] }} >{formatNumber(totalMoney)}{' '}₫</TextTw>
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
                {/* <CircularProgress radius={32} activeStrokeWidth={6} inActiveStrokeWidth={6} valueSuffix={'%'} value={((totalMoney/totalMoneyOld) * 100)} activeStrokeColor='#dee2e6' /> */}
              </ViewTw>
              <ViewTw className='flex-1 h-fit justify-center px-4'>
                <TextTw className='text-base text-gray-300'>Tổng tài sản</TextTw>
                <TextTw className='text-2xl text-gray-300' style={{ fontFamily: Popins[600] }} >{formatNumber(totalMoneyOld)}{' '}₫</TextTw>
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
          <TouchableOpacityTw onPress={() => moveScreen(1, 0)} className='grow bg-gray-800 justify-center px-4 py-2 mr-1.5 rounded-xl' style={{ flex: 1 / 2 }}>
            <ViewTw className='flex-row mb-1  items-center'>
              <ImageTw className='w-6 h-6 grow-0' style={{ tintColor: '#008000' }} source={require('../assets/icon/Finance/credit-card.png')} />
              <TextTw className='text-gray-400 grow text-base ml-2'>Thu nhập</TextTw>
              <ViewTw className='w-6 h-6 grow-0'>
                <ImageTw className='w-full h-full' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/System/plus.png')} />
              </ViewTw>
            </ViewTw>
            <TextTw className='text-gray-300 my-1 text-lg ml-0.5'>{formatNumber(revenue[0].amount)}{' '}₫</TextTw>
          </TouchableOpacityTw>
          <ViewTw onPress={() => moveScreen(0)} className='grow bg-gray-800 justify-center px-4 py-2 ml-1.5 rounded-xl' style={{ flex: 1 / 2 }}>
            <ViewTw className='flex-row mb-1 items-center'>
              <ImageTw className='w-6 h-6 grow-0' style={{ tintColor: '#bc4749' }} source={require('../assets/icon/Finance/credit-card.png')} />
              <TextTw className='text-gray-400 grow text-base ml-2'>Chi tiêu</TextTw>
              <ViewTw className='w-6  h-6 grow-0' >
                <ImageTw className='w-full h-full' style={{ tintColor: '#dee2e6', opacity: 0 }} source={require('../assets/icon/System/minus.png')} />
              </ViewTw>
            </ViewTw>
            <TextTw className='text-gray-300 my-1 text-lg ml-0.5'>{formatNumber(revenue[1].amount)}{' '}₫</TextTw>
          </ViewTw>
        </ViewTw>
        <ViewTw className='my-4 px-5'>
          <TextTw className='text-xl font-semibold mb-2 text-gray-300'>Danh sách hũ</TextTw>
          <ViewTw className='grow rounded-3xl bg-slate-800 py-2' >
            <TouchableOpacityTw onPress={() => { moveScreen(0, 1) }} className='flex-row items-center  px-4 py-2 grow-0' activeOpacity={1}>
              <ViewTw className='w-14 h-14 justify-center items-center rounded-2xl' style={{ backgroundColor: "#2a9d8f" }}>
                <ImageTw className='w-7 h-7' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Business/position.png')} />
              </ViewTw>
              <ViewTw className='grow px-2'>
                <ViewTw className='flex-row justify-between grow'>
                  <TextTw className='text-lg font-semibold text-gray-300' >Thiết yếu</TextTw>
                  <TextTw className='text-lg font-semibold' style={{ color: '#D55D92' }} >{formatNumber(essentials) + " ₫"}</TextTw>
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
            <TouchableOpacityTw onPress={() => { moveScreen(0, 2) }} className='flex-row items-center  px-4 py-2 grow-0' activeOpacity={1}>
              <ViewTw className='w-14 h-14 justify-center items-center rounded-2xl' style={{ backgroundColor: "#e76f51" }}>
                <ImageTw className='w-7 h-7' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Business/position.png')} />
              </ViewTw>
              <ViewTw className='grow px-2'>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-lg font-semibold text-gray-300' >Giáo dục</TextTw>
                  <TextTw className='text-lg font-semibold' style={{ color: '#D55D92' }} >{formatNumber(education) + " ₫"}</TextTw>
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
            <TouchableOpacityTw onPress={() => { moveScreen(0, 3) }} className='flex-row items-center  px-4 py-2 grow-0' activeOpacity={1}>
              <ViewTw className='w-14 h-14 justify-center items-center rounded-2xl' style={{ backgroundColor: "#708d81" }}>
                <ImageTw className='w-7 h-7' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Business/position.png')} />
              </ViewTw>
              <ViewTw className='grow px-2'>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-lg font-semibold text-gray-300' >Tiết kiệm</TextTw>
                  <TextTw className='text-lg font-semibold' style={{ color: '#D55D92' }} >{formatNumber(savings) + " ₫"}</TextTw>
                </ViewTw>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-xs font-normal text-gray-500 ml-0.5' >Khả dụng</TextTw>
                  <TextTw className='text-xs font-normal text-gray-300' >{Number((savings * 100 / savingsOld).toFixed(2)) + "%"}</TextTw>
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
            <TouchableOpacityTw onPress={() => { moveScreen(0, 4) }} className='flex-row items-center  px-4 py-2 grow-0' activeOpacity={1}>
              <ViewTw className='w-14 h-14 justify-center items-center rounded-2xl' style={{ backgroundColor: "#a98467" }}>
                <ImageTw className='w-7 h-7' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Business/position.png')} />
              </ViewTw>
              <ViewTw className='grow px-2'>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-lg font-semibold text-gray-300' >Huởng thụ</TextTw>
                  <TextTw className='text-lg font-semibold' style={{ color: '#D55D92' }} >{formatNumber(enjoyment) + " ₫"}</TextTw>
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
            <TouchableOpacityTw onPress={() => { moveScreen(0, 5) }} className='flex-row items-center  px-4 py-2 grow-0' activeOpacity={1}>
              <ViewTw className='w-14 h-14 justify-center items-center rounded-2xl' style={{ backgroundColor: "#fb6f92" }}>
                <ImageTw className='w-7 h-7' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Business/position.png')} />
              </ViewTw>
              <ViewTw className='grow px-2'>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-lg font-semibold text-gray-300' >Đầu tư</TextTw>
                  <TextTw className='text-lg font-semibold' style={{ color: '#D55D92' }} >{formatNumber(investment) + " ₫"}</TextTw>
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
            <TouchableOpacityTw onPress={() => { moveScreen(0, 6) }} className='flex-row items-center  px-4 py-2 grow-0' activeOpacity={1}>
              <ViewTw className='w-14 h-14 justify-center items-center rounded-2xl' style={{ backgroundColor: "#b8bedd" }}>
                <ImageTw className='w-7 h-7' style={{ tintColor: '#dee2e6' }} source={require('../assets/icon/Business/position.png')} />
              </ViewTw>
              <ViewTw className='grow px-2'>
                <ViewTw className='flex-row justify-between'>
                  <TextTw className='text-lg font-semibold text-gray-300' >Thiện tâm</TextTw>
                  <TextTw className='text-lg font-semibold' style={{ color: '#D55D92' }} >{formatNumber(charity) + " ₫"}</TextTw>
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
      </ViewTw>)
    }

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})