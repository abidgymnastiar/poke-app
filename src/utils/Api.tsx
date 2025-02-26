import axios from "axios";

export const API_URL = "https://pokeapi.co/api/v2";

interface PokemonListResponse {
  results: { name: string; url: string }[];
}
export const getPokemon = (callback: (data: PokemonListResponse) => void) => {
  axios
    .get(`${API_URL}/pokemon`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => console.error("Error fetching data:", err));
};
