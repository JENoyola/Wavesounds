import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import ICONS from '@expo/vector-icons/Ionicons'
import LOGO from '../../../assets/logos/wordmark_white.png'
import {Image} from 'expo-image'

const {width} = Dimensions.get("window")

type Props = {
    callback : () => void
}

export default function BrandHeader({callback}:Props) {
  return (
    <View style={{width ,height : 55,alignItems : 'center'}} >
        <View style={{width : '95%',height : '100%',flexDirection : 'row',alignItems : 'center',justifyContent : 'space-between'}} >

            <View style={{width : '40%',height : '80%',alignItems : 'center',justifyContent : 'center'}} >
             <Image source={LOGO} contentFit='contain' style={{width : '100%',height : '100%'}} />   
            </View>

            <TouchableOpacity onPress={() => callback()} activeOpacity={0.45} style={{width : 35,height : 35,alignItems : 'center',justifyContent : 'center'}} >
                <ICONS name="search" color="white" size={22} />
            </TouchableOpacity>

        </View>
    </View>
  )
}