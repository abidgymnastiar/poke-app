import {  useEffect, useState } from "react";
import usePokemonList from "../../../hooks/usePokemonList";
import usePokemonDetails from "../../../hooks/usePokemonDetails";
import CardHeroBedge from "./CardHeroBedge";
import CardHeroImg from "./CardHeroImage";
import CardHeroStats from "./CardHeroStats";
import CardHeroTitle from "./CardHeroTitle";
// import { getPokemon, getPokemonById } from "../../../utils/Api";
import CardHeroAbilities from "./CardHeroAbilities";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";


function CardHero() {

  const [offset, setOffset] = useState(0);
  const limit = 10;
  const navigate = useNavigate();

  const{pokemonData} = usePokemonList({offset, limit});
  const{pokemonDetails} = usePokemonDetails({pokemonData});

  const nextPage = () => {
    setOffset(offset + limit);
  };

  const prevPage = () => {
    setOffset(offset - limit);
  };

  useEffect(() => {
    console.log(pokemonDetails);
  }, [pokemonDetails]); 


  return (
    (
      <>
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          {pokemonDetails.map((pokemon) => (
            <div
              className="group flex flex-col justify-between w-full h-full max-w-[200px] rounded-3xl border-[13px] border-primari-600 cursor-pointer"
              key={pokemon.id}
              onClick={() => navigate(`/detail/${pokemon.id}`)}
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
                    {pokemon.types.slice(0, 1).map((item) => (
                      <CardHeroBedge key={pokemon.id} types={item.type.name} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <CardHeroStats
                    hp={pokemon.stats[0].base_stat}
                    atk={pokemon.stats[1].base_stat}
                    def={pokemon.stats[2].base_stat}
                  />
                  <div className="flex flex-row gap-1 flex-wrap">
                    {pokemon.abilities.slice(0, 1).map((item) => (
                      <div key={pokemon.id}>
                        <CardHeroAbilities abiliti={item.ability.name} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <Button text="Prev" onClick={prevPage} disabled={offset === 0} />
          <Button text="Next" onClick={nextPage} />
        </div>
      </>
    )
  );
}

export default CardHero;
