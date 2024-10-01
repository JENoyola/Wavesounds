import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import BottomTabSafearea from '../../components/safeareas/BottomTabSafearea'
import { useHomeStyles } from '../../styles/app/useHomeStyles'
import ActionButton from '../../components/buttons/ActionButton'
import { LinearGradient } from 'expo-linear-gradient'
import { useHomeController } from '../../controllers/app/useHomeController'
import { ResizeMode, Video } from 'expo-av'
import BrandHeader from '../../components/headers/BrandHeader'
import CollectionHeader from '../../components/headers/CollectionHeader'
import TracksHorizontalCarrousel from '../../components/carrousel/TracksHorizontalCarrousel'

export default function Home() {

    const { s } = useHomeStyles()
    const { videoRef,tracks } = useHomeController()

    return (
        <BottomTabSafearea>
            <View style={s.main} >

                <ScrollView bouncesZoom={false} bounces={false} stickyHeaderIndices={[0]} alwaysBounceVertical={true} >


                    <View style={s.upper} >
                        <BrandHeader callback={() => { }} />
                    </View>

                    {/* HEADER */}
                    <View style={s.header} >
                        <View style={s.video} >
                            <Video ref={videoRef} resizeMode={ResizeMode.STRETCH} style={{ flex: 1 }} />
                        </View>
                        <View style={s.cover} >
                            <View style={s.pad} >


                                <View style={s.lower} >

                                    <Text style={s.title} >Escucha toda la musica{'\n'}que te gusta</Text>

                                    <View style={s.btn} >
                                        <ActionButton
                                            bgc='white'
                                            color='black'
                                            width={'80%'}
                                            title="Ver colecciones"
                                            callback={() => { }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.8)', "rgba(0,0,0,1)"]} style={s.gradient} />
                    </View>

                    {/* RECENTLY LISTENED */}


                    {tracks.totalCount !== 0 && (

                        <View style={s.recently} >
                        <View style={s.padding} >
                            <CollectionHeader title="Recently" callback={() => console.log("about to see all recently played")} />
                            <TracksHorizontalCarrousel data={tracks.items} />
                        </View>
                    </View>
                    )}

                    {/* NEW RELEASES */}

                    <View style={s.releases} >
                        <View style={s.padding} >
                            <CollectionHeader title="Recently" callback={() => console.log("about to see all recently played")} />
                        </View>
                    </View>

                </ScrollView>
            </View>
        </BottomTabSafearea>
    )
}