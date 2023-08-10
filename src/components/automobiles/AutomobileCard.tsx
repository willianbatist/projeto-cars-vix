'use client'
import "./automobiles.css";
import { ICar } from "../../types/index";
import Link from "next/link";
import Image from "next/image";


export default function AutomobileCard({ id, img, brand, model, description, year, price }: ICar) {
  return (
    <div className="automobileCard">
      <Link href={`/automobile/${id}`}>
        <Image src={img} alt="imagem de carro" width={240} height={140} />
        <div>
          <div>
            <h2>{`${brand} ${model}`}</h2>
            <p id="description">{description}</p>
          </div>
          <div>
            <p id="price">{`R$ ${price}`}</p>
            <p id="year">{year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}