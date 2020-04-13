import React from 'react';
import './Business.css';

class Business extends React.Component {
  render() { 
    const { otherBizProp } = this.props;
 
  //render func should be pure, shouldn't modify any components state,
  //always return same result each time it called
  return (
  <div className="Business">
  <div className="image-container">
    <img src={otherBizProp.imageSrc} alt=''/>
  </div>
  <h2>{otherBizProp.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{otherBizProp.address}</p>
      <p>{otherBizProp.city}</p>
      <p>{`${otherBizProp.state}${otherBizProp.zipCode}`}</p>
    </div>
  <div className="Business-reviews">
     <h3>{otherBizProp.category.toUpperCase()}</h3>
     <h3 className="rating">{`${otherBizProp.rating} stars`}</h3>
     <p>{`${otherBizProp.reviewCount} reviews`}</p>
  </div>
  </div>
  </div>
  )
}
}

export default Business;
/* 
import React from 'react';
import './Business.css';

class Business extends React.Component {
  render() { 
    const { business } = this.props;
 
  //render func should be pure, shouldn't modify any components state,
  //always return same result each time it called
  return (
  <div className="Business">
  <div className="image-container">
    <img src={business.imageSrc} alt=''/>
  </div>
  <h2>{business.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{business.address}</p>
      <p>{business.city}</p>
      <p>{`${business.state}${business.zipCode}`}</p>
    </div>
  <div className="Business-reviews">
     <h3>{business.category.toUpperCase()}</h3>
     <h3 className="rating">{`${business.rating} stars`}</h3>
     <p>{`${business.reviewCount} reviews`}</p>
  </div>
  </div>
  </div>
  )
}
}

export default Business;
*/