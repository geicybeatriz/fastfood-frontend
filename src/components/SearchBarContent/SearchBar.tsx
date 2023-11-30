import React, { KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import { Product } from '../../interfaces/interfaces';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> =  ({ onSearch }) =>{
  const [query, setQuery] = useState<string>('');
  const [option, setOptions] = useState<Product[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);

    //aqui faz a request
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
    <Container>
      <StyledInput 
        type="text" 
        value={query} 
        onKeyDown={handleKeyDown} 
        onChange={handleInputChange} 
        placeholder='O que você procura?' />
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  width: 100%;
  min-height:30px;

`;

const StyledInput = styled.input`
  height:30px;

  padding: 10px;

  border:none;
  border-radius: 5px;
  background-color:#f4f4f4;

  color: #000;
  font-family:'Roboto';
  font-size:14;

  ::placeholder{
    color:#9f9f9f;
    font-size:14;
  }
`;