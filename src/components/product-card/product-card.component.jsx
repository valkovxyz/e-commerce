import { useContext} from 'react';
import { CartContext } from '../../contexts/cart.context';

import Button, {BUTTON_TYPES_CLASSES} from '../button/button.component';
import { Footer, Name, Price, ProductCartContainer } from './product-card.styles';

const ProductCard = ( { product }) => {
  const { addItemToCart } = useContext(CartContext)
  const addProductToCart = () => addItemToCart(product)
  const { name, price, imageUrl } = product
  return (
  <ProductCartContainer>
    <img src={imageUrl} alt={`${name}`}/>
    <Footer>
      <Name>{name}</Name>
      <Price>${price}</Price>
    </Footer>
    <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
  </ProductCartContainer>
  );
};

export default ProductCard;