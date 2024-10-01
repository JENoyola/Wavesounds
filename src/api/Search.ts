export async function ProviderSearch(query:string,searchType : string,offset:number,limit:number,numberOfTopResults:number) {

    let url = `${process.env.EXPO_PUBLIC_BASE_PROVIDER_URL}${process.env.EXPO_PUBLIC_SEARCH_EP}?q=${query}&type=${searchType}&offset=${offset}&limit=${limit}&numberOfTopResults=${numberOfTopResults}`

    let params:RequestInit = {
        method : 'GET',
        headers : {
            "x-rapidapi-key" : process.env.EXPO_PUBLIC_PROVIDER_ACCESS ?? "",
            "x-rapidapi-host" : process.env.EXPO_PUBLIC_PROVIDER_HOST??"",
        },
        body : null,
    }

    return await fetch(url,params).then(res => {
        return res.json();
    }).then(res => {
        return res;
    }).catch((err) => {
        return err
    })
}

