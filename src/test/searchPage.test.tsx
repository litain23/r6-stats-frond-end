import React from 'react';
import { render } from '@testing-library/react';
import Search from '../Pages/SearchPage/Search'
import Seasons from '../Pages/SearchPage/Seasons'




// http request is not supported yet.
// const realdata = 
// jest.mock()
// https://testing-library.com/docs/react-testing-library/api#cleanup
// https://jestjs.io/docs/en/getting-started
// mock-up!

/**
 * 이 테스트는 기본이 되는 테스트입니다.
 * 
 */
describe("SEARCHPAGE_TEST", () => {
  it("SEASONS_PAGE_LOAD_TEST_WITH_MOCKUP", () => {
    const mockup =  [{"region":"ncsa","rankStat":[{"maxMmr":0,"death":0,"rank":0,"maxRank":0,"kills":0,"abandons":0,"mmr":2500,"wins":0,"region":"ncsa","season":17,"losses":0,"createdTime":"2020-06-01T19:59:51","maxRankString":"UNRANK","rankString":"UNRANK"}]},{"region":"emea","rankStat":[{"maxMmr":0,"death":0,"rank":0,"maxRank":0,"kills":0,"abandons":0,"mmr":2500,"wins":0,"region":"emea","season":17,"losses":0,"createdTime":"2020-06-01T19:59:42","maxRankString":"UNRANK","rankString":"UNRANK"}]},{"region":"apac","rankStat":[{"maxMmr":2906,"death":0,"rank":10,"maxRank":15,"kills":0,"abandons":1,"mmr":2283,"wins":20,"region":"apac","season":9,"losses":23,"createdTime":"2020-06-01T19:59:31","maxRankString":"SILVER 1","rankString":"BRONZE 1"},{"maxMmr":2621,"death":0,"rank":9,"maxRank":10,"kills":0,"abandons":6,"mmr":2106,"wins":132,"region":"apac","season":10,"losses":119,"createdTime":"2020-06-01T19:59:31","maxRankString":"BRONZE 1","rankString":"BRONZE 2"},{"maxMmr":3337,"death":0,"rank":15,"maxRank":17,"kills":0,"abandons":4,"mmr":3008,"wins":108,"region":"apac","season":11,"losses":97,"createdTime":"2020-06-01T19:59:32","maxRankString":"GOLD 2","rankString":"SILVER 1"},{"maxMmr":3121,"death":0,"rank":13,"maxRank":16,"kills":0,"abandons":0,"mmr":2655,"wins":26,"region":"apac","season":12,"losses":26,"createdTime":"2020-06-01T19:59:32","maxRankString":"GOLD 3","rankString":"SILVER 3"},{"maxMmr":3125,"death":0,"rank":13,"maxRank":16,"kills":0,"abandons":2,"mmr":2637,"wins":65,"region":"apac","season":13,"losses":60,"createdTime":"2020-06-01T19:59:33","maxRankString":"GOLD 3","rankString":"SILVER 3"},{"maxMmr":3345,"death":282,"rank":12,"maxRank":17,"kills":222,"abandons":4,"mmr":2459,"wins":30,"region":"apac","season":14,"losses":30,"createdTime":"2020-06-01T19:59:33","maxRankString":"GOLD 2","rankString":"SILVER 4"},{"maxMmr":2568,"death":811,"rank":9,"maxRank":15,"kills":771,"abandons":4,"mmr":1901,"wins":55,"region":"apac","season":15,"losses":63,"createdTime":"2020-06-01T19:59:34","maxRankString":"SILVER 1","rankString":"BRONZE 2"},{"maxMmr":2838,"death":566,"rank":13,"maxRank":17,"kills":570,"abandons":0,"mmr":2336,"wins":70,"region":"apac","season":16,"losses":66,"createdTime":"2020-06-01T19:59:34","maxRankString":"GOLD 2","rankString":"SILVER 3"},{"maxMmr":2581,"death":1025,"rank":15,"maxRank":15,"kills":1140,"abandons":2,"mmr":2515,"wins":133,"region":"apac","season":17,"losses":117,"createdTime":"2020-06-01T19:59:34","maxRankString":"SILVER 1","rankString":"SILVER 1"}]}] 
    const {findAllByDisplayValue} = render(<Seasons seasons={mockup}/>)
  })

})

