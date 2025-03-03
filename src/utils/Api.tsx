import axios from "axios";
// export const API_URL = "https://pokeapi.co/api/v2";

export const API_URL = import.meta.env.VITE_API_URL;


export const getPokemon = async (offset = 0, limit = 2000) => {
  try {
    const res = await axios.get(`${API_URL}/pokemon?offset=${offset}&limit=${limit}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
  
};

export const getPokemonById = async (id: number) => {
  try {
    const res = await axios.get(`${API_URL}/pokemon/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonTypeList = async (offset = 0, limit=30) => {
  try {
    const res = await axios.get(`${API_URL}/type?offset=${offset}&limit=${limit}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};