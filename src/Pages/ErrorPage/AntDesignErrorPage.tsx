
import { Result, Button } from 'antd';
import {errorCodePresentType, defaultErrorMessageSet, ErrorPagePresentable} from './ErrorPage'
import React from 'react';

export default class AntDesignErrorPage implements ErrorPagePresentable{

    errorCode?: errorCodePresentType;

    constructor(errorCode?: errorCodePresentType){
        if (errorCode) {
            this.errorCode = errorCode;
        }
    }
    
    getErrorViewWhen(errorCode : errorCodePresentType, message?: string, onClick?:()=>{}): JSX.Element {
        /** TO-DO : 만약 현재 프로젝트에서 500등의 HTTP REQUSET도 대응한다고 했을때 어떻게 확장할것인가? */
        return(
        <Result
            status={errorCode}
            title={errorCode}
            subTitle={defaultErrorMessageSet[errorCode]}
            extra={<Button type="primary" onClick={onClick}>Go back</Button>}
        /> 
      )
    }

} 
