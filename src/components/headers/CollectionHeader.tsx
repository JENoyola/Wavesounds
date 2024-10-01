import { View, Text, DimensionValue, Platform, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
    width? : DimensionValue
    title? : string
    callback : () => void
}

export default function CollectionHeader({width="100%",title="Label",callback} : Props) {
  return (
    <View style={{width,paddingVertical : 15}} >
        {/* Upper */}
        <View style={{width : '100%',flexDirection : 'row',alignItems : 'center',justifyContent : 'space-between'}} >
            <Text style={{fontSize : Platform.OS === 'ios' ? 22 : 18,fontWeight : '700',color  :'white'}} >{title}</Text>
            <TouchableOpacity onPress={() => callback()} activeOpacity={0.45} style={{paddingVertical : 5,paddingHorizontal : 10,borderWidth : 1,borderColor : 'rgba(256,256,256,0.6)',borderRadius : 100}} >
                <Text style={{fontSize : 10,fontWeight : '600',color : 'white'}} >Ver todos</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}