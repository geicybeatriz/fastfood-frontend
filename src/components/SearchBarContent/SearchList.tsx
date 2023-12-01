import { Key } from "react";
import styled from "styled-components";
import { SearchListProps } from "./SearchBar";

const SearchList = ({ options, open, setOpen } : SearchListProps) => {
  const containerHeight = options.length * 30 + 5; 
  const handleItemClick = (id: Key) => {
    //IMPLEMENTAR A BUSCA AOS PRODUTOS PELO ID E ABRIR O MODAL COM AS INFORMAÇÕES DO PRODUTO 
    setOpen(!open);
  }

  return (
    <StyledContainer open={open} height={containerHeight}>
      {options?.map((item: {name: string}, id: Key ) => {
        return (
          <Item key={id} onClick={() => handleItemClick(id)}>{item.name} </Item>
        )}) 
      }
      {(open && options.length === 0) && <Item>Produtos não encontrados.</Item>}
    </StyledContainer>
  );
}

export default SearchList;

const StyledContainer = styled.div<{open:boolean; height:number}>`
  width: 197px;
  height: ${(props) => (props.open ? `${props.height}px` : '0')};

  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:5px;

`;

const Item = styled.article`
  width:197px;
  height: 35px;

  display:flex;
  align-items:center;
  justify-content:center;
  
  font-family:'Roboto';
  font-size:12px;
  font-weight:400;
  color:#000;

  border: solid 1px #c6c6c6;
  border-top:none;
  border-radius: 5px;

  cursor: pointer;
`;
