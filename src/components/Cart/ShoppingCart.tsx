import React from 'react';
import { useCart } from '../../contexts/CartContext';

const ShoppingCart: React.FC = () => {
  const { state, dispatch } = useCart();

  const addToCart = () => {
    // Lógica para adicionar um item ao carrinho
    const newItem = { id: 1, name: 'Bia', price: 10.8, quantity: 2,observations: 'sem cebola', additionals: [{id:1, name: 'bacon', price: 2.0}]};
    dispatch({ type: 'ADD_TO_CART', payload: newItem });
  };

  const removeFromCart = (itemId: number) => {
    // Lógica para remover um item do carrinho
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} ({item.quantity}x)
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ShoppingCart;
