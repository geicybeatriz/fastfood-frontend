import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PageContext } from "../contexts/PageContext";
import { MenuButtonProps } from "../interfaces/interfaces";

export default function Menu(){
  const { selected, setSelected } = useContext(PageContext)!;
  const navigate = useNavigate();

  const handlePageClick = (name: string) => {
    setSelected((prevSelected) => (prevSelected === name ? prevSelected: name));
    if(name !== "pedidos") {
      navigate(`/${name}`);
    } else {
      navigate('/');
    }
    
  }

  return (
    <Container>
      <StyledButton name="pedidos" isSelected={selected === "pedidos"} onClick={() => handlePageClick("pedidos")} >
        Pedidos
      </StyledButton>
      <StyledButton name="cozinha" isSelected={selected === "cozinha"} onClick={() => handlePageClick("cozinha") } >
        Cozinha
      </StyledButton>
      <StyledButton name="retirada" isSelected={selected === "retirada"} onClick={() => handlePageClick("retirada")} >
        Retirada
      </StyledButton>
    </Container>
  );
}


const Container = styled.div`
  width: auto;
  height:auto;

  display:flex;
  justify-content:center;
  align-items:center;
  gap:20px;
`;

const StyledButton = styled.button<MenuButtonProps>`
  width: 80px;
  height: 28px;

  display:flex;
  justify-content:center;
  align-items:center;

  border-radius: 6px;
  border: none;
  background-color: ${(props) => (props.isSelected ? '#1A410E' : '#295D14')};

  font-family: 'Roboto';
  font-size: 12;
  font-weight: bold;
  color: #fff;
`;
