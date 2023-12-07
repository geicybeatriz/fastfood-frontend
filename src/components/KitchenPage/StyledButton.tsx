/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
import ordersServices from '../../services/OrdersServices';

const Container = styled.div<IconProps>`
  width: 45px;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  background-color: ${props =>
    props.type === 'cancel' ? '#fae5e5' : '#e5f5e6'};

  cursor: pointer;
`;

interface IconProps {
  id: number;
  status: string;
  type: string;
  getAllOrders?: () => void;
}

const StyledButton: React.FC<IconProps> = ({
  type,
  id,
  status,
  getAllOrders,
}) => {
  const handleClick = (id: number, status: string) => {
    const promise = ordersServices.updateOrderStatusById(id, status);
    promise
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then(res => {
        if (getAllOrders) {
          getAllOrders();
        }
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };

  return (
    <Container
      type={type}
      id={id}
      status={status}
      onClick={() => handleClick(id, status)}
    >
      {type === 'cancel' ? (
        <MdClose size="20px" color="#ce0202" />
      ) : (
        <FaCheck size="20px" color="#0aa410" />
      )}
    </Container>
  );
};

export default StyledButton;
