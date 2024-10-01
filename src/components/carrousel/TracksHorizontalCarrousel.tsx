import { View, Text, DimensionValue, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { TrackType } from '../../types/TrackTypes';
import { Image } from 'expo-image';
import ICONS from '@expo/vector-icons/Ionicons'

type Props = {
    Width? : DimensionValue
    data? : TrackType[]
}

export default function TracksHorizontalCarrousel({Width="100%",data}:Props) {

  return (
    <View style={{width:Width,height: 'auto',paddingVertical : 10}} >
      <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
        data={data}
        renderItem={({item,index}) => (
            <RenderCarrouselItem index={index} track={item} />
        )}

      />
    </View>
  )
}

type RenderCarrouselItemProps = {
  index : number
    track : TrackType
}

function RenderCarrouselItem({track,index}:RenderCarrouselItemProps) {
    return (
        <TouchableOpacity activeOpacity={0.999} style={{marginLeft : index !== 0 ? 10 : 0,width : 110,alignItems : 'flex-start'}} > 
            <View style={{width : track.data.albumOfTrack.coverArt.sources[0].width/3+10,height : track.data.albumOfTrack.coverArt.sources[0].height/3+10,backgroundColor : 'green',borderRadius : 8,overflow : 'hidden',position  : 'relative'}} >

              <Image source={{uri : track.data.albumOfTrack.coverArt.sources[0].url}} contentFit='cover' style={{flex : 1,backgroundColor : 'rgba(0,0,0,0.34)'}} />
              <View style={{width : '100%',height : '100%',position : 'absolute',backgroundColor : 'rgba(0,0,0,0.25)',alignItems : 'center',justifyContent : 'center' }} >
                <View style={{width : 25,height : 25,alignItems : 'center',justifyContent : 'center',backgroundColor : 'white',borderRadius : 100}} >
                <ICONS name="play" color={'black'} size={14} />
                </View>
              </View>
            </View>

            <Text numberOfLines={2} style={{fontSize : 14,fontWeight : '600',color : 'white',width : '100%',marginTop : 4}} >
              <View style={{width : 13,height : 13,marginRight : 2,backgroundColor : 'grey',borderRadius : 2,alignItems : 'center',justifyContent : 'center'}} >
                <Text style={{fontSize : 12,fontWeight : '800',color : '#212529'}} >E</Text>
              </View>
              {track.data.name}
              </Text>
        </TouchableOpacity>
    )
}