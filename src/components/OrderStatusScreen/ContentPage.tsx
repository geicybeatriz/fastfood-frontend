/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ordersServices from '../../services/OrdersServices';

const Container = styled.main`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  padding: 25px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;

  overflow: scroll;
`;

export const ContainerStatus = styled.div`
  width: 100%;
  padding: 25px;

  display: flex;
  flex-direction: column;
`;

const DividerComponent = styled.div`
  width: 5px;
  min-height: 90%;
  margin-top: 25px;

  background-color: #121212;
  border-radius: 3px;
`;

export const Status = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: left;

  font-family: 'Poppins';
  font-size: 30px;
  font-weight: 700;
  color: #121212;
`;

const Orders = styled.div`
  width: 100%;
  padding: 25px 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  gap: 25px;
`;

const Order = styled.h1<OrderStatusProps>`
  width: 100%;

  font-family: 'Poppins';
  font-size: 50px;
  font-weight: 700;
  text-align: left;
  color: ${props => (props.status === 'preparing' ? '#9F9F9F' : '#125c13')};
`;

interface OrderStatus {
  id: number;
  name: string;
  payment: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  amount: number;
}

interface OrderStatusProps {
  status: string;
}

function ContentPage() {
  const [orders, setOrders] = useState<OrderStatus[]>([]);

  const getOrdersByStatus = () => {
    const promise = ordersServices.getOrdersByStatus();
    promise.then(response => setOrders(response.data));
    promise.catch(err => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  };

  const completedOrders: OrderStatus[] = orders.filter(
    order => order.status === 'completed',
  );
  const preparingOrders: OrderStatus[] = orders.filter(
    order => order.status === 'preparing',
  );

  useEffect(() => {
    getOrdersByStatus();
  }, []);

  return (
    <Container>
      <ContainerStatus>
        <Status>Preparando: </Status>
        <Orders>
          {preparingOrders &&
            preparingOrders.map(order => {
              return (
                <Order key={order.id} status={order.status}>
                  {order.name}
                </Order>
              );
            })}
        </Orders>
      </ContainerStatus>
      <DividerComponent />
      <ContainerStatus>
        <Status>Pronto: </Status>
        <Orders>
          {completedOrders &&
            completedOrders.map(order => {
              return (
                <Order key={order.id} status={order.status}>
                  {order.name}
                </Order>
              );
            })}
        </Orders>
      </ContainerStatus>
    </Container>
  );
}

export default ContentPage;
