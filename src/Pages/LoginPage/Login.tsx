import React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import {RouteComponentProps} from "react-router";
import { Form, Input, Button, Space } from 'antd';
import { Typography } from 'antd';
import { UserOutlined, UserAddOutlined, LockOutlined } from '@ant-design/icons';
const { Title } = Typography


const CONTAINER = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    height:95vh;
`

const WHITEBOX = styled.section`
    width:100%;
    height:100%;
    background:black;
    display:flex;
    flex-direction:column;
    padding:30px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    @media (min-width: 576px) {   
        width:500px;
        height:auto;
        border-radius:10px;
    }

    @media (min-width: 768px) { 
        width:500px;
        height:auto;
        border-radius:10px;

    }

    @media (min-width: 992px) { 
        width:500px;
        height:auto;
        border-radius:10px;

    }

    @media (min-width: 1200px) { 
        width:500px;
        height:auto;
        border-radius:10px;

    }
`;


class Login extends React.Component<RouteComponentProps> {


    gotoSignUp(){
        this.props.history.push('/signup');
    }

    render() {
        return(
            <>
            <CONTAINER>
                <WHITEBOX>
                    <Title> 로그인하기 </Title>
                    <Form
                        name="normal_login"
                        className="login-form"
                        >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '아이디를 입력해주세요' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Space direction="vertical" size={"middle"} style={{width:"100%"}}>
                                <Button type="primary" htmlType="submit" style={{width:"100%" }}>
                                로그인하기
                                </Button>
                                <Button onClick={()=>{this.gotoSignUp()}}icon={<UserAddOutlined />} type="default" style={{ width:"100%"}}>
                                혹은 지금 바로 가입하기
                                </Button>
                            </Space>
                        </Form.Item>
                        </Form>
                 

                </WHITEBOX>
            </CONTAINER>
            </>
        )
    }
}

export default withRouter(Login);