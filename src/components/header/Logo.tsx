/* eslint-disable react/react-in-jsx-scope */
import { CiBurger } from 'react-icons/ci';
import styled from 'styled-components';

const Container = styled.div`
  width: auto;
  height: 35px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  cursor: pointer;
`;

const Image = styled.div`
  width: 28px;
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  border-radius: 50%;
`;

const Title = styled.h1`
  color: #fff;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 22;
`;

export default function Logo() {
  return (
    <Container>
      <Image>
        <CiBurger color="#295D14" size={38} />
      </Image>
      <Title>fastfood</Title>
    </Container>
  );
}
