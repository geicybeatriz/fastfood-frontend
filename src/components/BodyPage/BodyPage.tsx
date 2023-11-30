import styled from "styled-components";
import SearchBarContent from "../SearchBarContent/SearchBarContent";

export default function BodyPage(){
  return (
    <ContainerBodyPage>
      <SearchBarContent/>

    </ContainerBodyPage>
  );
}

const ContainerBodyPage = styled.main`
  width: 100vw;
  height:100vh;

  margin-top:100px;
  
  display:flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;

  @media screen and (min-width: 427px) {
    min-height: 100px;

    margin-top:50px;
    justify-content: space-between;
  }
`;