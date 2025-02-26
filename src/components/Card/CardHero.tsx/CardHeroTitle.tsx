interface HeroTitleProps {
  name: string;
}

function HeroTitle({ name }: HeroTitleProps) {
  return (
    <>
      <div className="py-1">
        <h3 className="font-sans font-semibold text-lg text-black">
          {name}
        </h3>
      </div>
    </>
  );
}
export default HeroTitle;
