/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Container = styled.div`
  width: 100%;

  padding: 25px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: center;
  gap: 10px;

  @media screen and (min-width: 427px) {
    width: 82%;
    gap: 15px;
  }
`;

const Title = styled.h2`
  width: 100%;
  height: 30px;

  text-align: left;
  font-family: 'Poppins';
  font-size: 20px;
  font-weight: 700;
  color: #000;

  display: flex;
  align-items: center;
  justify-content: left;

  @media screen and (min-width: 427px) {
    font-size: 18px;
  }
`;

export default function SearchBarContent() {
  function handleSearch(query: string) {
    // eslint-disable-next-line no-console
    console.log(query);
  }
  return (
    <Container>
      <Title>Seja bem-vindo!</Title>
      <SearchBar onSearch={handleSearch} />
    </Container>
  );
}
