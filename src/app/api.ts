
import axios from 'axios';
 
export const fetchPokeApi = async(limit: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=10&limit=${limit}`);
  const data = await res.json();
  console.log(data)
  return { data: data } 
}

export const getAxiosPokeApi = async(limit: number) => {

  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=10&limit=${limit}`);
  const data = res.data.results;
  console.log(data)
  return { data: data } 
}