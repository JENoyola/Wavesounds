import { View, Text, Platform  } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar,StatusBarStyle } from 'expo-status-bar'

type Props = {
    children : React.ReactElement[] | React.ReactElement
    bgc? : string 
    tabStyle? : StatusBarStyle | undefined
}

export default function BottomTabSafearea({children,bgc="black",tabStyle="light"}:Props) {

    const {top} = useSafeAreaInsets()

  return (
    <View style={{flex : 1}} >
        <StatusBar animated backgroundColor={bgc} style={tabStyle}  />
        {Platform.OS === 'ios' && (
            <View style={{width : '100%',height: top,backgroundColor : bgc}} />
        )}
        {children}
    </View>
  )
}