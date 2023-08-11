'use client'
import React, { createContext, useState } from "react";
import { AppContextInterface, Props } from "../../types/Context.types";


export const AppContext = createContext<AppContextInterface>({} as AppContextInterface);

const AppProvider = ({ children }: Props) => {
  const [page, setPage] = useState(0);
  const [filterString, setFilterString] = useState("");
  const [filterModel, setFilterModel] = useState("");
  const [filterYear, setFilterYear] = useState(0);


  const context = {
    page,
    setPage,
    filterString,
    setFilterString,
    filterYear,
    setFilterYear,
    filterModel,
    setFilterModel
  }


  return (
    <AppContext.Provider value={context}>{children}</AppContext.Provider>
  )
};

export default AppProvider;