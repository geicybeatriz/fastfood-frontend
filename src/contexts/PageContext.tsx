import React, { ReactNode, createContext, useState } from 'react';

interface PageProviderProps {
  children: ReactNode;
}
interface PageContextProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}
const PageContext = createContext<PageContextProps | undefined>(undefined);

// eslint-disable-next-line react/function-component-definition
const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [selected, setSelected] = useState<string>('pedidos');

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PageContext.Provider value={{ selected, setSelected }}>
      {children}
    </PageContext.Provider>
  );
};

export { PageContext, PageProvider };
