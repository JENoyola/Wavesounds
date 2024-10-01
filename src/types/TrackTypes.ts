export const NullTrackSearchWrapper:TrackSearchWrapper = {
    totalCount:0,
    items :[]
}

export type TrackSearchWrapper = {
    totalCount : number 
    items : TrackType[]
}

export type TrackSourceType = {
    url : string 
    width : number 
    height : number
}

export type TrackArtistType = {
    uri : string 
    profile : {
        name : string 
    }
}

export type TrackType = {
    data : {
        uri : string 
        id : string 
        name : string 
        albumOfTrack : {
            id : string
            uri : string 
            name : string 
            coverArt : {
                sources : TrackSourceType[] 
            }
            sharingInfo : {
                shareUrl : string
            }
        }
        artists : {
            items : TrackArtistType[]
        }
        contentRating : {
            label : string 
        }
        duration : {
            totalMilliseconds : number
        }
        playability : {
            playable : boolean
        }
    }
}