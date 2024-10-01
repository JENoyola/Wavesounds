export type PodcastSearchWrapper = {
    totalCount : number 
    items : PodcastType[]
}

export type PodcastSourceType = {
    url : string 
    width : number 
    height : number 
}

export type PodcastType = {
    data : {
        uri : string
        name : string 
        coverArt : {
            sources : PodcastSourceType[]
        }
        type : string 
        publisher : {
            name : string 
        }
        mediaType : string 
    }
}