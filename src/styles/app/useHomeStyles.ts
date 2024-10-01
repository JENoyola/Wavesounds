import { Dimensions, Platform, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export function useHomeStyles() {

    const {width,height} = Dimensions.get("window")
    const {top} = useSafeAreaInsets()

    const s = StyleSheet.create({
        main: {
            flex: 1,
            backgroundColor: 'black',
        },

        // Header
        header : {
            width : '100%',
            height : height * 65/100,
            backgroundColor : 'black',
            position : 'relative',
            alignItems : 'center',
            justifyContent : 'center'
        },
        video : {
            width : '96%',
            height : Platform.OS === 'ios' ? '95%' : '85%',
            backgroundColor : 'black',
            borderRadius : 16,
            overflow : 'hidden'

        },
        cover : {
            width,
            height : height * 65/100,
            position : 'absolute', 
            alignItems : 'center',
            justifyContent : 'flex-end',
            zIndex : 10
        },
        title : {
            fontSize : Platform.OS === 'ios' ? 28 : 26,
            fontWeight : '700',
            color : 'white',
            textAlign : 'center',
            marginBottom : 15
        },
        pad : {
            width,
            height : '100%',
            flexDirection : 'column',
            alignItems : 'center',
            justifyContent : 'space-between',
        },
        upper : {
            flex : 1,
            alignItems : 'center',
            justifyContent : Platform.OS === 'ios' ? 'center' : 'flex-end',
            backgroundColor : 'rgba(0,0,0,1)',
            borderBottomLeftRadius : 16,
            borderBottomRightRadius : 16
        },
        lower : {
            flex : 4,
            alignItems : 'center',
            justifyContent : 'flex-end'

        },
        gradient : {
            width,
            height : height * 65/100,
            position : 'absolute',
            zIndex : 1
        },
        btn : {
            marginBottom : 20,
            width,
            alignItems : 'center'
        },
        recently : {
            width : width,
            alignItems : 'center',
            marginTop : 15,
            paddingVertical : 15
        },
        releases : {
            width,
            minHeight : height *15 /100,
            alignItems : 'center'
        },

        // Recently listened
        padding : {
            width : "95%",
        },

    })

    return {
        s
    }
}