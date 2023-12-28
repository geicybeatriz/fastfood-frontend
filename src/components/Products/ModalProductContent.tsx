/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
import { useModal } from '../../contexts/ModalContext';
import { CartItem, Product } from '../../interfaces/interfaces';
import productService from '../../services/ProductsService';
import AdditionalsContent from '../Additionals/AdditionalsContent';
import ProductDetails from './ProductDetails';
import OrderNotes from '../OrderNotes/OrderNotes';
import FooterModal from '../Footer/FooterModal';

interface ModalProductProps {
  id: number;
}

// eslint-disable-next-line react/function-component-definition
const ModalProductContent: React.FC<ModalProductProps> = ({ id }) => {
  const { closeModal } = useModal();
  const [productData, setProductData] = useState<Product>();
  const [orderNotes, setOrderNotes] = useState<string>('');
  const [newItem, setNewItem] = useState<CartItem>({
    id,
    name: '',
    price: 0,
    quantity: 1,
    observations: orderNotes,
    additionals: [],
  });

  function getProductById() {
    const promise = productService.getProductById(id);
    promise
      .then(res => {
        setProductData(res.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <Container>
      <CloseButton>
        <MdClose color="#9f9f9f" size="35px" onClick={() => closeModal()} />
      </CloseButton>
      <HeaderModal>Revise seu pedido!</HeaderModal>
      {productData && (
        <ProductDetails
          name={productData.name}
          picture={productData.picture}
          price={productData.price}
          description={productData.description}
        />
      )}
      {productData?.category === ('snacks' || 'combo') && (
        <AdditionalsContent setNewItem={setNewItem} />
      )}
      <OrderNotes orderNotes={orderNotes} setOrderNotes={setOrderNotes} />
      <FooterModal newItem={newItem} />
    </Container>
  );
};

export default ModalProductContent;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 15px;
  overflow-y: auto;
  @media screen and (min-width: 425px) {
    padding: 35px;
    gap: 25px;
  }
`;

const HeaderModal = styled.div`
  width: 100%;
  height: 30px;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  color: #000;

  @media screen and (min-width: 425px) {
    font-size: 26px;
  }
`;

const CloseButton = styled.div`
  width: 30px;
  height: 30px;

  position: absolute;
  top: 15px;
  right: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  @media screen and (min-width: 425px) {
    top: 25px;
    right: 25px;
  }
`;
