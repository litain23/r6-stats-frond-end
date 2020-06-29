import { getDayFromSecond, getRegion, getPlatform, getSeasonColorString, getSeasonName, getFirstAmongRanks, RANKAPI} from './type';



describe("DOES THIS APP GET TIME(D:H:M) CORRECLTY FROM SECONDS? " , () => {

    it(" IF INPUT IS 0", () => {
        expect(["0m ", "0m"]).toContain(getDayFromSecond(0))
    })

    it(" IF INPUT IS 120", () => {
        expect(["2m ", "2m"]).toContain(getDayFromSecond(120))
    })

    it(" IF INPUT IS 3600", () => {
        expect(["1h" , "1h ", "1h 0m", "1h 0m "]).toContain(getDayFromSecond(3600))
    })

    it(" IF INPUT IS 90000", () => {
        expect(["1d 1h 0m", "1d 1h 0m ", "1d 1h", "1d 1h "]).toContain(getDayFromSecond(90000))
    })

    it(" IF INPUT IS 92500", () => {
        expect(["1d 1h 41m ", "1d 1h 41m"]).toContain(getDayFromSecond(92500))
    })
})


describe("DOES THIS APP GET REGION NAME CORRECTLY?" , () => {

    it(" IF INPUT IS 0", () => {
        expect(["아시아", "ASIA", "아시아서버"]).toContain(getRegion("apac").toUpperCase())
    })

    it(" IF INPUT IS 120", () => {
        expect(["유럽", "EUROPE", "유럽서버"]).toContain(getRegion("emea").toUpperCase())
    })

    it(" IF INPUT IS GLOBAL", () => {
        expect(["통합", "글로벌", "통합(글로벌)", "통합서버", "GLOBAL"]).toContain(getRegion("global").toUpperCase())
    })

    it(" IF INPUT IS NCSA", () => {
        expect(["북미", "AMERICA", "북미서버"]).toContain(getRegion("ncsa").toUpperCase())
    })

})


describe("DOES THIS APP GET PLATFORM NAME CORRECTLY?" , () => {
    
    it(" IF INPUT IS psn", () => {
        expect(["PS", "PS4", "플레이스테이션"]).toContain(getPlatform("psn").toUpperCase())
    })

    it(" IF INPUT IS uplay", () => {
        expect(["PC", "일반"]).toContain(getPlatform("uplay").toUpperCase())
    })

    it(" IF INPUT IS xbl", () => {
        expect(["엑스박스", "XBOX"]).toContain(getPlatform("xbl").toUpperCase())
    })

})



describe("DOES THIS APP GET SEASON COLOR CORRECTLY?" , () => {
    
    it(" Edgecase : If it is -1 ", () => {
        expect(getSeasonColorString(-1)).toBeTruthy()
        expect(()=>{getSeasonColorString(-1)}).not.toThrow(Error)
    })

    
    it(" Edgecase : If it is 200 ", () => {
        expect(getSeasonColorString(200)).toBeTruthy()
        expect(()=>{getSeasonColorString(200)}).not.toThrow(Error)
    })

    it(" IF INPUT IS 17", () => {
        expect(getSeasonColorString(17)).toBe("#946a97")
    })

})


describe("DOES THIS APP GET SEASON NAME CORRECTLY?" , () => {
    
    it(" EDGECASE : If it is -1 ", () => {
        expect(getSeasonName(-1)).toBeTruthy()
        expect(()=>{getSeasonName(-1)}).not.toThrow(Error)
    })

    
    it(" EDGECASE : If it is 200 ", () => {
        expect(getSeasonName(200)).toBeTruthy()
        expect(()=>{getSeasonName(200)}).not.toThrow(Error)
    })

    it(" IF INPUT IS 17", () => {
        expect(getSeasonName(17)).toBe("VOID EDGE")
    })

})


const mockup_rankApisA: RANKAPI[] = [
    {
        "maxMmr": 400,
        "death": 0,
        "rank": 0,
        "maxRank": 0,
        "kills": 0,
        "abandons": 0,
        "mmr": 100,
        "wins": 0,
        "region": "ncsa",
        "season": 17,
        "losses": 0,
        "createdTime": "2020-05-19T18:19:30.0502837",
        "maxRankString": "UNRANK",
        "rankString": "UNRANK",
        "nextRankString": "UNRANK",
        "nextRankMmr" : 300,
    },
    {
        "maxMmr": 300,
        "death": 0,
        "rank": 0,
        "maxRank": 0,
        "kills": 0,
        "abandons": 0,
        "mmr": 200,
        "wins": 0,
        "region": "ncsa",
        "season": 17,
        "losses": 0,
        "createdTime": "2020-05-19T18:19:30.0502837",
        "maxRankString": "UNRANK",
        "rankString": "UNRANK",
        "nextRankString": "UNRANK",
        "nextRankMmr" : 300,
    },
    {
        "maxMmr": 200,
        "death": 0,
        "rank": 0,
        "maxRank": 0,
        "kills": 0,
        "abandons": 0,
        "mmr": 300,
        "wins": 0,
        "region": "apac",
        "season": 17,
        "losses": 0,
        "createdTime": "2020-05-19T18:19:30.0502837",
        "maxRankString": "UNRANK",
        "rankString": "UNRANK",
        "nextRankString": "UNRANK",
        "nextRankMmr" : 300,
    },
    {
        "maxMmr": 100,
        "death": 0,
        "rank": 0,
        "maxRank": 0,
        "kills": 0,
        "abandons": 0,
        "mmr": 400,
        "wins": 0,
        "region": "global",
        "season": 17,
        "losses": 0,
        "createdTime": "2020-05-19T18:19:30.0502837",
        "maxRankString": "UNRANK",
        "rankString": "UNRANK",
        "nextRankString": "UNRANK",
        "nextRankMmr" : 300,
    }
]

const mockup_rankApisB: RANKAPI[] = [
    {
        "maxMmr": 0,
        "death": 0,
        "rank": 0,
        "maxRank": 0,
        "kills": 0,
        "abandons": 0,
        "mmr": 2500,
        "wins": 0,
        "region": "global",
        "season": 17,
        "losses": 0,
        "createdTime": "2020-05-19T18:19:30.0502837",
        "maxRankString": "UNRANK",
        "rankString": "UNRANK",
        "nextRankString": "UNRANK",
        "nextRankMmr" : 300,
    }
]

describe("DOES THIS APP SORT IN getFirstAmongRanks ?" , () => {

    it("FUNCTION USING CUSTOM SORTER", () => {
        expect(getFirstAmongRanks(mockup_rankApisA,(a,b) => (a.mmr < b.mmr) ? 1 : -1)).toEqual({
            "maxMmr": 100,
            "death": 0,
            "rank": 0,
            "maxRank": 0,
            "kills": 0,
            "abandons": 0,
            "mmr": 400,
            "wins": 0,
            "region": "global",
            "season": 17,
            "losses": 0,
            "createdTime": "2020-05-19T18:19:30.0502837",
            "maxRankString": "UNRANK",
            "rankString": "UNRANK",
            "nextRankString": "UNRANK",
            "nextRankMmr" : 300,
        })
    })

    it("FUNCTION USING DEFAULT SORTER", () => { 
        expect(getFirstAmongRanks(mockup_rankApisA)).toEqual({
            "maxMmr": 400,
            "death": 0,
            "rank": 0,
            "maxRank": 0,
            "kills": 0,
            "abandons": 0,
            "mmr": 100,
            "wins": 0,
            "region": "ncsa",
            "season": 17,
            "losses": 0,
            "createdTime": "2020-05-19T18:19:30.0502837",
            "maxRankString": "UNRANK",
            "rankString": "UNRANK",
            "nextRankString": "UNRANK",
            "nextRankMmr" : 300,
        })

    })

    it("RANKAPI WITH ONLY ONE DATA", () => {
        expect(getFirstAmongRanks(mockup_rankApisB)).toEqual(  {
            "maxMmr": 0,
            "death": 0,
            "rank": 0,
            "maxRank": 0,
            "kills": 0,
            "abandons": 0,
            "mmr": 2500,
            "wins": 0,
            "region": "global",
            "season": 17,
            "losses": 0,
            "createdTime": "2020-05-19T18:19:30.0502837",
            "maxRankString": "UNRANK",
            "rankString": "UNRANK",
            "nextRankString": "UNRANK",
            "nextRankMmr" : 300,
        })
    })
    
    it("RANKAPI WITH ONLY ONE DATA USING CUSTOM SORTER", () => {
        expect(getFirstAmongRanks(mockup_rankApisB, (a,b) => (a.mmr < b.mmr) ? 1 : -1 )).toEqual(  {
            "maxMmr": 0,
            "death": 0,
            "rank": 0,
            "maxRank": 0,
            "kills": 0,
            "abandons": 0,
            "mmr": 2500,
            "wins": 0,
            "region": "global",
            "season": 17,
            "losses": 0,
            "createdTime": "2020-05-19T18:19:30.0502837",
            "maxRankString": "UNRANK",
            "rankString": "UNRANK",
            "nextRankString": "UNRANK",
            "nextRankMmr" : 300,
        })
    })
    
})



