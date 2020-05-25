import { Result, Button } from 'antd';
import React from 'react';
import { notification } from 'antd';


export default class SignupReseult extends React.Component {

    componentDidMount(){
        notification.open({
            message: '본인 인증을 완료해주세요',
            description:
              '회원가입을 완료하기 위해서는 본인인증을 해야합니다. 지금바로 본인인증을 완료하세요!',
            onClick: () => {
              console.log('Notification Clicked!');
         }})
    }
    render(){

        return (
        <Result
            status="success"
            title="회원가입신청이 완료되었습니다!"
            subTitle="기입해주신 메일주소로 본인인증 메일을 보냈습니다. 메일을 확인하여 회원가입을 완료해주세요"
            extra={[
              <Button type="primary" key="console">
                Go Console
              </Button>,
              <Button key="buy">Buy Again</Button>,
            ]}

          />
          )
    }
}
