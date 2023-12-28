/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import CustomText from '../../atoms/CustomText';
import ToggleSelectItem from '../../atoms/ToggleSelectItem';
import { Additional, CartItem } from '../../interfaces/interfaces';
import { additionalsServices } from '../../services/AdditionalsServices';

interface PriceProps {
  isSelected: boolean;
}

interface AdditionalListProps {
  setNewItem: React.Dispatch<React.SetStateAction<CartItem>>;
}

const AdditionalsList: React.FC<AdditionalListProps> = ({ setNewItem }) => {
  const [selectItem, setSelectItem] = useState<boolean>(false);
  const [additionals, setAdditionals] = useState<Additional[]>([]);

  function getAllAdditionals() {
    const promise = additionalsServices.getAdditionals();
    promise
      .then(res => {
        setAdditionals(res.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
  };

  useEffect(() => {
    getAllAdditionals();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {additionals &&
        additionals.map(item => {
          return (
            <Container>
              <PictureContainer>
                <Picture src={item.picture} alt={item.name} />
              </PictureContainer>
              <FixedContainer>
                <CustomText text={item.name} type="title" />
                <CustomText text={item.description} type="text" />
              </FixedContainer>
              <FixedContainer>
                <Price isSelected={selectItem}>
                  {formatCurrency(item.price)}
                </Price>
              </FixedContainer>
              <FixedContainer>
                <ToggleSelectItem
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  selectItem={selectItem}
                  setSelectItem={setSelectItem}
                  setNewItem={setNewItem}
                />
              </FixedContainer>
            </Container>
          );
        })}
    </>
  );
};
export default AdditionalsList;

const Container = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px;
  background-color: rosybrown;
`;

const PictureContainer = styled.div`
  width: 200px;
  height: 100px;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FixedContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Price = styled.div<PriceProps>`
  width: auto;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 700;
  color: ${props => (props.isSelected ? '#295d14' : '#b6b5b6')};

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
`;
