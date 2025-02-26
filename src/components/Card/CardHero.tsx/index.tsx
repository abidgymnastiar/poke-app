import { useEffect, useState } from "react";
import CardHeroBedge from "./CardHeroBedge";
import CardHeroImg from "./CardHeroImage";
import CardHeroStats from "./CardHeroStats";
import CardHeroTitle from "./CardHeroTitle";
import { getPokemon, getPokemonById } from "../../../utils/Api";
import CardHeroAbilities from "./CardHeroAbilities";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetail {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other?: {
      ["official-artwork"]?: {
        front_default: string;
      };
    };
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

function CardHero() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemon();
      setPokemonData(data.results);
    };
    fetchPokemon();
  }, []);

  useEffect(() => {
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

  return (
    console.log(pokemonDetails),
    (
      <div className="flex flex-row flex-wrap gap-5 justify-center">
        {pokemonDetails.map((pokemon) => (
          <div
            className="group flex flex-col justify-between w-full h-full max-w-[200px] rounded-3xl border-[13px] border-primari-600 cursor-pointer"
            key={pokemon.id}
          >
            <div className="p-5 overflow-hidden mx-auto">
              <div className="transform transition-transform duration-300 ease-in-out group-hover:scale-125">
                <CardHeroImg
                  src={
                    pokemon.sprites.other?.["official-artwork"]
                      ?.front_default || pokemon.sprites.front_default
                  }
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 p-3 bg-primari-300 rounded-b-2xl">
              <div className="flex flex-row items-center gap-2">
                <CardHeroTitle name={pokemon.name} />
                <div className="w-max">
                  {pokemon.types.slice(0, 1).map((item, index) => (
                    <CardHeroBedge key={index} types={item.type.name} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <CardHeroStats hp={pokemon.stats[0].base_stat} atk={pokemon.stats[1].base_stat} def={pokemon.stats[2].base_stat} />
                <div className="flex flex-row gap-1 flex-wrap">
                  {pokemon.abilities.slice(0, 1).map((item, index) => (
                    <div key={index}>
                      <CardHeroAbilities abiliti={item.ability.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
}

export default CardHero;
