import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { Product } from '../../interfaces/interfaces';
import productService from '../../services/ProductsService';
import SearchList from './SearchList';

const Container = styled.div`
  width: 100%;
  height: auto;

  gap: 1px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const StyledInput = styled.input`
  height: 30px;

  padding: 10px;

  border: none;
  border-radius: 5px;
  background-color: #f4f4f4;

  color: #000;
  font-family: 'Poppins';
  font-size: 14;

  ::placeholder {
    color: #9f9f9f;
    font-size: 14px;
  }
`;

export interface SearchListProps {
  options: Product[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

// eslint-disable-next-line react/function-component-definition
const SearchBar = () => {
  const [query, setQuery] = useState<string>('');
  const [options, setOptions] = useState<Product[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    if (query.length > 0) {
      const promise = productService.getProductBySearchBar(query);
      promise
        .then(res => {
          setOptions(res.data);
          setQuery('');
          setOpen(true);
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .catch(_err => {
          setOptions([]);
          setOpen(false);
        });
    }
  };

  return (
    <Container>
      <StyledInput
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="O que você procura?"
      />
      {open && <SearchList options={options} open={open} setOpen={setOpen} />}
    </Container>
  );
};

export default SearchBar;
