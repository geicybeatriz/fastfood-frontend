import styled from "styled-components";
import Category from "./Category";

const CategoriesContainer = () => {
  return (
    <>
      <Container>
        <Title>Categorias</Title>
        <Text>Navegue por categoria</Text>
        <Content>
          <Category/>
        </Content>
      </Container>
    </>
  )
}

export default CategoriesContainer;

const Container = styled.div`
  width:100%;
  height: 200px;

  padding:25px;

  display:flex;
  flex-direction: column;
  align-items: center;
  /* justify-content:space-between; */


  @media screen and (min-width: 427px) {
    width:82%;
  }
`;

const Title = styled.h1`
  width:100%;
  height:30px;

  text-align: left;
  font-family:'Roboto';
  font-size:16px;
  font-weight:700;
  color: #000;

  display: flex;
  align-items:center;
  justify-content:left;

`;
const Text = styled.h3`
  width:100%;
  height:30px;

  text-align: left;
  font-family:'Roboto';
  font-size:14px;
  font-weight:400;
  color: #000;

  display: flex;
  align-items:center;
  justify-content:left;
`;
const Content = styled.div`
  width:100%;
  height:30px;

  padding-top:20px;

  display: flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:space-between;

`;