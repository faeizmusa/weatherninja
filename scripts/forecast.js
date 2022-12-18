const key = 'DeYaLQv48m3nD7npVfUnslDrskSwdiag';

const getCity = async city => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

getCity('kuala kedah')
  .then(data => console.log(data))
  .catch(err => console.log(err));
