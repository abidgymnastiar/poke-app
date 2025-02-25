import { useHover } from "../../../hooks/useHover";
import CardHeroBedge from "./CardHeroBedge";
import CardHeroImg from "./CardHeroImage";
import CardHeroStats from "./CardHeroStats";
import CardHeroTitle from "./CardHeroTitle";

function CardHero() {
  const [isHovered, eventHandlers] = useHover();

  return (
    <div
      className="flex flex-col justify-between w-full h-full max-w-[200px] max-h-[341px] rounded-3xl border-[13px] border-primari-600 cursor-pointer"
      {...eventHandlers}
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
          <CardHeroTitle />
          <div className="w-max">
            <CardHeroBedge />
          </div>
        </div>
        <CardHeroStats />
      </div>
    </div>
  );
}

export default CardHero;
