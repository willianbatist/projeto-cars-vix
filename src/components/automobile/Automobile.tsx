"use client"
import "./automobile.css";
import { notFound, usePathname } from "next/navigation";
import { cars } from "../../mockup/index";
import Image from "next/image";


export default function Automobile() {
  const router = usePathname();
  const id = router?.replace("/automovel/", "");

  const filterId = cars.find((car) => car.id === Number(id));

  if (!filterId) return notFound();
  return (
    <section className="section-automobile">
      <div className="div-automobile">
        <div id="img">
          <Image src={filterId.img} alt="imagem de carro" width={300} height={200} />
        </div>
        <div id="description-automobile">
          <h2 className="title-automobile">{`${filterId.brand} ${filterId.model}`}</h2>
          <p>{`Descrição: `}<span>{filterId.description}</span></p>
          <p>{`Categoria: `}<span>{filterId.category}</span></p>
          <p>{`Ano: `}<span>{filterId.year}</span></p>
          <p>{`Câmbio: `}<span>{filterId.transmission}</span></p>
          <p>Tecnologias:</p>
          {filterId.characteristics.map((item, index) => (
            <ul key={index}>
              <li>{item}</li>
            </ul>
          ))}
          <p>{`R$: `}<span>{filterId.price}</span></p>
        </div>
      </div>
    </section>
  )
}
