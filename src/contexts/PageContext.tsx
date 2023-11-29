import React, { ReactNode, createContext, useState } from "react";

interface PageProviderProps {
  children: ReactNode;
}
interface PageContextProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}
const PageContext = createContext<PageContextProps | undefined>(undefined);

const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [selected, setSelected] = useState<string>("pedidos");

  return (
      <PageContext.Provider value={{ selected, setSelected }}>{children}</PageContext.Provider>
  );
};

export {
  PageContext, PageProvider
};
