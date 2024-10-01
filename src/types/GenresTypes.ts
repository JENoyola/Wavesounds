export type GenresSearchWrapper = {
    totalCount : number 
    items : GenresType[]
}

export type GenresType = {
    data : {
        uri : string 
        name : string 
        image : {
            sources : GenreSourceType[]
        }

    }
}

export type GenreSourceType = {
    url : string 
    width : number
    height : number 
}