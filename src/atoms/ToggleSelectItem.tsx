/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import { CartItem } from '../interfaces/interfaces';

interface ToggleSelectItemProps {
  id: number;
  name: string;
  price: number;
  selectItem: boolean;
  setSelectItem: React.Dispatch<React.SetStateAction<boolean>>;
  setNewItem: React.Dispatch<React.SetStateAction<CartItem>>;
}

interface ContainerProps {
  id: number;
  isSelected: boolean;
}

interface SelectItemProps {
  isSelected: boolean;
}

const ToggleSelectItem: React.FC<ToggleSelectItemProps> = ({
  id,
  name,
  price,
  selectItem,
  setSelectItem,
  setNewItem,
}) => {
  const handleSelectItem = () => {
    if (!selectItem) {
      setNewItem(prevItem => ({
        ...prevItem,
        additionals: [
          ...prevItem.additionals,
          {
            id,
            name,
            price,
          },
        ],
      }));
    } else {
      setNewItem(prevItem => ({
        ...prevItem,
        additionals: prevItem.additionals.filter(
          additional => additional.id !== id,
        ),
      }));
    }
    setSelectItem(!selectItem);
  };

  return (
    <Container id={id} isSelected={selectItem} onClick={handleSelectItem}>
      <SelectItem isSelected={selectItem} />
    </Container>
  );
};

export default ToggleSelectItem;

const Container = styled.div<ContainerProps>`
  width: 30px;
  height: 30px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 1px solid #b6b5b6;
  border-color: ${props => (props.isSelected ? '#295d14' : '#b6b5b6')};
  cursor: pointer;
`;

const SelectItem = styled.div<SelectItemProps>`
  width: 100%;
  height: 100%;
  display: ${props => (props.isSelected ? 'flex' : 'none')};
  background-color: #295d14;
`;
