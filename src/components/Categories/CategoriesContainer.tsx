/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import { CategorySelectProps } from '../BodyPage/BodyPage';
import Category from './Category';

const Container = styled.div`
  width: 100%;

  padding: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 427px) {
    width: 82%;
  }
`;

const Title = styled.h1`
  width: 100%;
  height: 30px;

  text-align: left;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 700;
  color: #000;

  display: flex;
  align-items: center;
  justify-content: left;
`;

const Text = styled.h3`
  width: 100%;
  height: 20px;

  text-align: left;
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 400;
  color: #000;

  display: flex;
  align-items: center;
  justify-content: left;
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding: 15px 0;

  @media screen and (min-width: 427px) {
    width: 100%;
    min-height: 200px;

    justify-content: space-between;
    align-items: center;
  }
`;

// eslint-disable-next-line react/function-component-definition
const CategoriesContainer: React.FC<CategorySelectProps> = ({
  setCategory,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  category,
}) => {
  return (
    <Container>
      <Title>Categorias</Title>
      <Text>Navegue por categoria</Text>
      <Content>
        <Category setCategory={setCategory} category="" />
      </Content>
    </Container>
  );
};

export default CategoriesContainer;
