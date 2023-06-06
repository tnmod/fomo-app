import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'
import { Popins } from '../utils/popins';

const Stext = styled(Text);
const Sview = styled(View);
const Stouch = styled(TouchableOpacity);

const Spflashscreen = () => {
    return (
        <Sview className='mx-auto my-auto'>
            <Stext className='mx-auto my-auto text-4xl' style={{ fontFamily: Popins[700] }}>Fomo</Stext>
        </Sview>
    )
}

export default Spflashscreen

const styles = StyleSheet.create({
    
})