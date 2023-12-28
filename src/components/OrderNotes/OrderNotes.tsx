/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from 'styled-components';
import React from 'react';
import CustomText from '../../atoms/CustomText';

interface OrderNotesProps {
  orderNotes: string;
  setOrderNotes: React.Dispatch<React.SetStateAction<string>>;
}

// eslint-disable-next-line react/function-component-definition
const OrderNotes: React.FC<OrderNotesProps> = ({
  orderNotes,
  setOrderNotes,
}) => {
  return (
    <Container>
      <CustomText type="title" text="Observações" />
      <ObservationsField
        type="text"
        value={orderNotes}
        onChange={event => setOrderNotes(event.target.value)}
        placeholder="Adicione uma observação ao pedido"
      />
    </Container>
  );
};

export default OrderNotes;

const Container = styled.div`
  width: 100%;
  height: 250px;
  padding: 10px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

const ObservationsField = styled.input`
  width: 100%;
  height: 220px;
  padding: 10px;
  background-color: #f4f4f4;
  color: #000;
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 400;

  ::placeholder {
    color: #a4a3a4;
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 400;
  }
`;
