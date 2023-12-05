import styled from "styled-components";
import CategoriesContainer from "../Categories/CategoriesContainer";
import ProductsListContainer from "../Products/ProductsListContainer";
import SearchBarContent from "../SearchBarContent/SearchBarContent";

export default function BodyPage(){
  return (
    <ContainerBodyPage>
      <FixedContainer>
        <SearchBarContent/>
        <CategoriesContainer/>
      </FixedContainer>
      <ProductsListContainer/>
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