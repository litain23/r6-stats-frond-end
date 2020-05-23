import React from 'react';
import './App.css';
import SearchBar from './R6Components/SearchBar/SearchBar';

import Landing from './Pages/LandingPage/Landing';
import Search from './Pages/SearchPage/Search'
import Login from './Pages/LoginPage/Login'
import SignUp from './Pages/LoginPage/SignUp'
import validation from './Pages/LoginPage/validation'



import { Navbar, FormControl,Button, Nav, Form} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import router from './router';
import { R6Button } from './R6Components';
// import router from './router';

// function App() {

//   const data = [
//     { name: 'food', uv: -2000, pv: -2013, amt: -4500, bmk: -4301, time: 1, uvError: [100, 50], pvError: [110, 20] },
//     { name: 'cosmetic', uv: 3300, pv: 2000, amt: 6500, bmk: 2000, time: 2, uvError: 120, pvError: 50 },
//     { name: 'storage', uv: 3200, pv: 1398, amt: 5000, bmk: 3000, time: 3, uvError: [120, 80], pvError: [200, 100] },
//     { name: 'digital', uv: 2800, pv: 2800, amt: 4000, bmk: 1500, time: 4, uvError: 100, pvError: 30 },
//   ];
  
//   return (
    
//     <div>
        

//       {/* <Landing>
        
//       </Landing> */}
//       <Search/>

//       {/* <SearchBar isLarge={true}>
//       </SearchBar> */}
    
//       {/* <div id="video_box">
//       <div id="video_overlays"></div> */}
//     </div>
//   );
// }


//https://runkiss.blogspot.com/2020/02/react-bootstrap-with-navbar-react.html
//https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together
//https://itnext.io/a-react-router-from-scratch-in-typescript-f0eec6ccb293

//@Router

// @router('./source')
// class AppRouter extends React.Component {

// }


//@router() => if additional function is possible () => (someproblem) => {}

@router
class AppRouter extends React.Component {
  render(){
    return(
      <>
      {/* <Landing></Landing> */}
      {/* <Router> */}
      <Navbar style={{zIndex:8}} bg="primary" variant="dark">
      <Navbar.Brand href="#home">R6</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/landing"> 홈 </Nav.Link>
        <Nav.Link as={NavLink} to="/login"> 검색 </Nav.Link>
        <Nav.Link as={NavLink} to="/search">Pricing</Nav.Link>
      </Nav>
      <Form>
        <FormControl type="text" placeholder="Search" />
        <R6Button>Search</R6Button>
      </Form>
      </Navbar>
  
      {/* <Switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/vali" component={validation} />
  
        <Route component={Landing} />
      </Switch>
  
      </Router> */}
      </>
   
    )

  }
}


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

export default AppRouter;


