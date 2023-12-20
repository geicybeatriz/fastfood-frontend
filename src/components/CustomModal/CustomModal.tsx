import React from 'react';
import Modal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children?: React.ReactNode;
}

const customStyles = {
  overlay: {
    zIndex: '1000',
    background: 'rgba(0, 0, 0, 0.6)',
    width: '100vw',
    height: '100vh',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    borderRadius: '15px',
    opacity: '1',
    minWidth: '80%',
  },
};

Modal.setAppElement('#root');

// eslint-disable-next-line react/function-component-definition
const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      style={customStyles}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
