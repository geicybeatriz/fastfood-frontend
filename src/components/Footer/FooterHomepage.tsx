/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from 'styled-components';
import CustomButton from '../../atoms/CustomButton';

// eslint-disable-next-line react/function-component-definition
const FooterHomepage = () => {
  return (
    <Container>
      <CustomButton
        label="Cancelar"
        disabled
        backgroundColor="#fff"
        borderColor="#295d14"
      />
      <CustomButton
        label="Finalizar pedido"
        disabled
        backgroundColor="#295d14"
        borderColor="#295d14"
      />
    </Container>
  );
};

export default FooterHomepage;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: right;
  gap: 50px;

  background-color: yellow;
`;
