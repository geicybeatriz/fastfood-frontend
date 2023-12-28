/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from 'styled-components';
import React from 'react';
import CustomButton from '../../atoms/CustomButton';
import { CartItem } from '../../interfaces/interfaces';
import { useCart } from '../../contexts/CartContext';
import { useModal } from '../../contexts/ModalContext';

interface FooterModalProps {
  newItem: CartItem;
}

const FooterModal: React.FC<FooterModalProps> = ({ newItem }) => {
  console.log('antes de adicionar', newItem);
  const { closeModal } = useModal();
  const { dispatch } = useCart();
  const handleAddCartItem = () => {
    console.log('add', newItem);
    dispatch({ type: 'ADD_TO_CART', payload: newItem });
    closeModal();
  };

  const handleCloseModal = () => {
    console.log('continua comprando aqui', newItem);
    closeModal();
  };

  return (
    <Container>
      <CustomButton
        label="Continuar adicionando"
        backgroundColor="#fff"
        borderColor="#295d14"
        onClick={handleCloseModal}
      />
      <CustomButton
        label="Adicionar ao pedido"
        backgroundColor="#295d14"
        borderColor="#295d14"
        onClick={handleAddCartItem}
      />
    </Container>
  );
};

export default FooterModal;

const Container = styled.div`
  width: 100%;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 50px;

  cursor: pointer;
`;
