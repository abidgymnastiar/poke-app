function CardHeroStats() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-1">
          <div className="w-max py-[2px] px-1 border border-primari-500 rounded-[4px]">
            <p className="font-sans text-[10px]">HP 45</p>
          </div>
          <div className="w-max py-[2px] px-1 border border-primari-500 rounded-[4px]">
            <p className="font-sans text-[10px]">ATK 45</p>
          </div>
          <div className="w-max py-[2px] px-1 border border-primari-500 rounded-[4px]">
            <p className="font-sans text-[10px]">DEF 45</p>
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <div className="w-max py-[2px] px-1 border border-primari-500 rounded-[4px]">
            <p className="font-sans font-bold text-[10px]">overgrow</p>
          </div>
          <div className="w-max py-[2px] px-1 border border-primari-500 rounded-[4px]">
            <p className="font-sans font-bold text-[10px]">chlorophyll</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardHeroStats;
