interface CaretHeroAbilitiesProps {
  abiliti: string;
}

function CardHeroAbilities({ abiliti }: CaretHeroAbilitiesProps) {
  return (
    <>
      <div className="flex flex-row gap-1">
        <div className="w-max py-[2px] px-1 border border-primari-500 rounded-[4px]">
          <p className="font-sans font-bold text-[10px]">{abiliti}</p>
        </div>
      </div>
    </>
  );
}
export default CardHeroAbilities;
