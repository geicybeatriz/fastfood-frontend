/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';

interface CustomTextProps {
  text: string;
  type: string;
}

interface TextProps {
  type: string;
}

// eslint-disable-next-line react/function-component-definition
const CustomText: React.FC<CustomTextProps> = ({ text, type }) => {
  return <Text type={type}>{text}</Text>;
};

export default CustomText;

const Text = styled.div<TextProps>`
  width: auto;
  display: flex;
  justify-content: left;
  align-items: center;

  font-family: 'Poppins';
  font-size: ${props => (props.type === 'title' ? '16px' : '14px')};
  font-weight: ${props => (props.type === 'title' ? '700' : '400')};
`;
