import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";

export default function Header(){
  return (

    <Container> 
      <Logo />
      <Menu />
    </Container>
  )
}

const Container = styled.div`
  position:fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index:1;

  height: 50px;
  padding: 0 20px;

  background-color: #295D14;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;