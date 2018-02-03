import axios from 'axios';

export function getAPOD(date = '') {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=nBO6O3ZFU07Rhf4JjkVa2Gzk9Wqw0kM5s8fGHxBr&date=${date}`);
}
