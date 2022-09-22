import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo />
        </Link>
        <div className='navigation-links-container'>
          <Link className='navigation-link' to='/shop'>
            SHOP
          </Link>
          <Link className='navigation-link' to='/auth'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation