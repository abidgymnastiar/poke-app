import { useEffect, useState } from "react";
import { useHover } from "../../../hooks/useHover";
import CardHeroBedge from "./CardHeroBedge";
import CardHeroImg from "./CardHeroImage";
import CardHeroStats from "./CardHeroStats";
import CardHeroTitle from "./CardHeroTitle";
import { getPokemon } from "../../../utils/Api";

interface Pokemon {
  name: string;
  url: string;
}

function CardHero() {
  const [isHovered, eventHandlers] = useHover();
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemon((data) => {
      setPokemonData(data.results);
      console.log(data.results);
    });
  }, []);

  return (
    <div className="flex flex-row flex-wrap gap-5 justify-center">
      {pokemonData.map((pokemon) => {
        const urlParts = new URL(pokemon.url).pathname.split("/");
        const pokemonId = urlParts[urlParts.length - 2];
        console.log(pokemonId);
        return (
          <div
            className="flex flex-col justify-between w-full h-full max-w-[200px] rounded-3xl border-[13px] border-primari-600 cursor-pointer"
            {...eventHandlers}
            key={pokemonId}
          >
            <div className="p-5 overflow-hidden">
              <div
                className={`transform transition-transform duration-300 ${
                  isHovered ? "scale-125" : "scale-100"
                }`}
              >
                <CardHeroImg />
              </div>
            </div>
            <div className="flex flex-col gap-3 p-3 bg-primari-300 rounded-b-2xl">
              <div className="flex flex-row items-center gap-2">
                <CardHeroTitle name={pokemon.name} />
                <div className="w-max">
                  <CardHeroBedge />
                </div>
              </div>
              <CardHeroStats />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardHero;
