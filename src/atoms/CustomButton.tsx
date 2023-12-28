/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';

interface CustomButtonProps {
  label: string;
  disabled?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  // eslint-disable-next-line react/no-unused-prop-types
  onClick?: () => void;
}

interface ContainerButtonProps {
  disabled?: boolean;
  borderColor?: string;
  backgroundColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  disabled,
  borderColor,
  backgroundColor,
}) => {
  return (
    <ContainerButton
      disabled={disabled}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
    >
      {label}
    </ContainerButton>
  );
};

export default CustomButton;

const ContainerButton = styled.button<ContainerButtonProps>`
  width: 200px;
  height: 50px;
  padding: 10px 15px;
  border-radius: 10px;

  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 700;

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  border: 2px solid ${props => (props.disabled ? '#9f9f9f' : props.borderColor)};

  background-color: ${props =>
    props.disabled && props.backgroundColor !== '#fff'
      ? '#9f9f9f'
      : props.backgroundColor};

  color: ${props =>
    props.disabled
      ? '#9f9f9f'
      : props.backgroundColor === '#295d14'
        ? '#fff'
        : '#295d14'};
`;
