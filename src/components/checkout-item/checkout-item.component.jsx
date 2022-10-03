import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Text,
  Value
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)
  const { name, imageUrl, price, quantity } = cartItem

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const incrementCartItemHandler = () => addItemToCart(cartItem);
  const decrementCartItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`}/>
      </ImageContainer>
      <Text>{name}</Text>
      <Quantity>
        <Arrow onClick={decrementCartItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={incrementCartItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Text>${price}</Text>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem;