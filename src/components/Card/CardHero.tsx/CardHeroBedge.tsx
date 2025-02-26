interface CardHeroBedgeProps {
  types: string;
}

function CardHeroBedge({types}:CardHeroBedgeProps) {
  return (
    <div className="w-max bg-primari-600 py-[2px] px-2 rounded-xl">
      <p className="font-sans font-semibold text-[10px] text-white">{types}</p>
    </div>
  );
}
export default CardHeroBedge;
