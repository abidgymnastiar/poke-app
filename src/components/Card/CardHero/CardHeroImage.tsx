interface CardHeroImgProps {
  src: string;
}

function CardHeroImg({ src }: CardHeroImgProps) {
  return (
    <>
      <div >
        <img className="h-40" src={src} alt="" />
      </div>
    </>
  );
}
export default CardHeroImg;
