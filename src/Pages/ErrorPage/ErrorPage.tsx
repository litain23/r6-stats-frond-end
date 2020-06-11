import React from 'react';

/**
 * 이 프로젝트에서 대응하고 있는 에러메세지 코드의 종류입니다.
 */
export type errorCodePresentType = 403|404|"403"|"404";

/**
 * 에러메세지 표현을 위해 따라줘야하는 인터페이스 입니다.
 */
export interface ErrorPagePresentable {
    getErrorViewWhen(errorCode : errorCodePresentType, message?: string, onClick?:()=>{}):JSX.Element;
}

/**
 * 기본 에러 대응을 위한 메세지 세트 입니다.
 */
export const defaultErrorMessageSet = {
    "403":"앗! 이 페이지에 접근할 수 있는 권한이 없습니다.",
    "404":"앗! 없는 페이지에 접근하였습니다."
}

/**
 * 에러메세지 컴포넌트를
 */
interface ErrorPageProps {
    /** HTTP 에러 코드 */
    errorCode:errorCodePresentType,
    /** 에러페이지에 표시할 메세지 (기본 에러페이지 사용시 출력) */
    message?: string,
    /** 에러 메세지 사용시에 사용할 버튼에 대한 이벤트 핸들러. (기본 에러페이지 사용시 활용)*/
    onClick?: () => {},
    /** 외부 라이브러리를 사용할 경우, `ErrorPagePresentable`을 따르는 객체를 외부에서 주입시켜줍니다. */
    customView?:ErrorPagePresentable,
}

/**
 * 일반 사용자가 잘못된 페이지로 접근했을때, 에러 메세지를 표현하기 위한 컴포넌트입니다.
 */
class ErrorPage extends React.Component<ErrorPageProps> implements ErrorPagePresentable{
    
    constructor(props:ErrorPageProps){
        super(props);
    }
    
    getErrorViewWhen(errorCode : errorCodePresentType, message?: string, onClick?:()=>{}): JSX.Element {

        if (this.props.customView) {
            return this.props.customView?.getErrorViewWhen(errorCode,message,onClick);
        } else {
            return (
                <div> 
                    <h1>{this.props.errorCode} error</h1> 
                    <p>{this.props.message}</p>
                </div>
            )
        }
    }

    render(){
        return(
            <>{this.getErrorViewWhen(this.props.errorCode, this.props.message, this.props.onClick)}</>
        )
    }
}

export default ErrorPage;