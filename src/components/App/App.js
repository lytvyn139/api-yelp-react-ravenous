import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BussinesList from '../BusinessList/BusinessList';


class App extends React.Component {
  render() {
    return (
      <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BussinesList />
    </div>
    );
  }
}

export default App;
