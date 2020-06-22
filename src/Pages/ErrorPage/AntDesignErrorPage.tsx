
import { Result, Button } from 'antd';
import { ErrorPagePresentable} from './ErrorPage'
import React from 'react';
import { getErrorMessage , errorMessageCode } from '../../util/type';

export default class AntDesignErrorPage implements ErrorPagePresentable{

    errorCode?: errorMessageCode;

    constructor(errorCode?: errorMessageCode){
        if (errorCode) {
            this.errorCode = errorCode;
        }
    }
    
    getErrorViewWhen(errorCode : errorMessageCode, message?: string, onClick?:()=>void ,goBack?:()=>void): JSX.Element {
        
        return(
        <Result
            status={404}
            title={errorCode}
            subTitle={getErrorMessage(errorCode)}
            extra={<Button type="primary" onClick={goBack}>Go back</Button>}
        /> 
      )
    }
} 

