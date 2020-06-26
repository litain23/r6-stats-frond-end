import React from 'react';
import AntDesignErrorPage from './AntDesignErrorPage';
import { errorMessageCode } from '../../util/type';
import { withRouter , RouteComponentProps } from 'react-router-dom';

/**
 * 에러메세지 표현을 위해 따라줘야하는 인터페이스 입니다.
 */
export interface ErrorPagePresentable {
    getErrorViewWhen(errorCode : errorMessageCode, message?: string, onClick?:()=>void, goBack?:()=>void):JSX.Element;
}

/**
 * 에러메세지 컴포넌트를
 */
interface ErrorPageProps  {
    /** HTTP 에러 코드 */
    errorCode:errorMessageCode,
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
class ErrorPage extends React.Component<ErrorPageProps & RouteComponentProps> implements ErrorPagePresentable {
    
    
    goBack(){
        this.props.history.push('/');
        // this.props.history.goBack();
    }

    getErrorViewWhen(errorCode : errorMessageCode, message?: string, onClick?:()=>void, goBack?:()=>void): JSX.Element {

        if (this.props.customView) {
            return this.props.customView?.getErrorViewWhen(errorCode,message,onClick,this.goBack.bind(this));
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

export default withRouter(ErrorPage);


type designType = "antd" | "serverError" | null

export function createErrorPageComponent (type: designType, errorCode: errorMessageCode): React.ComponentClass { 

    let customView: ErrorPagePresentable | undefined;

    switch(type) {
        case "antd":
            customView = new AntDesignErrorPage();
            break;
        case "serverError":
            customView = new AntDesignErrorPage();
            break;
        default:
            customView = new AntDesignErrorPage();
            break;
    }
    
    return withRouter(class extends React.Component<RouteComponentProps> {
        render(){
            return(
                <ErrorPage 
                    location={this.props.location}
                    match={this.props.match} 
                    history={this.props.history}
                    errorCode={errorCode}
                    customView={customView}
                ></ErrorPage>
            )
        }
    })
}