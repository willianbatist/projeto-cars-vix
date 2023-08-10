'use client'
import "./automobiles.css";
import { cars } from "../../mockup/index";
import AutomobileCard from "./AutomobileCard";


export default function Automobiles() {
  return (
    <section>
      <div>
        { cars.map((car) => (
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
