'use client'
import React, { createContext, useState } from "react";
import { AppContextInterface, Props } from "../../types/Context.types";


export const AppContext = createContext<AppContextInterface>({} as AppContextInterface);

const AppProvider = ({ children }: Props) => {
  const [page, setPage] = useState(0);


  const context = {
    page,
    setPage
  }


  return (
    <AppContext.Provider value={context}>{children}</AppContext.Provider>
  )
};

export default AppProvider;