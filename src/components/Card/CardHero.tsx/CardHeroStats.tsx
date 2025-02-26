interface CardHeroProps {
  hp: number;
  atk: number;
  def: number;
}

function CardHeroStats({hp, atk, def} : CardHeroProps) {
  return (
    <>
      <div className="flex flex-row gap-1">
        <div className="w-max py-[2px] px-1 border border-primari-500 rounded-[4px]">
          <p className="font-sans text-[10px]">HP {hp}</p>
        </div>
        <div className="w-max py-[2px] px-1 border border-primari-500 rounded-[4px]">
          <p className="font-sans text-[10px]">ATK {atk}</p>
        </div>
        <div className="w-max py-[2px] px-1 border border-primari-500 rounded-[4px]">
          <p className="font-sans text-[10px]">DEF {def}</p>
        </div>
      </div>
    </>
  );
}
export default CardHeroStats;
