/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from 'styled-components';
import React from 'react';
import CustomText from '../../atoms/CustomText';
import AdditionalsList from './AdditionalsList';
import { CartItem } from '../../interfaces/interfaces';

interface AdditionalsContentProps {
  setNewItem: React.Dispatch<React.SetStateAction<CartItem>>;
}

// eslint-disable-next-line react/function-component-definition
const AdditionalsContent: React.FC<AdditionalsContentProps> = ({
  setNewItem,
}) => {
  return (
    <Container>
      <CustomText text="Adicionais" type="title" />
      <CustomText
        text="Selecione os ingredientes que você quer adicionar ao seu lanche"
        type="text"
      />
      <AdditionalsList setNewItem={setNewItem} />
    </Container>
  );
};

export default AdditionalsContent;

const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: grey;
`;
