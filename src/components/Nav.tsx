import Logo from '../assets/logo.svg'
// import arrowDown from '../assets/arrow-down.svg'

const Nav = () => {
  return (
    <div className="nav">
      <img src={Logo} alt="logo" />

      <div className='links'>
        <a href="" className='fake-select'>PRODUCTS  </a>
        <a href="">GALLERY</a>
        <a href="">CONTACT</a>
      </div>

      <div className='btn-div'> 
        <button>LOGIN</button>
        <button>SIGN UP</button>
      </div>

    </div>
  )
}

export default Nav
