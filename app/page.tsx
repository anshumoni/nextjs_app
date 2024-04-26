import { CustomFilter, SearchBar } from "@/components";
import Carcard from "@/components/Carcard";
import Hero from "@/components/Hero";
import fetchCar from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allcar = await fetchCar();
  const isdataempty = !Array.isArray(allcar) || allcar.length<1 || !allcar
  console.log(allcar)
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width"
      id="discover">
        <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">
          Car Catalogue
        </h1>
        <p>Explore the car you might like</p>
        </div>
        <div className="home__filter">
          <SearchBar/>
        </div>
        <div className="home__filter-container">
          <CustomFilter/>
          <CustomFilter/>
        </div>
      </div>
      {!isdataempty?(
        <section>
          <div className="home__car-wrapper">
            {allcar.map((car)=><Carcard car={car}/>)}
          </div>
        </section>
        
      ):(
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Opps no car</h2>
          <p>{allcar?.message}</p>
        </div>
      )}
      
    </main>
  );
}
