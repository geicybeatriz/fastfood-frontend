import ContentPage from "../components/OrderStatusScreen/ContentPage";
import Header from "../components/header/Header";
import { StyledPageContainer } from "./Homepage";

export default function DeliveryPage(){
  return (
    <StyledPageContainer>
      <Header/>
      <ContentPage/>
    </StyledPageContainer>
  )
}