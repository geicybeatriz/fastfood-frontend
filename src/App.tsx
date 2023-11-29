import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageProvider } from './contexts/PageContext';
import DeliveryPage from './pages/DeliveryPage';
import Homepage from './pages/Homepage';
import KitchenPage from './pages/KitchenPage';

function App() {
  return (
    <PageProvider >
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} ></Route>
        <Route path='/cozinha' element={<KitchenPage />}></Route>
        <Route path='/retirada' element={<DeliveryPage/> }></Route>

      </Routes>
    </BrowserRouter>
    </PageProvider>
  );
}

export default App;
