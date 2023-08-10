export interface AppContextInterface {
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
}


export interface Props {
  children: React.ReactNode;
}