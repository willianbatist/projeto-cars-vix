import { StaticImageData } from "next/image";

export interface ICar {
  id: number,
  img: StaticImageData,
  brand: string,
  model: string,
  description: string,
  category: string,
  year: number,
  price: string,
  transmission: string,
  characteristics: string[],
}
