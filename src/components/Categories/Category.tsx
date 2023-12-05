import { Key } from "react";
import styled from "styled-components";
import categoriesData from "./CategoriesData";

interface CategoryProps{
  key: Key;
  type: string;
}

const Category = () => {
  return (
    <>
      {categoriesData.map((item, id) => {
        return (
          <Container key={id} type={item.type}>
            <Image src={item.picture} alt={item.name}></Image>
            <Title>{item.name}</Title>
          </Container>
        )
      })}
    </>
  )
}
export default Category;

const Container = styled.article<CategoryProps>`
  width:120px;
  height:100px;

  padding:10px;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  box-shadow:0 0 10px rgba(0, 0, 0, 0.3);
  border-radius:10px;

  cursor: pointer;

  @media screen and (min-width: 427px) {
    width:150px;
    height:120px;    
  }
`;

const Image = styled.img`
  width:60px;
  height:60px; 

  display:flex;
  align-items:center;
  justify-content:center;

  object-fit:cover;

  @media screen and (min-width: 427px) {
    width:75px;
    height:75px;  
  }
`;

const Title = styled.h2`
  width:100%;
  height:20px;

  text-align:center;
  font-family:'Roboto';
  font-size:12px;
  font-weight:400;
  
  display:flex;
  align-items:center;
  justify-content:center;
`;