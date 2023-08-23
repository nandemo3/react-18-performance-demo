
import axios  from 'axios';

export const getLocalApi = async(name: string) => {
  const res = await fetch(`http://localhost:3001/hello?name=${name}`);
  const data = await res.json();
  return data
}

export const getAxiosLocalApi = async(name: string) => {
  const res = await axios.get(`http://localhost:3001/hello?name=${name}`);
  const data = res.data;
  return data
}
