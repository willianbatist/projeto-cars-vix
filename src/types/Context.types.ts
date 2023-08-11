export interface AppContextInterface {
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  filterString: string,
  setFilterString: React.Dispatch<React.SetStateAction<string>>,
  filterYear: number,
  setFilterYear: React.Dispatch<React.SetStateAction<number>>,
  filterModel: string, 
  setFilterModel: React.Dispatch<React.SetStateAction<string>>,
}


export interface Props {
  children: React.ReactNode;
}