
import axios from 'axios';

interface ResponseProps {
  data: any
}
 
export const fetchPokeApi  = async(limit: number): Promise<ResponseProps> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=10&limit=${limit}`);
  const data = await res.json();
  return { data: data } 
}

export const getAxiosPokeApi = async(limit: number) => {

  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=10&limit=${limit}`);
  const data = res.data.results;
  console.log(data)
  return { data: data } 
}