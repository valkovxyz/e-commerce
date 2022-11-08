import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutUser } from '../../utils/firebase.utils';
import { CartContext} from '../../contexts/cart.context';
import CartIcon from '../../components/cart-icon/card-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { NavigationContainer, LogoContainer, NavigationLinks, NavigationLink } from './navigation.styles';
import { selectCurrentUser } from '../../store/user/user.selector';


const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen)
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <NavigationLinks>
          <NavigationLink className="navigation-link" to="/shop">
            SHOP
          </NavigationLink>
          {
            currentUser ? (
              <NavigationLink as='span' onClick={signOutUser}>{' '}SIGN OUT {' '}</NavigationLink>
            ) : (
              <NavigationLink className="navigation-link" to="/auth">
                SIGN IN
              </NavigationLink>
            )}
          <CartIcon />
        </NavigationLinks>
      </NavigationContainer>
      {isCartOpen && <CartDropdown />}

      <Outlet/>
    </>
  )
}

export default Navigation