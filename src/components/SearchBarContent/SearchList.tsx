/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import { useModal } from '../../contexts/ModalContext';
import { SearchListProps } from './SearchBar';

const StyledContainer = styled.div<{ open: boolean; height: number }>`
  width: 197px;
  height: ${props => (props.open ? `${props.height}px` : '0')};

  display: ${props => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  z-index: 2;
`;

const Item = styled.article`
  width: 197px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Poppins';
  font-size: 12px;
  font-weight: 400;
  color: #000;

  border: solid 1px #c6c6c6;
  border-top: none;
  border-radius: 5px;

  cursor: pointer;
`;

export default function SearchList({
  options,
  open,
  setOpen,
}: SearchListProps) {
  const { openModal } = useModal();

  const containerHeight = options.length * 30 + 5;

  const handleItemClick = (id: number) => {
    openModal(id);
    setOpen(!open);
  };

  return (
    <StyledContainer open={open} height={containerHeight}>
      {options?.map((item: { name: string }, id: number) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Item key={id} onClick={() => handleItemClick(id)}>
            {item.name}{' '}
          </Item>
        );
      })}
      {open && options.length === 0 && <Item>Produtos não encontrados.</Item>}
    </StyledContainer>
  );
}
