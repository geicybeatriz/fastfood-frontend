import styled from "styled-components";
import ProductComponent from "./ProductComponent";

const ProductsListContainer = () => {
  return (
    <Container>
      <Title>Produtos</Title>
      <Text>Selecione um produto para adicionar ao seu pedido</Text>
      <Content>
        <ProductComponent/>
      </Content>
    </Container>
  )
}

export default ProductsListContainer;

const Container = styled.div`
  width:100%;
  padding:15px 25px;

  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 427px) {
    width:82%;
    padding:25px;
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
  min-height: 400px;
  padding:20px 0;

  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:10px;
  

  @media screen and (min-width:426px){
    justify-content:space-between;
    column-gap:70px;
    row-gap: 70px;
  }
`;