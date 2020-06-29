import { APIObservable, urlConverter } from "./API"

describe('URL COVERT TEST', () => {

    /**
     * 최소조건
     * 1) HTTP/HTTPS 가 붙어있어야할것.
     * 2) //가 연속으로 있으면 안될것.
     * 3) * 서버와 연결될지 안될지는 체크하지않는다. *
     * 4) 에러가 나지 말아야할것.
     */
    it('AT LEAST FETCHALBE LIST', () => {
        expect(()=>{urlConverter('/')}).not.toThrow(Error);
        expect(urlConverter('/')).toContain("http")
    })

})

describe('APIObservable TEST', () => {
    //https://stackoverflow.com/questions/50698405/testing-observables-with-jest
    /**
     * 최소조건
     * 1) Observable이 나오는가? => 후처리는 핫리로딩으로 테스트합니다.
     * 2) Observable의 작동여부, 오퍼레이터의 작동여부는 로직 체크단계에서 체크하지않습니다.
     */
    expect(()=>{APIObservable<{}>("http://invalid.com")}).not.toThrow()
})