import { useState } from 'react'
import Logo from '../assets/logo.svg'
// import arrowDown from '../assets/arrow-down.svg'

const Nav = () => {

  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <nav className="nav">
      <img src={Logo} alt="logo" />

      <div className='links'>
        <a href="" className='fake-select'>PRODUCTS  </a>
        <a href="">GALLERY</a>
        <a href="">CONTACT</a>
      </div>

      <div className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className='btn-div'> 
        <button>LOGIN</button>
        <button>SIGN UP</button>
      </div>

      <div className={`mobile-menu ${isOpen ? 'show' : ''}`}>
        
        <div className="m-links">
          <a href="#product">Product</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </div>

        <div className='btn-div-mobile'> 
          <button>LOGIN</button>
          <button>SIGN UP</button>
        </div>
      </div>

    </nav>
  )
}

export default Nav
