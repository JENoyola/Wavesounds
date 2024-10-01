export type AlbumSearchWrapper = {
    totalCount : number 
    items : AlbumType[]
}

export type AlbumArtistType = {
    uri : string
    name : string
} 

export type AlbumCoverArtType = {
    url : string 
    width : number 
    height : number
}

export type AlbumType = {
    data : {
        uri : string 
        name : string 
        artists : {
            items : AlbumArtistType[]
        }
        coverArt : {
            sources : AlbumCoverArtType[]
        }
        date : {
            year : 2024
        }
    }
}