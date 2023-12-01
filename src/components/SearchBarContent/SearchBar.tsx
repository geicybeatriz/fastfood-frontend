import React, { Dispatch, KeyboardEvent, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { Product } from '../../interfaces/interfaces';
import productService from '../../services/ProductsService';
import SearchList from './SearchList';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export interface SearchListProps {
  options: Product[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SearchBar: React.FC<SearchBarProps> =  ({ onSearch }) =>{
  const [query, setQuery] = useState<string>('');
  const [options, setOptions] = useState<Product[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);

    const promise = productService.getProductBySearchBar(query);
    promise
      .then(res => setOptions(res.data))
      .catch(err => console.log(err));
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
        placeholder='O que você procura?' 
      />
      <SearchList options={options} open={open} setOpen={setOpen}/>

    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  width: 100%;
  min-height:30px;

  gap:5px;
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
    font-size:14px;
  }
`;