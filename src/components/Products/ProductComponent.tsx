import styled from "styled-components";

const ProductComponent = () => {
  return (
    <>
      <Container>
        <RedOverlay/>
        <ProductCircle>
          <ProductImage src="https://w7.pngwing.com/pngs/97/894/png-transparent-strawberry-cheesecake-dessert-toast-cake-thumbnail.png"/>
        </ProductCircle>
        <Details>
          <Title>Burguer Smash</Title>
          <Text>Tem carne</Text>
          <Title>30,50</Title>
        </Details>
      </Container>
      <Container>
        <RedOverlay/>
        <ProductCircle>
          <ProductImage src="https://w7.pngwing.com/pngs/97/894/png-transparent-strawberry-cheesecake-dessert-toast-cake-thumbnail.png"/>
        </ProductCircle>
      </Container>
      <Container>
        <RedOverlay/>
        <ProductCircle>
          <ProductImage src="https://w7.pngwing.com/pngs/97/894/png-transparent-strawberry-cheesecake-dessert-toast-cake-thumbnail.png"/>
        </ProductCircle>
      </Container>
      <Container>
        <RedOverlay/>
        <ProductCircle>
          <ProductImage src="https://w7.pngwing.com/pngs/97/894/png-transparent-strawberry-cheesecake-dessert-toast-cake-thumbnail.png"/>
        </ProductCircle>
      </Container>
      <Container>
        <RedOverlay/>
        <ProductCircle>
          <ProductImage src="https://w7.pngwing.com/pngs/97/894/png-transparent-strawberry-cheesecake-dessert-toast-cake-thumbnail.png"/>
        </ProductCircle>
      </Container>
      <Container>
        <RedOverlay/>
        <ProductCircle>
          <ProductImage src="https://w7.pngwing.com/pngs/97/894/png-transparent-strawberry-cheesecake-dessert-toast-cake-thumbnail.png"/>
        </ProductCircle>
      </Container>
      <Container>
        <RedOverlay/>
        
        <ProductCircle>
          <ProductImage src="https://w7.pngwing.com/pngs/97/894/png-transparent-strawberry-cheesecake-dessert-toast-cake-thumbnail.png"/>
        </ProductCircle>
      </Container>
      <Container>
        <RedOverlay/>
        <ProductCircle>
          <ProductImage src="https://w7.pngwing.com/pngs/97/894/png-transparent-strawberry-cheesecake-dessert-toast-cake-thumbnail.png"/>
        </ProductCircle>
      </Container>
    </>
    
  )
}

export default ProductComponent;

const Container = styled.div`
  width:130px;
  height:180px;  
  
  position: relative;

  background-color: #f16566;
  border-radius: 10px;
  box-shadow:0 0 10px rgba(0, 0, 0, 0.35);

  @media screen and (min-width: 425px) {
    width: 180px;
    height: 220px;
  }
`;

const ColorOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;

  border-radius: 10px;
`;

const RedOverlay = styled(ColorOverlay)`
  background-color: #fff;
`;


const ProductCircle = styled.div`
  position: relative;
  top:20px;
  left:26px;

  width: 78px; 
  height: 78px;
  overflow: hidden;
  border-radius: 50%;
  margin-top: auto;

  @media screen and (min-width:427px){
    top:25px;
    left:47.5px;

    width: 85px; 
    height: 85px;
    
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Title = styled.h1`
  width:100%;

  text-align:center;
  font-family:'Roboto';
  font-size:13px;
  font-weight:700;
  
  display:flex;
  align-items:center;
  justify-content:center;
`;
const Text = styled.h2`
  width:100%;
  margin-bottom: 10px;

  text-align:center;
  font-family:'Roboto';
  font-size:12px;
  font-weight:400;
  
  display:flex;
  align-items:center;
  justify-content:center;
`;

const Details = styled.div`
  position:absolute;
  bottom: 10px;

  width: 100%;
  height: 30%;

  gap: 3px;

  display:flex;
  flex-direction:column;
  align-items:center;
`;