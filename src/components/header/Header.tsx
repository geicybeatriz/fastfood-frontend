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
  width:100%;
  
  position:fixed;
  top: 0;
  z-index: 100;

  height: 50px;
  padding: 0 20px;

  background-color: #295D14;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 426px) {
    min-height: 100px;
    padding: 20px 10px 10px 10px;
    gap:15px;

    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;