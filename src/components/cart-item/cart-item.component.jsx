import { CartItemContainer, ItemDetails, Text } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name}/>
      <ItemDetails>
        <Text>{name}</Text>
        <Text>{quantity} x ${price}</Text>
      </ItemDetails>

    </CartItemContainer>
  )
}

export default CartItem