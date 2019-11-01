import React from 'react';
import './App.css';
import News from './components/News';
import Ad from './components/Ad';
import SearchBlock from './components/SearchBlock';
import Banner from './components/Banner';
import Columns from './components/Columns';

function App() {
  return (
    <div className="App">
      <div className="prolog">
        <News />
        <Ad />
      </div>
      <SearchBlock />
      <Banner />
      <Columns />
    </div>
  );
}

export default App;
