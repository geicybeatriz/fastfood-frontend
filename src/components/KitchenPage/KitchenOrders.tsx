/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { OrderByGetAllOrders } from '../../interfaces/interfaces';
import ordersServices from '../../services/OrdersServices';
import { ContainerStatus, Status } from '../OrderStatusScreen/ContentPage';
import OrderKitchenDetails from './OrderKitchenDetails';

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  padding: 35px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
`;

const DividerComponents = styled.div`
  width: 1px;
  height: 100%;
  padding-top: 25px;

  background-color: #121212;
`;

export interface OrderKitchenProps {
  orderList: OrderByGetAllOrders[];
  getAllOrders?: () => void;
}

// eslint-disable-next-line react/function-component-definition
const KitchenOrders: React.FC<OrderKitchenProps> = () => {
  const [orders, setOrders] = useState<OrderByGetAllOrders[]>([]);

  const getAllOrders = () => {
    const promise = ordersServices.getAllOrders();
    promise.then(res => setOrders(res.data));
    promise.catch(err => {
      console.log(err);
    });
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  const completedOrders = orders.filter(order => order.status === 'completed');
  const preparingOrders = orders.filter(order => order.status === 'preparing');

  return (
    <Container>
      <ContainerStatus>
        <Status>Preparando: </Status>
        <OrderKitchenDetails
          orderList={preparingOrders}
          getAllOrders={getAllOrders}
        />
      </ContainerStatus>
      <DividerComponents />
      <ContainerStatus>
        <Status>Pronto: </Status>
        <OrderKitchenDetails orderList={completedOrders} />
      </ContainerStatus>
    </Container>
  );
};

export default KitchenOrders;
