import { useState, useCallback, useEffect } from "react";
import CardHeroBedge from "./CardHeroBedge";
import CardHeroImg from "./CardHeroImage";
import CardHeroStats from "./CardHeroStats";
import CardHeroTitle from "./CardHeroTitle";
import CardHeroAbilities from "./CardHeroAbilities";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";
import usePokemonList from "../../../hooks/usePokemonList";
import usePokemonDetails from "../../../hooks/usePokemonDetails";
// import Checkbox from "./Filter/Checkbox";
// import usePokemonTypes from "../../../hooks/usePokemonType";

function CardHero() {
  const [offset, setOffset] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  // const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const limit = 1500;
  const limitShow = 10;

  const navigate = useNavigate();

  const { pokemonData } = usePokemonList({ offset, limit });
  const { pokemonDetails } = usePokemonDetails({ pokemonData });
  // const { pokemonType } = usePokemonTypes(offset);

  useEffect(() => {
    console.log(pokemonData);
  }, [pokemonData]);

  // Fungsi untuk mengubah halaman
  const nextPage = useCallback(() => setOffset((prev) => prev + limitShow), []);
  const prevPage = useCallback(
    () => setOffset((prev) => Math.max(0, prev - limitShow)),
    []
  );

  const filteredPokemon = pokemonDetails.filter((pokemon) => {
    const matchesSearch = pokemon.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    // const matchesType =
    //   selectedTypes.length === 0 ||
    //   pokemon.types.some((t) => selectedTypes.includes(t.type.name));
    return matchesSearch;
  });

  // Jika ada pencarian, tampilkan semua hasil yang cocok, jika tidak, gunakan pagination
  const displayedPokemon = searchQuery
    ? filteredPokemon.slice(offset, offset + limitShow)
    : pokemonDetails.slice(offset, offset + limitShow);
  // Menentukan jumlah total halaman
  const totalPages = searchQuery
    ? Math.ceil(filteredPokemon.length / limitShow)
    : Math.ceil(pokemonDetails.length / limitShow);

  // Menentukan halaman saat ini
  const currentPage = searchQuery
    ? Math.ceil(offset / limitShow) + 1
    : Math.min(Math.ceil(offset / limitShow) + 1, totalPages);

  return (
    <>
      <div className="flex flex-col items-center gap-3 justify-center mb-5">
        <input
          type="text"
          placeholder="Cari Pokémon..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-400 rounded-md px-4 py-2 w-1/2"
        />
        {/* <div className="flex flex-row justify-center items-center gap-5 mt-5">
          <Button text="Prev" onClick={prevPage} disabled={offset === 0} />
          <span className="text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            text="Next"
            onClick={nextPage}
            disabled={
              searchQuery
                ? offset + limitShow >= filteredPokemon.length
                : offset + limitShow >= pokemonDetails.length
            }
          />
        </div> */}
        {/* <div className="flex flex-row flex-wrap justify-center gap-9 w-max-[40%]">
          {pokemonType.map((type) => (
            <Checkbox
              key={type.name}
              label={type.name}
              checked={selectedTypes.includes(type.name)}
              onChange={(checked) =>
                setSelectedTypes((prev) =>
                  checked
                    ? [...prev, type.name]
                    : prev.filter((t) => t !== type.name)
                )
              }
            />
          ))}
        </div> */}
      </div>

      <div className="flex flex-row flex-wrap gap-5 justify-center">
        {displayedPokemon.map((pokemon) => (
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
                    <CardHeroBedge
                      key={item.type.name}
                      types={item.type.name}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <CardHeroStats
                  hp={pokemon.stats[0]?.base_stat || 0}
                  atk={pokemon.stats[1]?.base_stat || 0}
                  def={pokemon.stats[2]?.base_stat || 0}
                />
                <div className="flex flex-row gap-1 flex-wrap">
                  {pokemon.abilities.slice(0, 1).map((item) => (
                    <div key={item.ability.name}>
                      <CardHeroAbilities abiliti={item.ability.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-row justify-center items-center gap-5 mt-5">
        <Button text="Prev" onClick={prevPage} disabled={offset === 0} />
        <span className="text-lg font-semibold">Page {offset / limit + 1}</span>
        <Button text="Next" onClick={nextPage} />
      </div> */}
    </>
  );
}

export default CardHero;
