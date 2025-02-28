import CardHero from "../components/Card/CardHero/index.tsx";
import Header from "../components/Header/index.tsx";

function Pages() {
  return (
    <>
      <div className="Container max-w-[1440px] mx-auto py-8">
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
