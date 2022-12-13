import { FC, memo } from 'react';
import { CartItemContainer, ItemDetails, Text } from './cart-item.styles';
import { CartItem as TCartItem} from "../../store/cart/cart.types";

export type CartItemProps = {
  cartItem: TCartItem
}

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
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
})

export default CartItem