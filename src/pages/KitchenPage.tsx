/* eslint-disable react/react-in-jsx-scope */
import KitchenOrders from '../components/KitchenPage/KitchenOrders';
import Header from '../components/header/Header';
import { StyledPageContainer } from './Homepage';

export default function KitchenPage() {
  return (
    <StyledPageContainer>
      <Header />
      <KitchenOrders orderList={[]} />
    </StyledPageContainer>
  );
}
