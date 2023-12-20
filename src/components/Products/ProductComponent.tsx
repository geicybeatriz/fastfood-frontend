import React, { Key, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Product } from '../../interfaces/interfaces';
import productService from '../../services/ProductsService';
import { CategorySelectProps } from '../BodyPage/BodyPage';
import { useModal } from '../../contexts/ModalContext';

const Container = styled.div<ProductProps>`
  width: 130px;
  height: 180px;

  position: relative;

  background-color: #f16566;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);

  @media screen and (min-width: 425px) {
    width: 180px;
    height: 220px;
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
  position: relative;
  top: 20px;
  left: 26px;

  width: 78px;
  height: 78px;
  overflow: hidden;
  border-radius: 50%;
  margin-top: auto;

  background-color: #fff;

  @media screen and (min-width: 427px) {
    top: 25px;
    left: 45px;

    width: 90px;
    height: 90px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Title = styled.h1`
  width: 90%;

  text-align: center;
  font-family: 'Poppins';
  font-size: 12px;
  font-weight: 700;
  word-wrap: normal;
  line-height: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Details = styled.div`
  position: absolute;
  bottom: 10px;

  width: 100%;
  height: 30%;

  gap: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

interface ProductProps {
  id: number;
  key: Key;
}

// eslint-disable-next-line react/function-component-definition
const ProductComponent: React.FC<CategorySelectProps> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const { openModal } = useModal();

  useEffect(() => {
    const fetchData = () => {
      const productsData = productService.getAllProducts();
      productsData.then(res => setProducts(res.data));
      productsData.catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
    };
    fetchData();
  }, []);

  let filteredProducts: Product[] = [];

  if (category) {
    filteredProducts = products.filter((item: Product) => {
      return item.category === category;
    });
  } else {
    filteredProducts = [...products];
  }

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
  };

  return (
    <>
      {filteredProducts.map(item => {
        return (
          <Container
            key={item.id}
            id={item.id}
            onClick={() => openModal(item.id)}
          >
            <RedOverlay />
            <ProductCircle>
              <ProductImage src={item.picture} alt={item.name} />
            </ProductCircle>
            <Details>
              <Title>{item.name}</Title>
              <Title>{formatCurrency(item.price)}</Title>
            </Details>
          </Container>
        );
      })}
    </>
  );
};

export default ProductComponent;
