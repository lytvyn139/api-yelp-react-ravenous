const apiKey = '🦊';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(biz => ({
          id: biz.id,
          imageSrc: biz.image_url,
          name: biz.name,
          address: biz.location.address1,
          city: biz.location.city,
          state: biz.location.state,
          zipCode: biz.location.zip_code,
          category: biz.categories[0].title,
          rating: biz.rating,
          reviewCount: biz.review_count
        }));
      }
    });
  }
};

export default Yelp;