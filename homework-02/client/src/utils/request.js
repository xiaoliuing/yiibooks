import axios from 'axios';
import { baseUrl } from './index';

export default async (url, method='get', data={}) => {
  let options = {};
  if(method === 'post') options.data = data;
  return await axios({
    url: baseUrl+url,
    method,
    ...options
  })
}