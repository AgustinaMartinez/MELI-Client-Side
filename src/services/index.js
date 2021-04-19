import axios from 'axios';

export const getData = query => {
  const response = axios.get(`/api/items?q=${query}`)
  .then(res => res.data)
  .catch(err => console.log(err));
  return response;
}

export const getDetailData = id => {
  const response = axios.get(`/api/items/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err));
  return response;
};
