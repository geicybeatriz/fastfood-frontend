import { useModal } from '../../contexts/ModalContext';
import CustomModal from '../CustomModal/CustomModal';
import ModalProductContent from './ModalProductContent';

function ProductContent() {
  const { productId, isOpen, closeModal } = useModal();

  return (
    <CustomModal isOpen={isOpen} onRequestClose={closeModal}>
      <ModalProductContent id={productId} />
    </CustomModal>
  );
}

export default ProductContent;
