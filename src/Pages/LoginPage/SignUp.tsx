import React from 'react';
import styled from 'styled-components';
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Typography
  } from 'antd';
  import { QuestionCircleOutlined } from '@ant-design/icons';
  
  
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

interface State {
    id : string
    pwd:string
    pwdcheck:string
    pwdvalidate:boolean
    pwdcheckvalidate:boolean
    totalvalidate:boolean

}

export default class SignUp extends React.Component<{},State> {
    
    
    constructor(props:{}) {
        super(props)
        this.state = {
            id:"",
            pwd:"",
            pwdcheck:"",
            pwdvalidate:false,
            pwdcheckvalidate:false,
            totalvalidate:false
        }

    }


    submithandler(e: React.FormEvent<HTMLFormElement>) {

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
        }
        this.setState({totalvalidate:true})


    }

    handler(e: React.ChangeEvent<HTMLInputElement>){

        if (e.target.id === "id") {
            this.setState({id:e.target.value})
        } else if (e.target.id === "pwd") {
            const validator = (e.target.value.length >= 4) ? false : true;
            const validator2 = (( e.target.value === this.state.pwdcheck) && this.state.pwdcheck !== "" ) ? false : true;
            this.setState({pwd:e.target.value, pwdvalidate:validator, pwdcheckvalidate:validator2})
        } else if (e.target.id === "pwdcheck") {
            const validator2 = ((e.target.value === this.state.pwd) && this.state.pwdcheck !== "" ) ? false : true;
            this.setState({pwdcheck:e.target.value, pwdcheckvalidate:validator2})
        } else {
        }
        //stop handling it.
    }
    
    render() {

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 4 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 20 },
            },
          };
          const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };

          

        return(
            <CONTAINER>
                <WHITEBOX>
                    <Title> 회원가입하기 </Title>
                    <Form
      name="register"
      scrollToFirstError
      {...formItemLayout}
    >

    <Form.Item
        name="nickname"
        label={"아이디"}
        rules={[{ required: true, message: '아이디를 입력해주세요', whitespace: true }]}
        hasFeedback
      >
        <Input />
      </Form.Item>



      <Form.Item
        name="password"
        label="암호"
        rules={[
          {
            required: true,
            message: '암호를 입력해주세요!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="암호확인"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: '암호를 입력해주세요!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('암호가 맞지 않습니다!');
            },
          }),
        ]
        }
      >
        <Input.Password />
      </Form.Item>



      <Form.Item
        name="email"
        label={
            <span>
              이메일&nbsp;
              <Tooltip title="이메일로 본인 인증메일을 보내드려요!">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
        rules={[
          {
            type: 'email',
            message: '이메일이 아닙니다. 올바른 이메일 형식을 사용해주세요',
          },
          {
            required: true,
            message: '이메일을 입력해주세요.',
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          { validator:(_, value) => value ? Promise.resolve() : Promise.reject('약관에 동의해주세요') },
        ]}
      >
        <Checkbox>
            <a href="">약관</a>에 동의합니다.
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" >
          Register
        </Button>
      </Form.Item>



    </Form>
                </WHITEBOX>
            </CONTAINER>
        )
    }
}