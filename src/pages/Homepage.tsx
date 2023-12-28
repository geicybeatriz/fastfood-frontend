/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import BodyPage from '../components/BodyPage/BodyPage';
import Header from '../components/header/Header';
import ProductContent from '../components/Products/ProductContent';
import FooterHomepage from '../components/Footer/FooterHomepage';

export default function Homepage() {
  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <StyledPageContainer>
      <Header />
      <BodyPage />
      <ProductContent />
      <FooterHomepage />
    </StyledPageContainer>
  );
}

export const StyledPageContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;
