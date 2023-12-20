/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { HiMinusCircle } from 'react-icons/hi2';
import { IoAddCircle } from 'react-icons/io5';
import styled from 'styled-components';

interface ItemQuantityProps {
  selectedQuantity: number;
  setSelectedQuantity: React.Dispatch<React.SetStateAction<number>>;
}

// eslint-disable-next-line react/function-component-definition
const ItemQuantityController: React.FC<ItemQuantityProps> = ({
  selectedQuantity,
  setSelectedQuantity,
}) => {
  const handleIncrement = () => {
    setSelectedQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setSelectedQuantity(prevQuantity =>
      prevQuantity > 1 ? prevQuantity - 1 : 1,
    );
  };

  return (
    <Container>
      <HiMinusCircle color="#295d14" size="30px" onClick={handleDecrement} />
      <StyledInput
        type="number"
        value={selectedQuantity}
        onChange={e => setSelectedQuantity(parseInt(e.target.value, 10) || 1)}
      />
      <IoAddCircle color="#295d14" size="30px" onClick={handleIncrement} />
    </Container>
  );
};

export default ItemQuantityController;

const Container = styled.div`
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid #295d14;
  border-radius: 30px;
`;

const StyledInput = styled.input`
  width: 50px;
  height: 28px;
  font-size: 14px;
  text-align: center;
  border: none;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
