import React from "react";
import styled from "styled-components";
import { OrderKitchenProps } from "./KitchenOrders";
import StyledButton from "./StyledButton";

interface OrderStatusProps{
  status:string;
}

const OrderKitchenDetails: React.FC<OrderKitchenProps> = ({orderList, getAllOrders}) => {

  return (
    <>
      {orderList?.map((order, i) => {
        return (
          <Container key={i} status={order.status}>
            <OrderContainer key={i} >
              <Image alt="imagem do produto" src="https://w7.pngwing.com/pngs/993/43/png-transparent-cheeseburger-whopper-hamburger-cheeseburger-bacon-burger-king-specialty-sandwiches-burger-king-food-cheese-recipe-thumbnail.png"/>
              <Details>
                <TitleTop>{order.id} - {order.name}</TitleTop>
                {order.itemDetails.map((item, i) => {
                  return (
                    <>
                      <Box key={i}>
                        <Description>{item.quantity} x {item.product.name}</Description>
                        {(item.itemAdditional.length > 0) && item.itemAdditional.map((elem, i) =>{
                          return (
                            <Description key={i} >Adicional: {elem.additional.name}</Description>
                          )
                        })}
                      </Box>
                    </>
                  );
                })}
              </Details>
              <BoxButtons>
                {order.status === "completed" ?  
                  <StyledButton type="cancel" id={order.id} status="cancelled" getAllOrders={getAllOrders}/>
                :
                <>
                  <StyledButton type="cancel" id={order.id} status="cancelled" getAllOrders={getAllOrders}/>
                  <StyledButton type="complete" id={order.id} status="completed" getAllOrders={getAllOrders}/>
                </>
                }
              </BoxButtons>
            </OrderContainer>
            {order.itemDetails.map((item, i) => {
              if(item.observations.length > 0){
              return (
                <>
                  <Details key={i}>
                    <TitleTop>Observações: </TitleTop>
                    <Text>{item.observations}</Text>
                  </Details>
                </>
              )} else{
                return (<></>);
              }
            })}
          </Container>
        )
      })}
    </>
  )
}

export default OrderKitchenDetails;

const Container = styled.div<OrderStatusProps>`
  width:90%;
  min-height:120px;
  padding:15px;
  margin:25px;

  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;

  gap:10px;
  border-radius:5px;
  box-shadow:0 0 10px rgba(0, 0, 0, 0.3);
  border: ${props => (props.status === "completed") ? "solid 1px #125c13" : 'none'};
`;

const OrderContainer = styled.div`
  width:100%;

  display:flex;
  align-items: center;
  justify-content:center;

  gap:15px;
`;

const Image = styled.img`
  width:75px;
  height:75px;
  object-fit:cover;
`;
const Details = styled.div`
  width:100%;

  display:flex;
  flex-direction:column;
  gap:10px;
`;

const TitleTop = styled.div`
  width:100%;

  background-color: #fff;
  font-family: 'Poppins';
  font-size:14px;
  font-weight: 600;
`;

const Box = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:left;
  align-items:flex-start;
`;

const Description = styled.div`
  width: 100%;
  
  font-family: 'Poppins';
  font-size:12px;
  font-weight: 400;
  color:#363636;
`;

const BoxButtons = styled.div`
  width:50%;
  display:flex;
  align-items: flex-start;
  justify-content:center;
  gap:10px;
`;

const Text = styled.div`
  width:100%;
  min-height: 75px;

  padding:10px;
  display:flex;
  align-items:flex-start;
  justify-content:left;

  border:solid 1px #DADADA;
  border-radius: 5px;
`;