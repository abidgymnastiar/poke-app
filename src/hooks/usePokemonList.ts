import { useEffect, useState } from "react";
import { getPokemon } from "../utils/Api";
import { Pokemon, usePokemonProps } from "../Types/pokemonList";

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
