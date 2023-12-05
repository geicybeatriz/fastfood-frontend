import styled from "styled-components";
import CategoriesContainer from "../Categories/CategoriesContainer";
import SearchBarContent from "../SearchBarContent/SearchBarContent";

export default function BodyPage(){
  return (
    <ContainerBodyPage>
      <SearchBarContent/>
      <CategoriesContainer/>
    </ContainerBodyPage>
  );
}

const ContainerBodyPage = styled.main`
  width: 100%;
  flex-grow:1;
  overflow-y: auto;
  
  display:flex;
  flex-direction: column;
  align-items:center;
  margin-top:100px;


  @media screen and (min-width: 427px) {
    min-height: 100px;
    margin-top:50px;
  }
`;