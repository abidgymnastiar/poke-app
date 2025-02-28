import { useEffect, useState } from "react";
import { getPokemonTypeList } from "../utils/Api";

type PokemonType = {
  name: string;
  url: string;
};

const usePokemonTypes = (offset: number) => {
  const [pokemonType, setPokemonType] = useState<PokemonType[]>([]);

  useEffect(() => {
    const fetchPokemonType = async () => {
      const types = await getPokemonTypeList(offset, 50);
      setPokemonType(types.results);
    };

    fetchPokemonType();
  }, [offset]);

  return { pokemonType };
};

export default usePokemonTypes;
