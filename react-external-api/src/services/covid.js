import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.covid19api.com'
});

export const loadSummary = () => {
  return instance.get('/summary').then(response => {
    const data = response.data;
    return data;
  });
};

export const loadCountry = id => {
  return instance.get(`/country/${id}`).then(response => {
    const data = response.data;
    return data;
  });
};

// Making a post request
// export const addCountryData = (body) => {
//   return axios.post('https://example.org/add-country-data', body).then(response => {
//     const data = response.data;
//     return data;
//   });
// };

// addCountryData({
//   Country: 'Portugal',
//   Slug: 'portugal':
//   Confirmed: 20000
// });

// Equivalent logic in node
// exports.loadCountry = loadCountry;
// A different way to write it in react
// export { loadCountry };
