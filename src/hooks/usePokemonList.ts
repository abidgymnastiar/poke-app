import { useEffect, useState } from "react";
import { getPokemon } from "../utils/Api";

interface Pokemon {
  name: string;
  url: string;
}
interface usePokemonProps {
  offset: number;
  limit: number;
}

const usePokemonList = ({ offset, limit }: usePokemonProps) => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemon(offset, limit);
      setPokemonData(data.results);
    };
    fetchPokemon();
  }, [offset, limit]);

  return { pokemonData };
};
export default usePokemonList;
