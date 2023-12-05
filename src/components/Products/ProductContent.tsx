import { useModal } from "../../contexts/ModalContext";
import CustomModal from "../CustomModal/CustomModal";
import ProductDetails from "./ProductDetails";



const ProductContent = () => {
  const {productId, isOpen, closeModal} = useModal();

  //requisição pra api
  

  return (
    <CustomModal isOpen={isOpen} onRequestClose={closeModal} children={
      <>
        <ProductDetails id={productId}/>
      </>
    } />
  )
}

export default ProductContent;