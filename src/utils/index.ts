import { ICar } from "../types/index";


export const handleCharactersFilter = (
  array: ICar[], filterString: string, filterYear: number, filterModel: string
  ) => {

    if (filterString !== "") {
      return array.filter((item) => item.brand === filterString);
    }
  
    if (filterYear !== 0) {
      return array.filter((item) => item.year === filterYear);
    }

    if (filterModel !== "") {
      return array.filter((item) => item.model === filterModel);
    }

    return array;
}