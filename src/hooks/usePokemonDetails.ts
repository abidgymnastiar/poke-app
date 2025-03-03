import { useEffect, useState } from "react";
import { getPokemonById } from "../utils/Api";
import { PokemonDetail, usePokemonDetailsProps } from "../Types/pokemonDetails";

//dimasukkan ke types

// interface PokemonDetail {
//   id: number;
//   name: string;
//   sprites: {
//     front_default: string;
//     other?: {
//       ["official-artwork"]?: {
//         front_default: string;
//       };
//     };
//   };
//   abilities: {
//     ability: {
//       name: string;
//     };
//   }[];
//   types: {
//     type: {
//       name: string;
//     };
//   }[];
//   stats: {
//     base_stat: number;
//     stat: {
//       name: string;
//     };
//   }[];
// }

// interface usePokemonDetailsProps {
//   pokemonData: { url: string }[];
// }

const usePokemonDetails = ({ pokemonData }: usePokemonDetailsProps) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail[]>([]);

  useEffect(() => {
    if (!pokemonData || !Array.isArray(pokemonData) || pokemonData.length === 0)
      return;

    const fetchPokemonDetails = async () => {
      const details = await Promise.all(
        pokemonData.map(async (pokemon) => {
          const urlParts = new URL(pokemon.url).pathname.split("/");
          const pokemonId = urlParts[urlParts.length - 2];
          return await getPokemonById(Number(pokemonId));
        })
      );
      setPokemonDetails(details);
    };

    if (pokemonData.length > 0) {
      fetchPokemonDetails();
    }
  }, [pokemonData]);

  return { pokemonDetails };
};
export default usePokemonDetails;
