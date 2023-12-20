/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import styled from 'styled-components';
import CategoriesContainer from '../Categories/CategoriesContainer';
import ProductsListContainer from '../Products/ProductsListContainer';
import SearchBarContent from '../SearchBarContent/SearchBarContent';

const ContainerBodyPage = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  overflow-x: hidden;

  @media screen and (min-width: 427px) {
    min-height: 100px;
    margin-top: 50px;
  }
`;

const FixedContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 427px) {
    width: 100%;
  }
`;

export interface CategorySelectProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function BodyPage() {
  const [category, setCategory] = useState('');
  // add footer com as infos do cart

  return (
    <ContainerBodyPage>
      <FixedContainer>
        <SearchBarContent />
        <CategoriesContainer setCategory={setCategory} category="" />
      </FixedContainer>
      <ProductsListContainer category={category} setCategory={setCategory} />
    </ContainerBodyPage>
  );
}
