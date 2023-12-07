/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { ModalProvider } from './contexts/ModalContext';
import { PageProvider } from './contexts/PageContext';
import DeliveryPage from './pages/DeliveryPage';
import Homepage from './pages/Homepage';
import KitchenPage from './pages/KitchenPage';

function App() {
  return (
    <PageProvider>
      <CartProvider>
        <ModalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cozinha" element={<KitchenPage />} />
              <Route path="/retirada" element={<DeliveryPage />} />
            </Routes>
          </BrowserRouter>
        </ModalProvider>
      </CartProvider>
    </PageProvider>
  );
}

export default App;
