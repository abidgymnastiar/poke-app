import { useParams } from "react-router-dom";
import usePokemonDetails from "../../../hooks/usePokemonDetails";

function CardDetailHero() {
  const { id } = useParams();
  const { pokemonDetails } = usePokemonDetails({
    pokemonData: [{ url: `https://pokeapi.co/api/v2/pokemon/${id}/` }],
  });

  const pokemon = pokemonDetails?.find((p) => p.id === Number(id));

  if (!pokemon) {
    return <p className="text-center text-xl font-semibold">Loading...</p>;
  }

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-28">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-9">
              <h1 className="font-sans font-bold text-5xl capitalize">
                {pokemon.name}
              </h1>
              <div className="flex flex-row gap-3">
                {pokemon.types.map((item, index) => (
                  <div className="w-max px-5 py-1  bg-green-500 " key={index}>
                    <p className="font-sans font-semibold text-lg text-white">
                      {item.type.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-sans font-semibold text-xl text-slate-500">
                Statistik
              </h1>
              <div className="flex flex-col gap-1">
                <p className="font-sans font-medium text-lg text-black">
                  Hp : {pokemon.stats[0].base_stat}
                </p>
                <p className="font-sans font-medium text-lg text-black">
                  Attack : {pokemon.stats[1].base_stat}
                </p>
                <p className="font-sans font-medium text-lg text-black">
                  Defense : {pokemon.stats[2].base_stat}
                </p>
                <p className="font-sans font-medium text-lg text-black">
                  Special-attack : {pokemon.stats[3].base_stat}
                </p>
                <p className="font-sans font-medium text-lg text-black">
                  Special-defence : {pokemon.stats[4].base_stat}
                </p>
                <p className="font-sans font-medium text-lg text-black">
                  Speed : {pokemon.stats[5].base_stat}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img
            className="w-[500px]"
            src={pokemon.sprites?.other?.["official-artwork"]?.front_default}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
export default CardDetailHero;
