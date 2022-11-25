import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import CartIcon from '../../components/cart-icon/card-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { NavigationContainer, LogoContainer, NavigationLinks, NavigationLink } from './navigation.styles';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';


const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutUser = () => dispatch(signOutStart());
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