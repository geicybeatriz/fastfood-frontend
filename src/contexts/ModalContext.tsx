import React, { createContext, useContext, useState } from "react";

interface ModalContextProps {
  isOpen: boolean;
  openModal: (productId: number) => void;
  closeModal: () => void;
  productId: number;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);


export const ModalProvider: React.FC<{children: React.ReactNode} > = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = useState(2);

  const openModal = (productId: number) => {
    setProductId(productId);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, productId}}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
}