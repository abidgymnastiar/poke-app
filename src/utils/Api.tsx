import axios from "axios";

export const API_URL = "https://pokeapi.co/api/v2";

export const getPokemon = async () => {
  try {
    const res = await axios.get(`${API_URL}/pokemon`);
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
