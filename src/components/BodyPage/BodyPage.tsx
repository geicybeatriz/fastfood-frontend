import styled from "styled-components";
import CategoriesContainer from "../Categories/CategoriesContainer";
import ProductsListContainer from "../Products/ProductsListContainer";
import SearchBarContent from "../SearchBarContent/SearchBarContent";
import { SetStateAction, useState } from "react";

export interface CategorySelectProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function BodyPage(){
  const [category, setCategory] = useState("")
  //add footer com as infos do cart
  //criar uma state para filtrar os produtos por categoria

  return (
    <ContainerBodyPage>
      <FixedContainer>
        <SearchBarContent/>
        <CategoriesContainer setCategory={setCategory} category={""}/>
      </FixedContainer>
      <ProductsListContainer category={category} setCategory={setCategory}/>
    </ContainerBodyPage>
  );
}

const ContainerBodyPage = styled.main`
  width: 100%;
  
  display:flex;
  flex-direction: column;
  align-items:center;
  margin-top:100px;

  @media screen and (min-width: 427px) {
    min-height: 100px;
    margin-top:50px;
  }
`;

const FixedContainer = styled.div`
  width:100%;

  display:flex;
  flex-wrap: wrap;
  flex-direction:column;
  align-items:center;

  @media screen and (min-width: 427px) {
    width:100%;
  }
`;