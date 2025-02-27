import pokemon from "../../../assets/Hero/1.svg";

function CardDetailHero() {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-28">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-9">
              <h1 className="font-sans font-bold text-5xl capitalize">
                bulbasaur
              </h1>
              <div className="w-max px-5 py-1  bg-green-500 ">
                <h1 className="font-sans font-medium text-lg text-white">
                  Grass
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-sans font-semibold text-xl text-slate-500">
                Statistik
              </h1>
              <div className="flex flex-col gap-1">
                <p className="font-sans font-medium text-lg text-black">
                  Hp : 23
                </p>
                <p className="font-sans font-medium text-lg text-black">
                  Attack : 23
                </p>
                <p className="font-sans font-medium text-lg text-black">
                  Defense : 23
                </p>
                <p className="font-sans font-medium text-lg text-black">
                  Special-defense : 23
                </p>
                <p className="font-sans font-medium text-lg text-black">
                  Speed : 23
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img className="w-[500px]" src={pokemon} alt="" />
        </div>
      </div>
    </>
  );
}
export default CardDetailHero;
