import CardHero from "../components/Card/CardHero.tsx";
import Header from "../components/Header";

function Pages() {
  return (
    <>
      <div className="Container max-w-[1200px] mx-auto py-8">
        <div className="flex flex-col gap-12">
          <div className="max-w-[200px] mx-auto">
            <Header />
          </div>
          <CardHero />
        </div>
      </div>
    </>
  );
}
export default Pages;
