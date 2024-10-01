import { Video } from "expo-av"
import { useEffect, useRef, useState } from "react"
import { useHomeModel } from "../../models/useHomeModel"
import { ARTISTS, MULTI } from "../../constants/SearchConstants"
import { MultiSearchType } from "../../types/SearchTypes"
import { NullTrackSearchWrapper, TrackSearchWrapper, TrackType } from "../../types/TrackTypes"

export function useHomeController() {

    const videoRef = useRef<Video>(null)
    const {Search} = useHomeModel()


    const [tracks,setTracks] = useState<TrackSearchWrapper>(NullTrackSearchWrapper)

    useEffect(() => {
        videoRef.current?.loadAsync({
            uri: "https://assets.zkaia.com/waves_bgc3.mp4"
        }, {
            isLooping: true,
            shouldPlay: true
        })

        const getData = async () =>{
            let res:MultiSearchType = await Search("populares",MULTI)
            if (res !== null) {
                setTracks(res.tracks)
            }

        }

        getData()

    }, [])

    return {
        videoRef,
        tracks
    }
}