import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BussinesList from '../BusinessList/BusinessList';

const bizArray = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Luca\'s Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const otherBizProp = [bizArray, bizArray, bizArray, bizArray, bizArray, bizArray];
//otherBizProp = business

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BussinesList businesses={otherBizProp} />
    </div>
    );
  }
}


export default App;
