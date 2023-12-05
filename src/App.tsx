import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageProvider } from './contexts/PageContext';
import DeliveryPage from './pages/DeliveryPage';
import Homepage from './pages/Homepage';
import KitchenPage from './pages/KitchenPage';
import { ModalProvider } from './contexts/ModalContext';

function App() {
  return (
    <PageProvider >
    <ModalProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} ></Route>
        <Route path='/cozinha' element={<KitchenPage />}></Route>
        <Route path='/retirada' element={<DeliveryPage/> }></Route>
      </Routes>
    </BrowserRouter>
    </ModalProvider>
    </PageProvider>
  );
}

export default App;
