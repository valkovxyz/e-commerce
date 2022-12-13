import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart.action';
import { CartItemProps } from '../cart-item/cart-item.component'

import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Text,
  Value
} from './checkout-item.styles';

const CheckoutItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const incrementCartItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const decrementCartItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

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
})

export default CheckoutItem;