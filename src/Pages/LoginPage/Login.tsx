import React, { CSSProperties } from 'react';
import '../../App.css'
import styled, { StyledComponent } from 'styled-components';
import {R6Button, R6ButtonGroup, R6Br} from '../../R6Components'
import { withRouter } from "react-router-dom";
import {RouteComponentProps} from "react-router";


import {
    ProgressBar,
    Button,
    Container,
    Col,
    Row,
    Image,
    Form,

} from 'react-bootstrap'
import route from '../../route';

const CONTAINER = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    height:95vh;
`

const WHITEBOX = styled.section`
    width:100%;
    height:100%;
    background:white;
    display:flex;
    flex-direction:column;
    padding:30px;
    
    @media (min-width: 576px) {   
        width:400px;
        height:auto;
        border-radius:10px;
    }

    @media (min-width: 768px) { 
        width:400px;
        height:auto;
        border-radius:10px;

    }

    @media (min-width: 992px) { 
        width:400px;
        height:auto;
        border-radius:10px;

    }

    @media (min-width: 1200px) { 
        width:400px;
        height:auto;
        border-radius:10px;

    }
`;

//response로 나누기. 6칸 4칸 3칸 1칸...
//response로 
interface ResponsiveProps {
    default? : string
    xs?: string
    sm? : string
    md? : string
    lg?: string
}



//responseive한 그리드 만들어주는것
//6개 4개 2개 1개 container만들어주기. 사이즈를..
//12개를 기준으로 두는 리스폰시브 만들기
//리스폰시브 래퍼.

// CSS PROPERTIES -> to CSS
// 

//{children}
/**
 * 데코레이터패턴
 * https://johngrib.github.io/wiki/decorator-pattern/
 * 랩퍼패턴
 * 
 * decorator annotation. 
 * https://medium.com/@erwinousy/python-%EB%8D%B0%EC%BD%94%EB%A0%88%EC%9D%B4%ED%84%B0-decorator-%EC%82%AC%EC%9A%A9%EB%B2%95-7e8664279fe3
 * 
 * https://medium.com/@mustwin/responsive-react-9b56d63c4edc
 * https://www.npmjs.com/package/react-responsive-decorator
 * https://github.com/Microsoft/TypeScript/issues/3960
 * <REPONSIVE target={CSSPropeties}> 태그입니다.
 *  XS에 들어갈것을 차례로 넣어줍니다.
 *  XS에 들어갈것은... 변경될 값을 넣어주면 됩니다.??
 *  {CSSProperties.height.sm = abc}
 *  {CSSProperties.target.md = bcd}
 *  {CSSProperties.target.md = YOU}
 * 타겟에는 responsive를 할것을 만들어 둡니다.
 *  변경될 값을 써줍니다.
 *  {children}
 *  { 100px, 200px, 300px, 400px, 500px, 600px, 700px, 800px }
 *  xs = {}
 *  md = { }
 * <RESPONSIVE>
 * 리스폰시브하게 변경할 대상을 입력한다.
 * <RESPONSIVE css={CSSProperties}>
 * CSSProperies.
 * <>
 *  { xs : ABC
 *    md : BCD
 *    lg : DEF
 *   }
 *   
 *  default : {height: 100%, }
 *  xs : props.height
 *  md : 
 *  
 * <RESPOSIVE> 
 */
//

/**
 * Responsive("{weight:30}, 20, 30, 40, 50)
 * 
 */


// @Responsive(50)
// function hey() {    
// }

// function Responsive( ... args : any[]) {

// }
//https://fireship.io/lessons/ts-decorators-by-example/
//https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators




//@class@Link
//@Link {search}
//@Search {search}
//@Search {search}
//@Search {search}

//@ABC
//@BCD
//@Link('./flask');
//@Compilier옵션에서 항상 체크하기.
//App.tsx 

//@Router
//@Link

//@route()
//@router()

/**
 * @router('./src', false)
 * //이클래스는 더이상 
 * @router('./src', false) // 코드검사를 꺼둡니다. 랜더링시에 코드검사를 하지않고 읽습니다.
 * @router('./src', true) // 코드검사를 켜둡니다. 파일에서코드검사를 합니다.
 * createClass()를 대신 불러줍니다. render() 함수에 router함수를 작성해줍니다.
 * @route('./링크') // code 검사를 합니다. file read and write. // check file. takes some time.
 * //route('./src, false); // check every files in the folder and configure corret one.
 * //route('./src) withRouter and link. 
 * material ui로 만들어보는?
 * 데코레이터 yield
 */
/**
 * 
 * flask방식의 라우팅을 지원합니다.
 * @router
 * 클래스 위에 이 표식을 넣으면, 라우터로서 활동하게됩니다.
 * 후에 렌더 함수에 동적으로 라우팅 코드를 넣어줍니다. 
 * 
 * @route('./');
 * 각 클래스 위에는 라우터를 붙여줍니다.
 * 체크합니다. 모든 소스를 체크합니다.
 * 
 * @router('./src');
 * 라우터가 검사할 모든 소스를 체크합니다. 
 * 이 소스를 타입 스크립트의 검사가 모두 체크한 후에 Router코드를 동적으로 만들어줍니다.
 * constructor(){
 * }
 * 
 * 플라스크 스타일의 라우팅을 지원합니다.
 * @app.router("./src") 루트가 들어갈 각 페이지 컴포넌트 소스코드를 참조시킵니다.
 * @app.route("/home")
 * @app.route("/homepage")
 * @app.route("")
 * 
 * 클래스 위에 해당 라우트를 쓰면 변경됩니다.
 * @link
 * 
 * 작동방식:
 * 처음에 컴파일을 합니다.
 * router
 * 
 * @router() 해당을 기준으로 라우터가 셋팅됩니다.
 * @route('./') 라우트를 합니다.
 * 해당route를 가진 파일들은 컴파일링을 합니다.
 * 컴파일링 후에 동적으로 추가시켜줍니다.
 * withRouter{}에다가 추가적으로 history에 접근가능할 수 있는것을 만들어드립니다.
 * @withRouter("abcdefg");
 * @route를 하게되면 기존 withRouter + route를 한번에 하게됩니다. 
 */

/*
    class에 해당 style을 넣게해준다.
    @Responsive({CSSProperties,300}, 500, 600 ,700, 800, 900);
    style은 항상 들어가고있습니다.
    this.props.styled();
    class component를 하나 더 생성하는거죠<div className=""></div>
*/
// class abc {
//     //construtor에 this.RESPONSIVE를 넣어줍니다.

//     constructor(){

//     }

//     RESPONSIVE1 = () => {

//     }
//     //render안에 provider를 넣어주기
//     @Responsive()
//     yo(){
//         return(
//             {this.RESPONSIVE1()}
//         )
//     }

// }
// render안에 provider를 넣어주기
// @Responsive();
// @Reponsive => 클래스의 경우 따로 설정을 해줘야합니다.
// 특정 메소드 앞에 RESPONSIVE를 넣는경우 <RESPONSVE>라는 styledcomponent로 출력을 합니다.
// const ab = new abc();


const RESPONSIVE = styled.section<ResponsiveProps>`
    ${props => props.default}
    width:100%;
    height:100%;
    background:white;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media (min-width: 576px) {   
        width:400px;
        height:500px;
    }

    @media (min-width: 768px) { 
        width:400px;
        height:500px;
    }

    @media (min-width: 992px) { 
        width:400px;
        height:500px;
    }

    @media (min-width: 1200px) { 
        width:400px;
        height:500px;
    }
`;

RESPONSIVE.defaultProps = {
    default : "",
    xs : "",
    sm : "",
    md : "",
    lg : "",
}

function Responsive() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target.render);
        console.log(propertyKey);
        console.log(descriptor);
        target.render = function() {
            alert('abc');
            return target.render.apply(target.render);
        }
        
        //https://medium.com/@gigobyte/enhancing-react-components-with-decorators-441320e8606a
        //@Responsive({id, abc}, 0,0,0)
        //Wrapper
        // target.render.apply(target.render, (<RESPONSIVE></RESPONSIVE>))
        //CreateClass??
        //How..? WRAPPER.
        //@CLASS
        //@METHOD(VALUE)
        //id.
        //wrapper에 해당하는 친구에게 한다.
        //wrapper에게말한다. 야! 나 업데이트시켜줘! 
        //@RESPONSIVE(id,values) 이거대로 업데이트할거야.
        // 1. class update 
        // @Reponsive class
        // @Responsive render()
        // @Wrapper
    };
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/24077

@(route('/login') as any)
export default class Login extends React.Component<RouteComponentProps> {

    constructor(props:RouteComponentProps) {
        super(props);
    }

    static defaultProps = {
        test:true,
    }

    gotoSignUp(){
        this.props.history.push('/signup');
    }

    render() {
        return(
            <CONTAINER>
                <WHITEBOX>
                    <h3>로그인하기</h3>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>아이디</Form.Label>
                            <Form.Control type="text" placeholder="아이디를 입력하세요" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <R6Br size={5}/>
                        <R6Button size={'md'} fluid>
                                로그인
                        </R6Button>
                        <R6Br size={20}/>

                        </Form>
                        <span style={{fontSize:12}}> 아직 아이디가 없으시다구요? </span>
                        <R6Br size={5}/>
                        <R6Button theme="danger" size={'md'} onClick={this.gotoSignUp.bind(this)} fluid>
                            회원가입하기
                        </R6Button>

                </WHITEBOX>
            </CONTAINER>
        )
    }
}
