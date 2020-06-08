import React from 'react';
import './App.css';
// import SearchBar from './R6Components/SearchBar/SearchBar';

// import Landing from './Pages/LandingPage/Landing';
// import Search from './Pages/SearchPage/Search'
// import Login from './Pages/LoginPage/Login'
// import SignUp from './Pages/LoginPage/SignUp'
// import validation from './Pages/LoginPage/validation'

// import { Button } from 'antd';

// import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { R6Button } from './R6Components';

//https://runkiss.blogspot.com/2020/02/react-bootstrap-with-navbar-react.html
//https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together
//https://itnext.io/a-react-router-from-scratch-in-typescript-f0eec6ccb293
import Search from './Pages/SearchPage/Search'
import Landing from './Pages/LandingPage/Landing'
import Profile from './Pages/SearchPage/Profile'

import { Button } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import router from './router';
import { Layout, Menu, Breadcrumb } from 'antd';
import Login from './Pages/LoginPage/Login';
import { SearchOutlined} from '@ant-design/icons';
import SignUp from './Pages/LoginPage/SignUp';
import SignupReseult from './Pages/LoginPage/SignupResult';

const { Header, Content, Footer } = Layout;


// @router

// const abc = () => {
//   return(
//     <Button icon={<SearchOutlined />} type="primary"> 안녕 </Button>
//   )
// }


// export default abc;

class App extends React.Component {
  render(){
    return (
      <>
    {/* <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 0px'}}>
        <div style={{minHeight:"100vh"}}>
          <Search></Search>
        </div>
      </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout> */}
     {/* <Landing></Landing> */}
           <Search></Search>
      </>   
    );
  }
}
export default App;


// async function AppRouter() {
//   const abc = useHistory();
//   //abc.push('/landing:id');
//   //spring이 검사하는 방법.
//   //
  
//   // req.keys().map(key => {
//   //   const name = key.match(/\w+/)[0];
//   //   return Vue.component(name, req(key))
//   // });



//   const req = require.context('./Pages/', true, /\.(tsx)$/i);
//   const comported = [];
//   for(const key of req.keys()) {
//       const check = key.match(/.*?(?=.tsx)/);
//       if(check) {
//           const abc = check[0].replace("./", "./Pages/")
//           const result = await import(`${abc}`)
//           comported.push(result);
//       }
//   } 

//   console.log(comported);

//   // const req = require.context('./Pages/', true, /\.(tsx)$/i);
//   // // import('./Pages/LoginPage/Login')
//   // const abcd = './Pages/LoginPage/Login'

//   // req.keys().map(key => {
//   //   const check = key.match(/.*?(?=.tsx)/);
//   //   if(check) {
//   //     const abc = check[0].replace("./", "./Pages/")
//   //     const bcd = import(`${abc}`);
//   //     console.log(bcd);
//   //     // .then( module => 
//   //     //     console.log(module.defaultProps)
//   //     //    )
//   //   }})



// }



