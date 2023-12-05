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
  width:150px;
  height:120px;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:5px;

  box-shadow:0 0 10px rgba(0, 0, 0, 0.3);
  border-radius:10px;

  cursor: pointer;

`;

const Image = styled.img`
  width:75px;
  height:75px;

  display:flex;
  align-items:center;
  justify-content:center;

  object-fit:cover;
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
