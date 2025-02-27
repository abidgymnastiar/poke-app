import Button from "../components/Button";
import CardDetailHero from "../components/Card/CardDetailHero";
import { useNavigate } from "react-router-dom";

function DetailPokemon() {

    const navigate = useNavigate();

  return (
    <>
      <div className="Container max-w-[1440px] mx-auto py-8">
        <div className="">
          <Button text="Back" onClick={() => navigate(`/`)}/>
        </div>
        <CardDetailHero />
      </div>
    </>
  );
}
export default DetailPokemon;
