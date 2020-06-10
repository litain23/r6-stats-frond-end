import React from 'react';
import './App.css';

import Search from './Pages/SearchPage/Search'
import Landing from './Pages/LandingPage/Landing'

import 'antd/dist/antd.css';
import './index.css';

import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 576px) {
        max-width: 540px;
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }

    @media (min-width: 992px) {
        max-width: 960px;
    }

    @media (min-width: 1200px) {
        max-width: 1140px;
    }
`;

class App extends React.Component {
  render(){
    return (
      <Container>
        <Search></Search>
      </Container>
    );
  }
}
export default App;