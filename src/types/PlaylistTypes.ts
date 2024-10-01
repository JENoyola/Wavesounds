export type PlaylistSearchWrapper = {
    totalCount : number 
    items : PlaylistType[]
}

export type PlaylistSourceType = {
    url : string 
    width : number 
    height : number
}

export type PlaylistImageContainerType = {
    sources : PlaylistSourceType[]
} 

export type PlaylistType = {
    data : {
        uri : string 
        name : string 
        description : string 
        images : {
            items : PlaylistImageContainerType[]
        }
        owner : {
            name : string 
        }
    }   
}