/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import styled from 'styled-components';
import ItemQuantityController from './ItemQuantityController';

interface ProductDetailsProps {
  name: string;
  picture: string;
  price: number;
  description: string;
}

// eslint-disable-next-line react/function-component-definition
const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  picture,
  price,
  description,
}) => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
  };

  return (
    <Container>
      <Picture>
        <RedOverlay />
        <ProductCircle>
          <ProductImage src={picture} alt={name} />
        </ProductCircle>
      </Picture>
      <ContainerProduct>
        <FixedContainer>
          <StyledTitle>{name}</StyledTitle>
          <StyledText>{description}</StyledText>
        </FixedContainer>
        <ItemQuantityController
          selectedQuantity={selectedQuantity}
          setSelectedQuantity={setSelectedQuantity}
        />
      </ContainerProduct>
      <StyledTitle>{formatCurrency(price)}</StyledTitle>
    </Container>
  );
};

export default ProductDetails;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 425px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`;

const Picture = styled.div`
  width: 180px;
  height: 110px;

  position: relative;

  background-color: #f16566;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);

  @media screen and (min-width: 425px) {
    width: 200px;
    height: 120px;
  }
`;

const ColorOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;

  border-radius: 10px;
`;

const RedOverlay = styled(ColorOverlay)`
  background-color: #fff;
`;

const ProductCircle = styled.div`
  position: absolute;
  top: 15%;
  left: 30%;

  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 50%;
  margin-top: auto;

  background-color: #fff;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const ContainerProduct = styled.div`
  width: 100%;
  height: 120px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
`;

const FixedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding-top: 5px;
`;

const StyledText = styled.div`
  height: auto;
  word-wrap: normal;
  font-family: 'Poppins';
  font-size: 12px;
  font-weight: 400;
  color: #000;

  @media screen and (min-width: 425px) {
    font-size: 14px;
  }
`;

const StyledTitle = styled(StyledText)`
  width: auto;

  font-weight: 700;
  font-size: 14px;
  text-align: center;

  @media screen and (min-width: 425px) {
    font-size: 16px;
  }
`;
