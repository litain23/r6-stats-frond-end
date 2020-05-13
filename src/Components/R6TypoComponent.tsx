import React, { CSSProperties } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Search from '../Pages/Search';

interface Props {
    /** Typography 엘리먼트에 들어갈 푸터 부분입니다. */
    header: string| number,
    /** Typography 엘리먼트에 중간에 들어가서 강조될 부분입니다. , 를 제외한 특수기호들은 모두 작게 처리되며, 1개의 특수기호만 허용됩니다. */
    body: string | number,
    /** Typography 엘리먼트에 들어갈 푸터 부분입니다. */
    footer: string| number,
    fontColor?: string
}

type bodyString = {
    sign? : string,
    string : string
}

/**
 * Typograph의 형태의 뷰를 만들어주는 컴포넌트입니다.
 * 
 * - `body`에 들어가는 특수문자는 총 1개까지 허용이 되고 작게 표시됩니다.
 * - 특수문자를 제외한 숫자, 문자는 정상적으로 강조 표기 됩니다.
 * - `,`(comma) `/` `.` 는 예외적으로 정상 강조 표기 됩니다.
 */

export default class R6TypoComponent extends React.Component<Props> {

    static defaultProps = {
        fontColor : 'white'
    }

    signParser(input : string | number ): bodyString {
        let string: string;

        if (typeof input == 'number') {
            string = input.toString();
        } else {
            string = input;
        }

        let pattern:RegExp = /[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9,./:]/gi;
        const symbols = string.search(pattern);
        if (symbols) {
            return { sign : string[symbols], string: string.replace(pattern, "")}
        } else {
            return { sign : undefined, string: "abc" }
        }
    }

    render(){
        const parsedString: bodyString = this.signParser(this.props.body);
        const header : CSSProperties = { fontSize: '20px', fontWeight:"bold"}
        const figure : CSSProperties = { fontSize: '60px', fontWeight: "bolder", marginTop:'-20px', letterSpacing:'-3px'}
        const sign : CSSProperties = { fontSize: '20px', fontWeight: "bolder", marginLeft:'5px'}
        const bottom : CSSProperties = { fontSize: '18px', fontWeight:'lighter', marginTop:'-20px'}
        
        return(

            <div style={{display:"flex", flexDirection:'column', color:this.props.fontColor}}>
                <div style={header}>
                    {this.props.header}
                </div>
                <div style={figure}>
                    {parsedString.string}<text style={sign}>{parsedString.sign}</text>
                </div>
                <div style={bottom}>
                    {this.props.footer}
                </div>

            </div>
      
        )
    }
}
