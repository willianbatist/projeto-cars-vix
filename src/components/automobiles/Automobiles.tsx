'use client'
import "./automobiles.css";
import { cars } from "../../mockup/index";
import AutomobileCard from "./AutomobileCard";
import { useContext  } from 'react';




export default function Automobiles() {
  const { filterString, filterYear, filterModel } = useContext(AppContext);
  
  
  return (
    <section>
      <div>
        { handleCharactersFilter(cars, filterString, filterYear, filterModel).map((car) => (
          <AutomobileCard
            key={car.id}
            id={car.id}
            img={car.img}
            brand={car.brand}
            model={car.model}
            description={car.description}
            category={car.category}
            year={car.year}
            price={car.price}
            transmission={car.transmission}
            characteristics={car.characteristics}
          />
        )) }
      </div>
    </section>
  );
};
