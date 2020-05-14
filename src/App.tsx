import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import Landing from './Pages/Landing';
import Search from './Pages/Search'
import {Card,Button} from 'react-bootstrap'


function App() {

  const data = [
    { name: 'food', uv: -2000, pv: -2013, amt: -4500, bmk: -4301, time: 1, uvError: [100, 50], pvError: [110, 20] },
    { name: 'cosmetic', uv: 3300, pv: 2000, amt: 6500, bmk: 2000, time: 2, uvError: 120, pvError: 50 },
    { name: 'storage', uv: 3200, pv: 1398, amt: 5000, bmk: 3000, time: 3, uvError: [120, 80], pvError: [200, 100] },
    { name: 'digital', uv: 2800, pv: 2800, amt: 4000, bmk: 1500, time: 4, uvError: 100, pvError: 30 },
  ];
  
  return (
    
    <div>
        

      {/* <Landing>
        
      </Landing> */}
      <Search/>

      {/* <SearchBar isLarge={true}>
      </SearchBar> */}
    
      {/* <div id="video_box">
      <div id="video_overlays"></div> */}
    </div>
  );
}

export default App;
