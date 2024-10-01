export type ArtistSearchWrapper = {
    totalCount : number 
    items : ArtistType[]
}

export type ArtistAvatarSourceType = {
    url : string 
    width : number 
    height : number
}

export type ArtistType = {
    data : {
        uri : string
        profile : {
            name : string 
        }
        visuals : {
            avatarImage : {
                sources : ArtistAvatarSourceType[]
            }
        }
    }
    
}