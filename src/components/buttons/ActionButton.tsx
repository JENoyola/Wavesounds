import { View, Text, DimensionValue, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
  title? : string | React.ReactElement
  width? : DimensionValue
  fontSize? : number 
  color? : string
  bgc? : string
  callback : () => void
}

export default function ActionButton({color='white',fontSize=18,title="enter title" ,width="100%",bgc='black',callback}:Props) {
  return (
    <View style={{width,paddingVertical : 20,alignItems : 'center',justifyContent : 'center'}} >
      <TouchableOpacity onPress={() => callback()} activeOpacity={0.65} style={{width : '100%',height : 60,backgroundColor : bgc,alignItems : 'center',justifyContent : 'center',borderRadius : 100}} >
        <Text style={{fontSize,color,fontWeight : '600'}} >{title}</Text>
      </TouchableOpacity>
    </View>
  )
}