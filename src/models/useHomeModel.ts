import { ProviderSearch } from "../api/Search"


export function useHomeModel() {

    async function Search(query:string,searchType : string,offset:number=0,limit:number=10,numberOfTopResults:number=5) {

        let res = await ProviderSearch(query,searchType,offset,limit,numberOfTopResults)
        return res
    }

    return {
        Search
    }

} 