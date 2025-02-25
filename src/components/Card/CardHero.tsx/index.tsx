import CardHeroBedge from "./CardHeroBedge";
import CardHeroImg from "./CardheroImg";
import CardHeroStats from "./CardHeroStats";
import CardHeroTitle from "./CardHeroTitle";

function CardHero() {
  return (
    <>
      <div className="w-max rounded-3xl border-[13px] border-primari-600">
        <div className="p-5">
          <CardHeroImg />
        </div>
        <div className="flex flex-col gap-3 p-3">
          <div className="flex flex-row items-center gap-2">
            <CardHeroTitle />
            <div className="w-max">
              <CardHeroBedge />
            </div>
          </div>
          <CardHeroStats />
        </div>
      </div>
    </>
  );
}
export default CardHero;
