import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase.utils';
import { UserContext } from '../../contexts/user.context';
import { CartContext} from '../../contexts/cart.context';
import CartIcon from '../../components/cart-icon/card-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './navigation.styles.scss'


const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo/>
        </Link>
        <div className="navigation-links-container">
          <Link className="navigation-link" to="/shop">
            SHOP
          </Link>
          {
            currentUser ? (
              <span className="navigation-link" onClick={signOutUser}>{' '}SIGN OUT {' '}</span>
            ) : (
              <Link className="navigation-link" to="/auth">
                SIGN IN
              </Link>
            )}
          <CartIcon />
        </div>
      </div>
      {isCartOpen && <CartDropdown />}

      <Outlet/>
    </>
  )
}

export default Navigation